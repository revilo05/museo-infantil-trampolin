import { Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__icon" aria-hidden="true">
        <Compass size={42} />
      </div>
      <p className="eyebrow">Ruta sin explorar</p>
      <h1>No encontramos esta página</h1>
      <p>
        Puede que el contenido todavía esté en construcción o que la dirección
        haya cambiado.
      </p>
      <ButtonLink href="/" showArrow>
        Volver al inicio
      </ButtonLink>
    </main>
  );
}
