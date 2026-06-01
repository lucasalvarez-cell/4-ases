"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative h-[55vh] min-h-[440px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center pt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-6 font-sans"
        >
          / Nuestros Servicios
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-white leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
        >
          Partidas de Gasto
          <br />
          <span className="text-azure">que Optimizamos</span>
        </motion.h1>
      </div>
    </section>
  );
}
