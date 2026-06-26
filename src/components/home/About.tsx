"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-12 sm:py-24 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-ink leading-snug mb-8">
            4 Ases Sales transforma la gestión de costes de tu empresa{" "}
            <span className="text-cobalt">
              con transparencia absoluta, experiencia demostrada
            </span>{" "}
            y un enfoque humano que construye alianzas duraderas.
          </p>
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 text-sm font-sans text-cobalt hover:gap-3 transition-all tracking-wide group"
          >
            Conoce quiénes somos
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
