"use client";

import { motion } from "framer-motion";

// PLACEHOLDER: replace XX values with real data before launch
const metrics = [
  {
    value: "100%",
    label: "Transparencia",
    desc: "En cada proceso y negociación",
  },
  {
    value: "360°",
    label: "Visión Integral",
    desc: "Análisis completo de todas tus partidas",
  },
  {
    value: "24/7",
    label: "Disponibilidad",
    desc: "Soporte continuo para tu empresa",
  },
  {
    value: "+20",
    label: "Años de experiencia",
    desc: "En optimización de costes empresariales",
  },
];

export default function Stats() {
  return (
    <section className="py-10 sm:py-20 bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x divide-border">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="py-6 sm:py-10 px-4 sm:px-8 first:pl-0 last:pr-0"
            >
              <p className="font-display text-5xl md:text-6xl font-bold text-ink leading-none mb-3">
                {m.value}
              </p>
              <p className="font-sans font-semibold text-ink text-sm mb-1">
                {m.label}
              </p>
              <p className="text-muted text-xs leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
