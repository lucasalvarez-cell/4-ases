import type { Metadata } from "next";
import ContactHero from "@/components/contacto/ContactHero";
import ContactForm from "@/components/contacto/ContactForm";
import JsonLd from "@/components/ui/JsonLd";
import { contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto | 4 Ases Sales",
  description:
    "Contacta con 4 Ases Sales. Agendemos una reunión sin compromiso para analizar el potencial de ahorro de tu empresa.",
  openGraph: {
    title: "Contacto | 4 Ases Sales",
    description:
      "Agenda una reunión gratuita. Analizamos el potencial de ahorro de tu empresa sin compromiso.",
    url: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <main>
      <JsonLd data={contactPageSchema} />
      <ContactHero />
      <ContactForm />
    </main>
  );
}
