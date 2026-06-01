"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NosotrosCTA() {
  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-3">
              ¿Quieres conocernos
              <br />
              <span className="text-azure">en persona?</span>
            </h2>
            <p className="text-muted text-sm font-sans leading-relaxed max-w-md">
              Agendemos una reunión sin compromiso. Sin costes, sin
              permanencias — solo una conversación honesta sobre cómo podemos
              ayudarte.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 text-sm font-sans font-semibold tracking-wide hover:bg-cobalt transition-colors duration-300 group flex-shrink-0"
          >
            Solicitar reunión gratuita
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
