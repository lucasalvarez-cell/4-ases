"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative flex-1 max-w-7xl mx-auto px-8 flex flex-col justify-center pt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/45 text-[10px] tracking-[0.4em] uppercase mb-7 font-sans"
        >
          / Optimización de Gastos Empresariales
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-white leading-[0.92] tracking-tight mb-8"
          style={{ fontSize: "clamp(52px, 7vw, 96px)" }}
        >
          Especialistas en
          <br />
          <span className="text-azure">optimización de</span>
          <br />
          gastos empresariales
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/75 text-base md:text-lg font-sans leading-relaxed mb-10 max-w-sm"
        >
          Transformamos la gestión de costes de tu empresa con
          transparencia, experiencia y valor humano.
          Sin costes, sin permanencias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-white text-ink px-8 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-azure hover:text-white transition-all duration-300 group"
          >
            Solicitar reunión
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-sans font-medium hover:border-white/70 transition-all"
          >
            Nuestros servicios
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
