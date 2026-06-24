import { Resend } from "resend";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "Proyectos@4asess.com";
const FROM_EMAIL = "4 Ases Sales <noreply@4asess.com>";

// Strict email format check
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// Escape all user-supplied values before interpolating into HTML
function esc(s = ""): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// In-memory rate limit: max 3 submissions per IP per hour
const rateLimitStore = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const WINDOW = 60 * 60 * 1000;
  const MAX = 3;
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitStore.set(ip, { count: 1, reset: now + WINDOW });
    return false;
  }
  if (entry.count >= MAX) return true;
  entry.count++;
  return false;
}

export async function POST(req: Request) {
  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  }

  const body = await req.json();
  const nombre: string = String(body.nombre ?? "").trim().slice(0, 200);
  const empresa: string = String(body.empresa ?? "").trim().slice(0, 200);
  const email: string = String(body.email ?? "").trim().slice(0, 254);
  const telefono: string = String(body.telefono ?? "").trim().slice(0, 30);
  const mensaje: string = String(body.mensaje ?? "").trim().slice(0, 2000);

  if (!nombre || !empresa || !email) {
    return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email no válido" }, { status: 400 });
  }

  const [ownerResult] = await Promise.allSettled([
    resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `Nueva solicitud de reunión — ${esc(empresa)}`,
      html: ownerEmailHtml({ nombre, empresa, email, telefono, mensaje }),
    }),
    resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Hemos recibido tu solicitud — 4 Ases Sales",
      html: clientEmailHtml({ nombre }),
    }),
  ]);

  if (ownerResult.status === "rejected") {
    console.error("Owner email failed:", ownerResult.reason);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function ownerEmailHtml(p: Record<string, string>) {
  const safeEmail = encodeURIComponent(p.email);
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f5f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4f0;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e4e0;">
        <tr><td style="background:#0f172a;padding:32px 40px;">
          <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:0.05em;">4 ASES SALES</p>
          <p style="margin:6px 0 0;color:#94a3b8;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Nueva solicitud de reunión</p>
        </td></tr>
        <tr><td style="padding:40px;">
          <p style="margin:0 0 24px;color:#0f172a;font-size:16px;">Has recibido una nueva solicitud de reunión:</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e4e0;">
            ${row("Nombre", esc(p.nombre))}
            ${row("Empresa", esc(p.empresa))}
            ${row("Email", `<a href="mailto:${safeEmail}" style="color:#1a6fb5;">${esc(p.email)}</a>`)}
            ${row("Teléfono", esc(p.telefono) || "—")}
            ${row("Mensaje", esc(p.mensaje) || "—")}
          </table>
          <p style="margin:32px 0 0;">
            <a href="mailto:${safeEmail}" style="display:inline-block;background:#0f172a;color:#ffffff;padding:12px 28px;font-size:13px;font-weight:600;letter-spacing:0.05em;text-decoration:none;">
              Responder a ${esc(p.nombre)}
            </a>
          </p>
        </td></tr>
        <tr><td style="background:#f5f4f0;padding:20px 40px;border-top:1px solid #e5e4e0;">
          <p style="margin:0;color:#94a3b8;font-size:11px;">4 Ases Sales · www.4asess.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `
  <tr>
    <td style="padding:14px 0;border-bottom:1px solid #e5e4e0;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;width:120px;vertical-align:top;">${label}</td>
    <td style="padding:14px 0 14px 16px;border-bottom:1px solid #e5e4e0;color:#0f172a;font-size:14px;vertical-align:top;">${value}</td>
  </tr>`;
}

function clientEmailHtml({ nombre }: { nombre: string }) {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f5f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4f0;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e4e0;">
        <tr><td style="background:#0f172a;padding:32px 40px;">
          <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:0.05em;">4 ASES SALES</p>
          <p style="margin:6px 0 0;color:#94a3b8;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Especialistas en optimización de gastos empresariales</p>
        </td></tr>
        <tr><td style="padding:40px;">
          <p style="margin:0 0 16px;color:#0f172a;font-size:22px;font-weight:600;">Hola, ${esc(nombre)}</p>
          <p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.7;">
            Hemos recibido tu solicitud y nos pondremos en contacto contigo en menos de <strong>24 horas</strong> para agendar una reunión sin compromiso.
          </p>
          <p style="margin:0 0 32px;color:#475569;font-size:15px;line-height:1.7;">
            Analizaremos juntos el potencial de ahorro de tu empresa y te propondremos una solución personalizada, sin costes y sin permanencias.
          </p>
          <table cellpadding="0" cellspacing="0" style="border-left:3px solid #1a6fb5;padding-left:20px;margin-bottom:32px;">
            <tr><td>
              <p style="margin:0 0 6px;color:#0f172a;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">¿Mientras tanto?</p>
              <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;">Puedes conocer más sobre nuestros servicios en <a href="https://www.4asess.com" style="color:#1a6fb5;">www.4asess.com</a></p>
            </td></tr>
          </table>
          <p style="margin:0;color:#475569;font-size:14px;">Un saludo,<br /><strong style="color:#0f172a;">El equipo de 4 Ases Sales</strong></p>
        </td></tr>
        <tr><td style="background:#f5f4f0;padding:20px 40px;border-top:1px solid #e5e4e0;">
          <p style="margin:0;color:#94a3b8;font-size:11px;">4 Ases Sales · www.4asess.com · Si no esperabas este email, ignóralo.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
