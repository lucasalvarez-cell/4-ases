import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies | 4 Ases Sales",
  description: "Política de cookies de 4 Ases Sales conforme a la LSSI-CE y las directrices de la AEPD.",
  robots: { index: false },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" updated="Junio 2026">
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web almacena en su dispositivo cuando lo visita. Permiten que el sitio recuerde sus preferencias y mejore la experiencia de navegación.
      </p>

      <h2>2. ¿Usa este sitio web cookies?</h2>
      <p>
        <strong>www.4asessales.com no utiliza cookies propias de análisis, publicidad ni seguimiento.</strong> No instalamos ninguna cookie en su dispositivo para medir su comportamiento ni para mostrарle publicidad personalizada.
      </p>
      <p>El Sitio puede generar únicamente cookies de carácter técnico estrictamente necesarias para su funcionamiento correcto, como las de sesión del servidor, que se eliminan automáticamente al cerrar el navegador.</p>

      <h2>3. Servicios de terceros con acceso a datos técnicos</h2>
      <p>
        El Sitio carga imágenes desde el servicio <strong>Unsplash</strong> (<code>images.unsplash.com</code>), alojado en servidores de EE. UU. La carga de estas imágenes implica que su navegador realiza una solicitud a los servidores de Unsplash, lo que puede conllevar el registro de su dirección IP por parte de dicho servicio. 4 Ases Sales no controla este tratamiento. Puede consultar la política de privacidad de Unsplash en <a href="https://unsplash.com/privacy" target="_blank" rel="noopener noreferrer">unsplash.com/privacy</a>.
      </p>

      <h2>4. ¿Necesito aceptar cookies?</h2>
      <p>
        Dado que este Sitio no utiliza cookies no esenciales, no es necesario que acepte o rechace cookies para navegar por él. Si desea gestionar las cookies técnicas, puede hacerlo desde la configuración de su navegador:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>5. Actualizaciones</h2>
      <p>
        Esta Política de Cookies puede ser actualizada si se incorporan nuevas funcionalidades al Sitio que requieran el uso de cookies adicionales. Le recomendamos revisarla periódicamente.
      </p>

      <h2>6. Más información</h2>
      <p>
        Para cualquier consulta sobre el uso de cookies, puede contactarnos en <a href="mailto:Proyectos@4asess.com">Proyectos@4asess.com</a>. Para más información sobre cookies y sus derechos, consulte la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos</a>.
      </p>
    </LegalLayout>
  );
}
