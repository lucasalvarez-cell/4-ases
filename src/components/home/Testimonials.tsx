"use client";

import { motion } from "framer-motion";

// PLACEHOLDER: replace with real client testimonials before launch
const testimonials = [
  {
    quote:
      "Redujimos un 18% el coste de lavandería en nuestro hotel en solo tres meses. El proceso fue completamente transparente y sin ninguna complicación operativa.",
    name: "[Nombre Apellido]",          // PLACEHOLDER
    role: "Director de Operaciones",
    company: "Hotel [Nombre]",          // PLACEHOLDER
    sector: "Hostelería",
  },
  {
    quote:
      "Llevamos dos años con 4 Ases y seguimos encontrando áreas de ahorro que no habíamos contemplado. No es un proveedor, es un socio estratégico.",
    name: "[Nombre Apellido]",          // PLACEHOLDER
    role: "CFO",
    company: "[Empresa Industrial]",    // PLACEHOLDER
    sector: "Industria",
  },
  {
    quote:
      "Lo que más valoro es que nunca siento que me están vendiendo algo. Nos proponen mejoras cuando las encuentran, aunque no les genere comisión adicional.",
    name: "[Nombre Apellido]",          // PLACEHOLDER
    role: "Director General",
    company: "[Cadena Retail]",         // PLACEHOLDER
    sector: "Retail",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            Lo que dicen
            <br />
            <span className="text-azure">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-ink p-8 md:p-10 flex flex-col gap-8"
            >
              <p className="font-display text-5xl text-azure leading-none select-none">
                &ldquo;
              </p>
              <p className="text-white/70 text-sm font-sans leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white text-sm font-sans font-medium">
                  {t.name}
                </p>
                <p className="text-white/40 text-xs font-sans mt-0.5">
                  {t.role} · {t.company}
                </p>
                <span className="inline-block mt-3 text-[10px] tracking-[0.25em] uppercase font-sans text-azure/70">
                  {t.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
