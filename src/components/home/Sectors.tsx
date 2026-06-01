"use client";

import { motion } from "framer-motion";

const sectors = [
  "Hostelería",
  "Industria",
  "Retail",
  "Sanidad",
  "Servicios",
];

export default function Sectors() {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <p className="text-[10px] tracking-[0.35em] text-muted uppercase font-sans flex-shrink-0 whitespace-nowrap">
            Sectores
          </p>
          <div className="flex flex-wrap gap-0 flex-1">
            {sectors.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center"
              >
                <span className="font-display text-xl md:text-2xl text-ink/70 hover:text-ink transition-colors px-4 md:px-6 py-2 cursor-default">
                  {s}
                </span>
                {i < sectors.length - 1 && (
                  <span className="text-border text-lg">·</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
