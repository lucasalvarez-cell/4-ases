import type { Metadata } from "next";
import ServicesHero from "@/components/servicios/ServicesHero";
import ServicesDetail from "@/components/servicios/ServicesDetail";
import ServicesSectors from "@/components/servicios/ServicesSectors";
import HomeCTA from "@/components/home/HomeCTA";
import JsonLd from "@/components/ui/JsonLd";
import { servicesPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Servicios | 4 Ases Sales",
  description:
    "Optimizamos las principales partidas de gasto de tu empresa: personal y ETT, suministros, lavanderías y más. Sin costes, sin permanencias, con total transparencia.",
  openGraph: {
    title: "Servicios de Optimización de Gastos | 4 Ases Sales",
    description:
      "Personal y ETT, suministros, lavanderías y más. Reducimos tus costes empresariales sin comisiones ocultas.",
    url: "/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <main>
      <JsonLd data={servicesPageSchema} />
      <ServicesHero />
      <ServicesDetail />
      <ServicesSectors />
      <HomeCTA />
    </main>
  );
}
