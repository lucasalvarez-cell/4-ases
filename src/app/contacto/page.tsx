import type { Metadata } from "next";
import ContactHero from "@/components/contacto/ContactHero";
import ContactForm from "@/components/contacto/ContactForm";
import JsonLd from "@/components/ui/JsonLd";
import { contactPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto | 4 Ases Sales",
  description:
    "Contacta con 4 Ases Sales. Agendemos una reunión sin compromiso para analizar el potencial de ahorro de tu empresa.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | 4 Ases Sales",
    description:
      "Agenda una reunión gratuita. Analizamos el potencial de ahorro de tu empresa sin compromiso.",
    url: "/contacto",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "4 Ases Sales" }],
  },
};

export default function ContactoPage() {
  return (
    <main>
      <JsonLd data={contactPageSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ])}
      />
      <ContactHero />
      <ContactForm />
    </main>
  );
}
