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
    photoUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80",
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
    <section id="servicios" className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
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

        {/* Bento grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[560px] md:h-[620px]">
          {services.map((s, i) => {
            if (s.photo) {
              return (
                <Link key={s.num} href={`/servicios#${s.slug}`}>
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
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <p className="text-white/40 text-[10px] tracking-[0.3em] font-sans mb-2">
                        {s.num}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl text-white font-medium mb-2">
                        {s.title}
                      </h3>
                      <p className="text-white/60 text-sm font-sans leading-relaxed max-w-xs">
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            }

            return (
              <Link key={s.num} href={`/servicios#${s.slug}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 md:p-8 flex flex-col justify-between h-full cursor-pointer ${
                    s.dark ? "bg-navy" : "bg-white"
                  }`}
                >
                  <div>
                    <p
                      className={`text-[10px] tracking-[0.3em] font-sans mb-4 ${
                        s.dark ? "text-white/30" : "text-muted"
                      }`}
                    >
                      {s.num}
                    </p>
                    <h3
                      className={`font-display text-2xl md:text-3xl font-medium mb-3 ${
                        s.dark ? "text-white" : "text-ink"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`text-sm font-sans leading-relaxed ${
                        s.dark ? "text-white/55" : "text-muted"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>
                  <div
                    className={`w-8 h-px mt-6 ${
                      s.dark ? "bg-azure" : "bg-cobalt"
                    }`}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
