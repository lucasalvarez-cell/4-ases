"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { FormEvent } from "react";

const inputClass =
  "w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-ink focus:ring-0 outline-none transition-colors text-ink text-sm font-sans placeholder-muted/60";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = data.get("nombre") ?? "";
    const empresa = data.get("empresa") ?? "";
    const telefono = data.get("telefono") ?? "";
    const mensaje = data.get("mensaje") ?? "";
    const body = `Nombre: ${nombre}%0AEmpresa: ${empresa}%0ATeléfono: ${telefono}%0A%0A${mensaje}`;
    window.location.href = `mailto:proyectos@4asess.com?subject=Solicitud de reunión - ${empresa}&body=${body}`;
  }

  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-10"
          >
            <div>
              <h2 className="font-display text-4xl text-ink mb-4">
                Cuéntanos sobre
                <br />
                <span className="text-azure">tu empresa</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed font-sans">
                Agendemos una reunión sin compromiso para analizar juntos el
                potencial de ahorro. Sin costes, sin permanencias.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:proyectos@4asess.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white transition-all">
                  <Mail size={15} className="text-muted group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-wider font-sans mb-0.5">
                    Email
                  </p>
                  <p className="text-ink text-sm font-sans">
                    proyectos@4asess.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+34666666666"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-cobalt group-hover:bg-cobalt transition-all">
                  <Phone size={15} className="text-muted group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-wider font-sans mb-0.5">
                    Teléfono
                  </p>
                  <p className="text-ink text-sm font-sans">666 666 666</p>
                </div>
              </a>
            </div>

            <div className="border-t border-border pt-8">
              <p className="font-display text-xl text-ink italic mb-2">
                &ldquo;Respuesta en menos de 24h&rdquo;
              </p>
              <p className="text-muted text-xs font-sans leading-relaxed">
                Nuestro equipo analizará tu caso y te propondrá una solución
                personalizada sin ningún coste.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-sans mb-3">
                    Nombre *
                  </label>
                  <input
                    name="nombre"
                    required
                    type="text"
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-sans mb-3">
                    Empresa *
                  </label>
                  <input
                    name="empresa"
                    required
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-sans mb-3">
                    Email *
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="tu@empresa.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-sans mb-3">
                    Teléfono
                  </label>
                  <input
                    name="telefono"
                    type="tel"
                    placeholder="666 000 000"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-sans mb-3">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntanos qué partidas de gasto quieres optimizar..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-ink text-white px-10 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-cobalt transition-all duration-300 group"
              >
                Enviar mensaje
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
