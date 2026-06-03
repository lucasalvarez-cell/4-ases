"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[65vh] min-h-[520px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-6 font-sans"
        >
          / Quién somos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-white leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(44px, 6vw, 84px)" }}
        >
          La extensión del departamento
          <br />
          <span className="text-azure">de compras de nuestros propios clientes</span>
        </motion.h1>
      </div>
    </section>
  );
}
