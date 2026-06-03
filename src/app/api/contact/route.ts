import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL!;
const FROM_EMAIL = "4 Ases Sales <noreply@4asessales.com>";

export async function POST(req: Request) {
  const { nombre, empresa, email, telefono, mensaje } = await req.json();

  if (!nombre || !empresa || !email) {
    return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
  }

  const [ownerResult, clientResult] = await Promise.allSettled([
    resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `Nueva solicitud de reunión — ${empresa}`,
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

function ownerEmailHtml({ nombre, empresa, email, telefono, mensaje }: Record<string, string>) {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f5f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f4f0;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e4e0;">
        <!-- Header -->
        <tr><td style="background:#0f172a;padding:32px 40px;">
          <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:0.05em;">4 ASES SALES</p>
          <p style="margin:6px 0 0;color:#94a3b8;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Nueva solicitud de reunión</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:40px;">
          <p style="margin:0 0 24px;color:#0f172a;font-size:16px;">Has recibido una nueva solicitud de reunión:</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e4e0;">
            ${row("Nombre", nombre)}
            ${row("Empresa", empresa)}
            ${row("Email", `<a href="mailto:${email}" style="color:#1a6fb5;">${email}</a>`)}
            ${row("Teléfono", telefono || "—")}
            ${row("Mensaje", mensaje || "—")}
          </table>
          <p style="margin:32px 0 0;">
            <a href="mailto:${email}" style="display:inline-block;background:#0f172a;color:#ffffff;padding:12px 28px;font-size:13px;font-weight:600;letter-spacing:0.05em;text-decoration:none;">
              Responder a ${nombre}
            </a>
          </p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="background:#f5f4f0;padding:20px 40px;border-top:1px solid #e5e4e0;">
          <p style="margin:0;color:#94a3b8;font-size:11px;">4 Ases Sales · www.4asessales.com</p>
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
        <!-- Header -->
        <tr><td style="background:#0f172a;padding:32px 40px;">
          <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:0.05em;">4 ASES SALES</p>
          <p style="margin:6px 0 0;color:#94a3b8;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Especialistas en optimización de gastos empresariales</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:40px;">
          <p style="margin:0 0 16px;color:#0f172a;font-size:22px;font-weight:600;">Hola, ${nombre}</p>
          <p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.7;">
            Hemos recibido tu solicitud y nos pondremos en contacto contigo en menos de <strong>24 horas</strong> para agendar una reunión sin compromiso.
          </p>
          <p style="margin:0 0 32px;color:#475569;font-size:15px;line-height:1.7;">
            Analizaremos juntos el potencial de ahorro de tu empresa y te propondremos una solución personalizada, sin costes y sin permanencias.
          </p>
          <table cellpadding="0" cellspacing="0" style="border-left:3px solid #1a6fb5;padding-left:20px;margin-bottom:32px;">
            <tr><td>
              <p style="margin:0 0 6px;color:#0f172a;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">¿Mientras tanto?</p>
              <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;">Puedes conocer más sobre nuestros servicios en <a href="https://www.4asessales.com" style="color:#1a6fb5;">www.4asessales.com</a></p>
            </td></tr>
          </table>
          <p style="margin:0;color:#475569;font-size:14px;">Un saludo,<br /><strong style="color:#0f172a;">El equipo de 4 Ases Sales</strong></p>
        </td></tr>
        <!-- Footer -->
        <tr><td style="background:#f5f4f0;padding:20px 40px;border-top:1px solid #e5e4e0;">
          <p style="margin:0;color:#94a3b8;font-size:11px;">4 Ases Sales · www.4asessales.com · Si no esperabas este email, ignóralo.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
