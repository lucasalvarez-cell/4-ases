"use client";

import { motion } from "framer-motion";

const sectors = [
  {
    name: "Hostelería",
    desc: "Hoteles, restaurantes y cadenas. Optimizamos lavanderías, suministros energéticos, personal y servicios de mantenimiento.",
    tags: ["Lavanderías", "Suministros", "Personal y ETT"],
  },
  {
    name: "Industria",
    desc: "Fabricación, logística y distribución. Reducimos costes en suministros energéticos, ETT y servicios auxiliares.",
    tags: ["Suministros", "Personal y ETT", "Otros Servicios"],
  },
  {
    name: "Retail",
    desc: "Comercio y distribución. Mejoramos contratos de telecomunicaciones, seguridad, limpieza y personal estacional.",
    tags: ["Suministros", "Personal y ETT", "Otros Servicios"],
  },
  {
    name: "Sanidad",
    desc: "Clínicas, residencias y hospitales. Especializados en lavandería industrial, suministros y personal sanitario.",
    tags: ["Lavanderías", "Suministros", "Personal y ETT"],
  },
  {
    name: "Servicios",
    desc: "Consultoría, coworking y servicios profesionales. Telecomunicaciones, servicios de soporte y suministros.",
    tags: ["Suministros", "Otros Servicios"],
  },
];

export default function ServicesSectors() {
  return (
    <section className="py-24 bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-14">
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Sectores que
            <br />
            <span className="text-azure">Atendemos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {sectors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-cream p-8 flex flex-col gap-5"
            >
              <h3 className="font-display text-xl text-ink">{s.name}</h3>
              <p className="text-muted text-sm font-sans leading-relaxed flex-1">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-sans tracking-wide text-cobalt bg-white border border-border px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
