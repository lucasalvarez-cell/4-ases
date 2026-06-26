"use client";

import { motion } from "framer-motion";
import { Heart, Award, Eye, Users, Sparkles } from "lucide-react";

const row1 = [
  {
    Icon: Heart,
    title: "Valor Humano",
    desc: "Trato personal y cercano en cada proceso. Tu aliado estratégico, no solo un proveedor.",
  },
  {
    Icon: Award,
    title: "Experiencia",
    desc: "Acceso a condiciones que una empresa sola no puede conseguir. Años de negociación en el sector.",
  },
];

const row2 = [
  {
    Icon: Eye,
    title: "Transparencia",
    desc: "Sin comisiones ocultas ni letra pequeña. Claridad total desde el primer día.",
  },
  {
    Icon: Users,
    title: "Compromiso",
    desc: "Seguimiento activo y mejora continua. La relación no termina al firmar.",
  },
  {
    Icon: Sparkles,
    title: "Innovación",
    desc: "Soluciones que evolucionan con las necesidades cambiantes de tu empresa.",
  },
];

const cardBase =
  "bg-white border border-border flex flex-col gap-6 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]";

export default function TeamValues() {
  return (
    <section className="py-10 sm:py-20 bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-5xl text-ink leading-tight mb-10"
        >
          Lo que nos <span className="text-azure">diferencia</span>
        </motion.h2>

        {/* Row 1 — 2 featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {row1.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`${cardBase} p-6 sm:p-10 min-h-[210px]`}
            >
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-azure" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-ink mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2 — 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {row2.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`${cardBase} p-5 sm:p-8 min-h-[190px]`}
            >
              <div className="w-11 h-11 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-azure" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
