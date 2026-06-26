"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative py-20 sm:py-40 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-ink/78" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-normal leading-[0.95] mb-8">
            ¿Listo para
            <br />
            <span className="text-azure">Reducir tus Costes?</span>
          </h2>
          <p className="text-white/50 text-lg font-sans mb-12 max-w-lg mx-auto leading-relaxed">
            Agendemos una reunión sin compromiso para analizar el potencial de
            ahorro de tu empresa. Sin costes, sin permanencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-white text-ink px-10 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-azure hover:text-white transition-all duration-300 group"
            >
              Solicitar reunión
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="mailto:proyectos@4asess.com"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 text-sm font-sans hover:border-white/70 transition-all"
            >
              <Mail size={14} />
              proyectos@4asess.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
