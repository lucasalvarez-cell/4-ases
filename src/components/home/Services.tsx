"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    num: "01",
    slug: "outsourcing-ett",
    title: "Outsourcing y ETT",
    desc: "Optimización de recursos humanos y soluciones de trabajo temporal adaptadas a cada establecimiento.",
    photoUrl: "/limpieza.png",
  },
  {
    num: "02",
    slug: "lavanderia-textil",
    title: "Lavandería y Textil",
    desc: "Mejora de costes, calidad de servicio y eficiencia en lavandería industrial y suministro textil.",
    photoUrl: "/lavanderia.png",
  },
  {
    num: "03",
    slug: "food-beverage",
    title: "Food & Beverage",
    desc: "Café, vending, bebidas y restauración optimizados para huéspedes y empleados.",
    photoUrl: "/servicio-food-beverage.jpg",
  },
  {
    num: "04",
    slug: "menaje-amenities",
    title: "Menaje y Amenities",
    desc: "Artículos de cortesía y menaje de habitaciones que elevan la experiencia del huésped.",
    photoUrl: "/menaje-amenities.png",
  },
  {
    num: "05",
    slug: "mantenimiento-quimicos",
    title: "Mantenimiento y Químicos",
    desc: "Mantenimiento preventivo y correctivo, productos químicos profesionales y limpieza técnica.",
    photoUrl: "/servicio-mantenimiento-quimicos.jpg",
  },
  {
    num: "06",
    slug: "proyectos-medida",
    title: "Proyectos a Medida",
    desc: "Gestión integral de reformas, adecuaciones y nuevas aperturas llave en mano.",
    photoUrl: "/servicio-proyectos-medida.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-muted uppercase font-sans mb-4">
              / Nuestros Servicios
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Partidas de Gastos
              <br />
              <span className="text-azure">que Optimizamos</span>
            </h2>
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-sans text-cobalt hover:gap-3 transition-all tracking-wide self-start"
          >
            Ver todos los servicios <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Grid: single column on mobile, 2 cols on sm, 3×2 bento on lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <Link key={s.num} href={`/servicios#${s.slug}`} className="h-[260px] sm:h-[300px] lg:h-[320px] block">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative overflow-hidden group cursor-pointer h-full"
              >
                <Image
                  src={s.photoUrl}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                  <p className="text-white/40 text-[10px] tracking-[0.3em] font-sans mb-2">
                    {s.num}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-white font-medium mb-1.5 sm:mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm font-sans leading-relaxed max-w-xs">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
