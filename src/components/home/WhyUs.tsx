"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Shield,
    title: "Sin Letra Pequeña",
    desc: "Contratos claros, sin permanencias obligatorias ni comisiones ocultas. Total transparencia en cada acuerdo.",
    dark: false,
  },
  {
    icon: Globe,
    title: "Experiencia Multisectorial",
    desc: "Hostelería, industria, retail, sanidad y servicios. Conocemos las particularidades de cada sector.",
    dark: false,
  },
  {
    icon: Users,
    title: "Red de Proveedores Verificados",
    desc: "Años de relaciones nos permiten negociar condiciones que no están disponibles para empresas individuales.",
    dark: true,
  },
  {
    icon: Zap,
    title: "Equipo Accesible y Proactivo",
    desc: "No solo respondemos cuando llamas: anticipamos necesidades y te proponemos mejoras constantemente.",
    dark: false,
  },
];

export default function WhyUs() {
  return (
    <section className="py-10 sm:py-20 bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <p className="text-[10px] tracking-[0.35em] text-muted uppercase font-sans mb-4">
            / Por Qué Elegirnos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight max-w-2xl">
            ¿Por Qué Empresas
            <br />
            <span className="text-azure">Confían en 4 Ases?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 h-auto md:h-[480px]">
          {/* Hero photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden group h-64 md:h-full"
          >
            <Image
              src="/whyus-partners.jpg"
              alt="Partners estratégicos"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <p className="text-[9px] tracking-[0.4em] text-white/40 uppercase font-sans mb-3">
                / Nuestro Compromiso
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-white leading-snug mb-3">
                Partners estratégicos,
                <br />
                no solo proveedores
              </h3>
              <p className="text-white/55 text-sm font-sans leading-relaxed max-w-sm">
                Trabajamos como una extensión de tu equipo, con alineación total
                de intereses y transparencia completa.
              </p>
            </div>
          </motion.div>

          {/* Icon cards */}
          <div className="flex flex-col gap-3">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex-1 flex items-center gap-4 px-5 py-4 ${
                    r.dark ? "bg-navy" : "bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      r.dark ? "bg-azure/15" : "bg-azure/10"
                    }`}
                  >
                    <Icon size={18} className="text-azure" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3
                      className={`font-display text-sm font-semibold mb-1 leading-snug ${
                        r.dark ? "text-white" : "text-ink"
                      }`}
                    >
                      {r.title}
                    </h3>
                    <p
                      className={`text-xs font-sans leading-relaxed ${
                        r.dark ? "text-white/50" : "text-muted"
                      }`}
                    >
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
