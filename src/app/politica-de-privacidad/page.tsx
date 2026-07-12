import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | 4 Ases Sales",
  description: "Política de privacidad de 4 Ases Sales conforme al RGPD y la LOPDGDD.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
  robots: { index: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" updated="Junio 2026">
      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Identidad:</strong> 4 ASES SALES S.L.</li>
        <li><strong>NIF / CIF:</strong> B16446908</li>
        <li><strong>Domicilio:</strong> Calle Perez Alvarez 90-92, Bajos 3º, 08980, Sant Feliu de Llobregat, Barcelona</li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:Proyectos@4asess.com">Proyectos@4asess.com</a></li>
      </ul>

      <h2>2. Datos que recopilamos</h2>
      <p>A través del formulario de contacto del Sitio recopilamos los siguientes datos personales:</p>
      <ul>
        <li>Nombre y apellidos</li>
        <li>Nombre de la empresa</li>
        <li>Dirección de correo electrónico</li>
        <li>Número de teléfono (opcional)</li>
        <li>Mensaje o consulta libre</li>
      </ul>
      <p>No recopilamos datos especialmente protegidos (salud, ideología, etc.).</p>

      <h2>3. Finalidad y base jurídica del tratamiento</h2>
      <table>
        <thead>
          <tr><th>Finalidad</th><th>Base jurídica</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Gestionar y responder a su solicitud de contacto o reunión</td>
            <td>Ejecución de medidas precontractuales a petición del interesado (art. 6.1.b RGPD)</td>
          </tr>
          <tr>
            <td>Enviar el correo de confirmación de recepción de su solicitud</td>
            <td>Interés legítimo del responsable (art. 6.1.f RGPD)</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Plazo de conservación</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para atender su solicitud y, posteriormente, durante el plazo legalmente exigido para atender posibles responsabilidades. Con carácter general, no se mantendrán más de <strong>2 años</strong> desde el último contacto, salvo que exista una relación contractual en curso.
      </p>

      <h2>5. Destinatarios</h2>
      <p>Los datos no se cederán a terceros salvo obligación legal, con las siguientes excepciones técnicas necesarias para la prestación del servicio:</p>
      <ul>
        <li>
          <strong>Resend, Inc.</strong> (San Francisco, EE. UU.) — proveedor de envío de correo electrónico. La transferencia internacional está amparada por Cláusulas Contractuales Tipo aprobadas por la Comisión Europea. Política de privacidad: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">resend.com/legal/privacy-policy</a>.
        </li>
      </ul>

      <h2>6. Sus derechos</h2>
      <p>Puede ejercer en cualquier momento los siguientes derechos ante el responsable del tratamiento:</p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos suyos tratamos.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
        <li><strong>Oposición:</strong> oponerse al tratamiento basado en interés legítimo.</li>
        <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
        <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
      </ul>
      <p>
        Para ejercer sus derechos, envíe un correo a <a href="mailto:Proyectos@4asess.com">Proyectos@4asess.com</a> indicando el derecho que desea ejercer y adjuntando copia de su documento de identidad.
      </p>
      <p>
        Si considera que el tratamiento de sus datos no es conforme a la normativa, puede presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
      </p>

      <h2>7. Seguridad</h2>
      <p>
        4 Ases Sales aplica medidas técnicas y organizativas adecuadas para proteger sus datos personales frente a pérdidas, accesos no autorizados, alteraciones o divulgaciones no permitidas, de conformidad con lo exigido por el RGPD.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        Esta Política de Privacidad puede ser actualizada en cualquier momento. La versión vigente siempre estará disponible en esta página con la fecha de última actualización.
      </p>
    </LegalLayout>
  );
}
