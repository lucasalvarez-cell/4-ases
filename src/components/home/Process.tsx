"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico Inicial",
    desc: "Análisis exhaustivo de tus partidas de gastos actuales y detección de oportunidades de ahorro para tu empresa.",
  },
  {
    num: "02",
    title: "Estrategia Personalizada",
    desc: "Diseño de soluciones a medida alineadas con tus objetivos y las necesidades específicas de tu sector.",
  },
  {
    num: "03",
    title: "Negociación Transparente",
    desc: "Búsqueda de las mejores condiciones con nuestra red de proveedores verificados y de confianza.",
  },
  {
    num: "04",
    title: "Implementación y Seguimiento",
    desc: "Acompañamiento continuo para garantizar resultados sostenibles y una relación duradera a largo plazo.",
  },
];

export default function Process() {
  return (
    <section className="py-10 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-4">
            Cómo Trabajamos
            <br />
            <span className="text-azure">Contigo</span>
          </h2>
          <p className="text-muted text-sm leading-relaxed font-sans max-w-sm">
            Un proceso claro y transparente diseñado para maximizar el valor
            desde el primer día.
          </p>
        </div>

        <div>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex items-start gap-6 md:gap-12 py-8 border-t border-border last:border-b group"
            >
              <span className="font-display text-4xl md:text-5xl text-ink/12 font-normal flex-shrink-0 w-16 md:w-20 leading-none mt-1">
                {s.num}
              </span>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12">
                <h3 className="font-display text-xl md:text-2xl text-ink">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
