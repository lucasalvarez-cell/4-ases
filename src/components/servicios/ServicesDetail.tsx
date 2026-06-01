"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    num: "01",
    slug: "personal-ett",
    title: "Personal y ETT",
    desc: "Gestionamos la relación con Empresas de Trabajo Temporal para optimizar costes laborales y reducir cargas administrativas. Auditamos contratos actuales, negociamos coeficientes y tarifas, y monitorizamos el cumplimiento mensual para que tu empresa siempre esté en la mejor posición.",
    points: [
      "Auditoría de contratos y coeficientes ETT",
      "Negociación de tarifas y condiciones",
      "Control de facturas y desviaciones",
      "Gestión de altas, bajas y reporting",
      "Seguimiento continuo del servicio",
    ],
    photo:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "02",
    slug: "suministros",
    title: "Suministros",
    desc: "Electricidad, gas, agua y telecomunicaciones. Analizamos tu consumo actual y negociamos con los principales proveedores del mercado para conseguir tarifas que una empresa individual no puede obtener por su volumen de compra.",
    points: [
      "Auditoría de consumos y contratos vigentes",
      "Cambio de proveedor sin interrupciones",
      "Negociación de tarifas fijas y variables",
      "Optimización de potencia contratada",
      "Gestión de incidencias con proveedores",
    ],
    photo:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "03",
    slug: "lavanderias",
    title: "Lavanderías",
    desc: "Diseñamos y gestionamos el servicio de lavandería industrial para hoteles, residencias sanitarias, clínicas y grandes instalaciones. Desde la licitación hasta el control de calidad, gestionamos el proceso completo para garantizar un servicio sin interrupciones.",
    points: [
      "Licitación y selección de proveedores",
      "Definición de estándares de calidad",
      "Control y seguimiento del servicio",
      "Gestión de reclamaciones e incidencias",
      "Optimización de frecuencias y volúmenes",
    ],
    photo:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "04",
    slug: "otros-servicios",
    title: "Otros Servicios",
    desc: "Limpieza, vigilancia, mantenimiento, seguros y cualquier otra partida de gasto operativo de tu empresa. Si se puede optimizar, lo analizamos. Nuestro equipo identifica oportunidades de ahorro en categorías que habitualmente se dan por inamovibles.",
    points: [
      "Análisis de oportunidades por categoría",
      "Benchmarking con empresas del sector",
      "Negociación con proveedores alternativos",
      "Revisión periódica de condiciones",
      "Gestión integral de contratos",
    ],
    photo:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ServicesDetail() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={s.num}
              id={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border ${
                i === services.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Image — left on even, right on odd */}
              <div
                className={`relative overflow-hidden h-72 md:h-[420px] ${
                  isEven ? "md:order-first" : "md:order-last"
                }`}
              >
                <Image
                  src={s.photo}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-ink/15" />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center py-12 ${
                  isEven ? "md:pl-16 md:pr-8" : "md:pr-16 md:pl-8"
                }`}
              >
                <p className="text-[10px] tracking-[0.35em] text-muted uppercase font-sans mb-4">
                  {s.num}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-5">
                  {s.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed font-sans mb-8 max-w-md">
                  {s.desc}
                </p>
                <ul className="space-y-3">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle
                        size={15}
                        className="text-azure flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-sm font-sans text-ink/70">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
