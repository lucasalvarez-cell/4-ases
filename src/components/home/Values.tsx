"use client";

import { motion } from "framer-motion";
import { Heart, Handshake, Award, Eye, Lightbulb } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const values = [
  {
    icon: Heart,
    title: "Valor Humano",
    desc: "Trato cercano y profesional. Cada cliente es único para nosotros y lo tratamos como tal.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    desc: "Relación a largo plazo. Estamos contigo en cada etapa del crecimiento de tu negocio.",
  },
  {
    icon: Award,
    title: "Experiencia",
    desc: "Años en el sector con una metodología probada que genera resultados tangibles.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    desc: "Información clara siempre. Sin sorpresas, sin letra pequeña, sin comisiones ocultas.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    desc: "Soluciones actuales adaptadas a las últimas tendencias y necesidades del mercado.",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionBadge>Quiénes Somos</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-black text-midnight mb-4">
            Nuestro Valor<br />Diferencial
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Cinco pilares que definen cómo trabajamos y qué nos hace diferentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-2xl p-8 border border-gray-100 hover:border-azure/25 hover:shadow-lg hover:shadow-azure/5 hover:-translate-y-1 transition-all duration-300 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-azure/10 group-hover:bg-azure/15 flex items-center justify-center mb-4 transition-colors">
                <v.icon size={22} className="text-azure" />
              </div>
              <h3 className="text-xl font-bold text-midnight mb-2">
                {v.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden text-center p-10 md:p-14"
          style={{
            background: "linear-gradient(135deg, #1B3A6B 0%, #1565C0 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <p className="text-2xl md:text-4xl font-black text-white relative z-10 mb-4 leading-tight">
            &ldquo;No vendemos servicios,<br />construimos alianzas.&rdquo;
          </p>
          <p className="text-white/55 relative z-10 text-lg">
            Cada empresa tiene necesidades únicas, y nuestro equipo se dedica a
            comprender tu realidad específica.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
