import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "4 Ases Sales | Reducimos los Costes de tu Empresa",
  description:
    "Central de compras especializada en optimización de gastos empresariales. Reducimos lo que pagas en personal, suministros y más. Sin costes, sin permanencias.",
  openGraph: {
    title: "4 Ases Sales | Reducimos los Costes de tu Empresa",
    description:
      "Central de compras especializada en optimización de gastos empresariales. Sin costes, sin permanencias.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <HomeCTA />
    </main>
  );
}
