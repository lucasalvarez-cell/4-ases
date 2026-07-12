const BASE_URL = "https://www.4asess.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "4 Ases Sales",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Central de compras especializada en optimización de gastos empresariales en España.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-677-530-426",
    contactType: "customer service",
    email: "proyectos@4asess.com",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.linkedin.com/company/4-ases-sales",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "4 Ases Sales",
  url: BASE_URL,
};

export const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Optimización de Gastos Empresariales",
  provider: {
    "@type": "Organization",
    name: "4 Ases Sales",
    url: BASE_URL,
  },
  serviceType: "Business Cost Optimization",
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  description:
    "Negociación con proveedores y optimización de costes en personal, suministros, lavanderías y otros gastos empresariales.",
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto | 4 Ases Sales",
  url: `${BASE_URL}/contacto`,
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}
