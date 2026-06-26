import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-4">
            <Image
              src="/logo.png"
              alt="4 Ases Sales"
              width={280}
              height={97}
              className="h-28 w-auto mb-5"
            />
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Especialistas en optimización de gastos empresariales.
              Transparencia, experiencia y valor humano.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-ink mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/#servicios", label: "Servicios" },
                { href: "/contacto", label: "Contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted hover:text-ink text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-ink mb-5">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:proyectos@4asess.com"
                  className="flex items-center gap-2 text-muted hover:text-ink text-sm transition-colors"
                >
                  <Mail size={13} />
                  proyectos@4asess.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34677530426"
                  className="flex items-center gap-2 text-muted hover:text-ink text-sm transition-colors"
                >
                  <Phone size={13} />
                  +34 677 53 04 26
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 flex md:justify-end items-start">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border border-ink text-ink text-sm px-6 py-3 hover:bg-ink hover:text-white transition-all tracking-wide font-sans"
            >
              Solicitar reunión
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} 4 Ases Sales. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            {[
              { href: "/aviso-legal", label: "Aviso Legal" },
              { href: "/politica-de-privacidad", label: "Privacidad" },
              { href: "/politica-de-cookies", label: "Cookies" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted text-xs hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
