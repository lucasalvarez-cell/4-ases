"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "+20 años de experiencia en el sector",
  "Red de más de 100 proveedores estratégicos",
  "Metodología probada con resultados tangibles",
  "Contratos transparentes sin permanencias obligatorias",
];

export default function Mission() {
  return (
    <section className="py-12 sm:py-24 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] tracking-[0.35em] text-muted uppercase font-sans mb-6">
              / Nuestra Propuesta
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-8">
              No somos intermediarios,
              <br />
              <span className="text-azure">somos especialistas</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-5 font-sans">
              Aportamos experiencia consolidada, transparencia absoluta y un
              enfoque humano que marca la diferencia. Nuestro equipo combina
              años de experiencia en el sector con una metodología probada.
            </p>
            <p className="text-muted text-lg leading-relaxed font-sans">
              No solo optimizamos costes — construimos relaciones duraderas
              basadas en la confianza y el compromiso mutuo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-cream p-6 sm:p-10 border border-border">
              <p className="font-display text-7xl text-cobalt mb-1">+20</p>
              <p className="text-muted text-sm font-sans mb-10">
                años de experiencia en el sector
              </p>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-cobalt mt-0.5 flex-shrink-0"
                    />
                    <p className="text-ink/70 text-sm font-sans leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
