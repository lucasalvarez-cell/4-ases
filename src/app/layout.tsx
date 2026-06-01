import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4asessales.com"),
  title: "4 Ases Sales | Especialistas en Optimización de Gastos Empresariales",
  description:
    "Transformamos la gestión de costes de tu empresa con transparencia, experiencia y valor humano.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "4 Ases Sales",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "4 Ases Sales" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={geist.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased bg-white text-ink">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
