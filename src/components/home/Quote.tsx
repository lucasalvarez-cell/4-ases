"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-12 sm:py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-10">
            &ldquo;No vendemos servicios,
            <br />
            <span className="text-azure">construimos alianzas.</span>&rdquo;
          </blockquote>
          <p className="text-white/40 text-sm font-sans max-w-lg mx-auto leading-relaxed">
            Cada empresa tiene necesidades únicas, y nuestro equipo se dedica
            a comprender tu realidad específica para construir una solución
            verdaderamente personalizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
