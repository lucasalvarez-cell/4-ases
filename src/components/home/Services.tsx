"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    num: "01",
    slug: "personal-ett",
    title: "Personal y ETT",
    desc: "Gestión eficiente de recursos humanos y empresas de trabajo temporal para maximizar la productividad.",
    photo: true,
    photoUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    dark: false,
  },
  {
    num: "02",
    slug: "suministros",
    title: "Suministros",
    desc: "Energía, agua, telecomunicaciones y otros suministros esenciales con tarifas altamente competitivas.",
    photo: true,
    photoUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    dark: false,
  },
  {
    num: "03",
    slug: "lavanderias",
    title: "Lavanderías",
    desc: "Servicios de lavandería industrial optimizados para los sectores hotelero, sanitario y corporativo.",
    photo: true,
    photoUrl: "/lavanderia.png",
    dark: true,
  },
  {
    num: "04",
    slug: "otros-servicios",
    title: "Otros Servicios",
    desc: "Soluciones integrales adaptadas a todas las necesidades operativas específicas de tu empresa.",
    photo: true,
    photoUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    dark: false,
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

        {/* Grid: single column on mobile, 2×2 bento on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 sm:h-[560px] md:h-[620px]">
          {services.map((s, i) => (
            <Link key={s.num} href={`/servicios#${s.slug}`} className="h-[260px] sm:h-full block">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden group cursor-pointer h-full"
              >
                <Image
                  src={s.photoUrl}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8">
                  <p className="text-white/40 text-[10px] tracking-[0.3em] font-sans mb-2">
                    {s.num}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-medium mb-1.5 sm:mb-2">
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
