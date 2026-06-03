import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Aviso Legal | 4 Ases Sales",
  description: "Aviso legal de 4 Ases Sales conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información.",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" updated="Junio 2026">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición del usuario los siguientes datos:
      </p>
      <ul>
        <li><strong>Denominación social:</strong> [NOMBRE_EMPRESA_O_AUTÓNOMO] <em className="placeholder">(pendiente de completar)</em></li>
        <li><strong>NIF / CIF:</strong> [NIF_CIF] <em className="placeholder">(pendiente de completar)</em></li>
        <li><strong>Domicilio:</strong> [DIRECCIÓN_COMPLETA] <em className="placeholder">(pendiente de completar)</em></li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:Proyectos@4asess.com">Proyectos@4asess.com</a></li>
        <li><strong>Sitio web:</strong> <a href="https://www.4asessales.com">www.4asessales.com</a></li>
        <li><strong>Datos registrales:</strong> [REGISTRO_MERCANTIL_TOMO_FOLIO] <em className="placeholder">(pendiente de completar — solo si es sociedad)</em></li>
      </ul>

      <h2>2. Objeto y ámbito de aplicación</h2>
      <p>
        El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.4asessales.com</strong> (en adelante, el «Sitio»), titularidad de 4 Ases Sales. El acceso al Sitio implica la aceptación plena de las condiciones aquí recogidas.
      </p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del Sitio —incluyendo, sin carácter limitativo, textos, imágenes, logotipos, marcas, diseño gráfico y código fuente— son propiedad de 4 Ases Sales o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional en materia de propiedad intelectual e industrial.
      </p>
      <p>
        Queda expresamente prohibida la reproducción total o parcial, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos sin autorización escrita previa del titular.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        4 Ases Sales no se hace responsable de los daños o perjuicios que pudieran derivarse del uso de la información contenida en este Sitio, de interrupciones del servicio por causas técnicas ajenas a su control, ni de los contenidos de sitios web de terceros enlazados desde este Sitio.
      </p>

      <h2>5. Enlaces externos</h2>
      <p>
        El Sitio puede contener enlaces a páginas de terceros. 4 Ases Sales no controla ni asume responsabilidad alguna sobre el contenido, políticas de privacidad o prácticas de dichos sitios externos.
      </p>

      <h2>6. Ley aplicable y jurisdicción</h2>
      <p>
        El presente Aviso Legal se rige por la legislación española. Para cualquier controversia derivada del acceso o uso del Sitio, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la normativa aplicable establezca otro fuero imperativo.
      </p>
    </LegalLayout>
  );
}
