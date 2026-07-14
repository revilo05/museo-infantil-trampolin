# Museo Infantil Trampolín - Plataforma Web

Proyecto de práctica estudiantil orientado a la modernización de la página web y plataforma digital del **Museo Infantil Trampolín**, ubicado en República Dominicana.

## Objetivo

Diseñar y desarrollar una plataforma web moderna, accesible, interactiva y administrable que permita:

- Fortalecer la presencia digital del museo.
- Mejorar la experiencia de familias, niños, adolescentes y centros educativos.
- Facilitar la consulta de información institucional, actividades, salas y servicios.
- Digitalizar el proceso de solicitudes de visitas educativas.
- Centralizar la gestión de contenido y solicitudes mediante un panel administrativo.
- Preparar una base tecnológica escalable para futuras integraciones.

## Alcance principal

La primera fase del proyecto se enfoca en:

- Rediseño visual de la web institucional.
- Página de inicio.
- Sección “Conoce el museo”.
- Sección de salas y experiencias.
- Landing individual por sala.
- Actividades y calendario.
- Landing individual por actividad o evento educativo.
- Formulario de solicitudes educativas.
- Trampolín Inclusivo.
- Preguntas frecuentes.
- Contacto.
- Dashboard administrativo.
- Gestión de solicitudes educativas.
- Gestión de actividades y contenido.

## Consideración sobre Casa Rodrigo de Bastidas

La gestión completa de eventos externos asociados a Casa Rodrigo de Bastidas no forma parte del alcance funcional principal de esta fase. Sin embargo, se incluirá una referencia contextual en la sección “Conoce el museo”, indicando que el Museo Infantil Trampolín opera dentro de Casa Rodrigo de Bastidas. También podrá contemplarse un medio de contacto para actividades o servicios relacionados, sin desarrollar un módulo completo de reservas para esa línea.

## Stack tecnológico actualizado

| Capa | Tecnología | Estado |
|---|---|---|
| Frontend público | Next.js | Recomendado |
| Backoffice | Next.js | Recomendado |
| UI interactiva | Three.js | Uso moderado |
| Backend/BaaS | Supabase Self-Hosted | Recomendado en evaluación |
| Base de datos | PostgreSQL | Recomendado |
| Hosting frontend | Vercel | Recomendado para pruebas y despliegues |
| Infraestructura backend | VPS / DigitalOcean | En evaluación |
| Correo transaccional | Brevo / SendGrid / Mailgun / SMTP | En evaluación |
| Backend propio | NestJS | Alternativa futura si no se usa Supabase |
| Auth propia | Better Auth | Alternativa si no se usa Supabase Auth |

## Público objetivo

- Niños y adolescentes.
- Padres y familias.
- Centros educativos.
- Fundaciones e instituciones.
- Personal administrativo del museo.

## Enfoque UX/UI

El portal debe sentirse como una experiencia educativa digital, no solamente como una web informativa. Se busca una interfaz amigable, colorida, accesible, institucional y entretenida, integrando elementos visuales relacionados con ciencia, naturaleza, energía, cultura y aprendizaje interactivo.

## Criterios técnicos importantes

- Las salas deben tener URL propia: `/salas/[slug]`.
- Las actividades/eventos educativos deben tener URL propia: `/actividades/[slug]`.
- Los modales pueden usarse como vista rápida, pero no deben sustituir páginas de detalle.
- Three.js debe usarse con lazy loading y optimización.
- WhatsApp se manejará como botón de contacto.
- El envío de correos requiere evaluación de proveedor SMTP o correo transaccional.

## Documentación

- [Especificaciones de diseño](./DESIGN.md)
- [Stack tecnológico](./TECH_STACK.md)
- [Requerimientos](./docs/requerimientos.md)
- [Indicadores del proyecto](./docs/indicadores.md)
- [Project Charter](./docs/project-charter.md)
- [EDT/WBS y cronograma](./docs/wbs-cronograma.md)
- [Minutas](./docs/minutas.md)

## Frontend institucional

La rama `feature/institutional-pages` incorpora la primera implementación del
portal público con Next.js App Router, TypeScript estricto y Tailwind CSS. Incluye:

- Inicio.
- Conoce el museo y galería institucional preparada para activos oficiales.
- Trampolín Inclusivo.
- Preguntas frecuentes con búsqueda y categorías.
- Contacto con validación y servicio de entrega reemplazable.
- Header, navegación móvil accesible, footer, sitemap, robots y metadatos.
- Rutas de integración, sin lógica funcional, para Salas, Actividades y Reservaciones.

### Ejecutar localmente

Requisitos: Node.js 20.9 o superior y pnpm.

```bash
pnpm install
copy .env.example .env.local
pnpm dev
```

Abre `http://localhost:3000`. Para una URL pública real, configura
`NEXT_PUBLIC_SITE_URL` en `.env.local`.

### Validar la entrega

```bash
pnpm lint
pnpm typecheck
pnpm build
```

### Límites de integración

- `/salas`, `/actividades` y `/reservaciones` son contratos de navegación y no
  implementan los módulos asignados a otros integrantes.
- El formulario de Contacto valida los datos, pero devuelve `not_configured`
  hasta integrar un proveedor de correo. Nunca muestra un éxito falso.
- Supabase, autenticación, persistencia y esquemas de base de datos quedan fuera
  de esta entrega.
- Teléfono, correo, horarios, WhatsApp, Instagram, tarifas y cronología exacta
  no se publican hasta recibir validación institucional.
