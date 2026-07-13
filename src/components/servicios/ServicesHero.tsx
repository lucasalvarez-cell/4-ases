"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative h-[55vh] min-h-[360px] sm:min-h-[440px] overflow-hidden">
      <Image
        src="/hero-servicios.jpg"
        alt=""
        fill
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAIBAAAQMEAgMAAAAAAAAAAAAAAQIDEQAEBSESMRUiof/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwCMXlW7e3cVbot2kE8FAzJgd7Pe6z8m0zoNtqCvaeUfKUorYN5T/9k="
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-center pt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-6 font-sans"
        >
          / Nuestros Servicios
        </motion.p>

        <motion.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
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
