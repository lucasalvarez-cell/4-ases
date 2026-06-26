"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    num: "01",
    slug: "outsourcing-ett",
    title: "Outsourcing y ETT",
    desc: "Optimización de recursos humanos y soluciones de trabajo temporal adaptadas a la operativa de cada establecimiento. Gestionamos la relación con ETTs, auditamos contratos, negociamos coeficientes y monitorizamos el cumplimiento para que siempre estés en la mejor posición.",
    points: [
      "Auditoría de contratos y coeficientes ETT",
      "Negociación de tarifas y condiciones",
      "Control de facturas y desviaciones",
      "Gestión de altas, bajas y reporting",
      "Seguimiento continuo del servicio",
    ],
    photo:
      "/limpieza.png",
  },
  {
    num: "02",
    slug: "lavanderia-textil",
    title: "Lavandería y Textil",
    desc: "Mejora de costes, calidad de servicio y eficiencia en los procesos de lavandería y suministro textil. Diseñamos y gestionamos el servicio de lavandería industrial para hoteles, residencias sanitarias y grandes instalaciones, desde la licitación hasta el control de calidad.",
    points: [
      "Licitación y selección de proveedores",
      "Definición de estándares de calidad",
      "Control y seguimiento del servicio",
      "Gestión de reclamaciones e incidencias",
      "Optimización de frecuencias y volúmenes",
    ],
    photo:
      "/lavanderia.png",
  },
  {
    num: "03",
    slug: "food-beverage",
    title: "Food & Beverage (F&B)",
    desc: "Café, vending, bebidas, restauración y soluciones para huéspedes y empleados. Negociamos con proveedores de alimentación y bebidas para optimizar costes sin comprometer la calidad de la experiencia gastronómica de tu establecimiento.",
    points: [
      "Auditoría de proveedores y contratos vigentes",
      "Negociación de tarifas con distribuidores",
      "Optimización de carta y escandallos",
      "Gestión de máquinas de vending y café",
      "Control de mermas y desperdicio alimentario",
    ],
    photo:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "04",
    slug: "menaje-amenities",
    title: "Menaje y Amenities",
    desc: "Artículos de cortesía, menaje de habitaciones y productos que contribuyen a la experiencia del huésped. Seleccionamos y negociamos los mejores proveedores para que cada detalle refleje el nivel de tu establecimiento al mejor coste posible.",
    points: [
      "Selección y homologación de proveedores",
      "Negociación de tarifas y volúmenes",
      "Control de stock y reposición",
      "Personalización de amenities según categoría",
      "Gestión de novedades y tendencias del sector",
    ],
    photo:
      "/menaje-amenities.png",
  },
  {
    num: "05",
    slug: "mantenimiento-quimicos",
    title: "Mantenimiento y Productos Químicos",
    desc: "Soluciones para mantenimiento preventivo y correctivo, productos químicos profesionales, piscinas, limpieza técnica y eficiencia operativa de las instalaciones. Optimizamos contratos de mantenimiento y suministro de productos para maximizar la vida útil de tus activos.",
    points: [
      "Auditoría de contratos de mantenimiento",
      "Negociación con proveedores de productos químicos",
      "Mantenimiento preventivo y correctivo",
      "Gestión de tratamiento de piscinas",
      "Limpieza técnica e higienización industrial",
    ],
    photo:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
  },
  {
    num: "06",
    slug: "proyectos-medida",
    title: "Proyectos a Medida",
    desc: "Gestión integral de reformas, adecuaciones y construcción de nuevas aperturas, ofreciendo soluciones completas llave en mano desde la planificación hasta la entrega final del proyecto. Coordinamos todos los agentes implicados para cumplir plazos y presupuestos.",
    points: [
      "Planificación y gestión de obras",
      "Coordinación de contratistas y proveedores",
      "Control de presupuesto y plazos",
      "Nuevas aperturas llave en mano",
      "Reformas y adecuaciones de locales",
    ],
    photo:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
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
