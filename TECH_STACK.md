# TECH_STACK.md - Propuesta de Stack Tecnológico

## Resumen

Luego de la revisión técnica del proyecto, se propone un stack moderno, escalable y orientado a una plataforma web pública con panel administrativo.

La web del Museo Infantil Trampolín no será únicamente un backoffice o SPA. Tendrá múltiples páginas públicas, contenido indexable, necesidad de SEO y una experiencia tipo MPA. Por esta razón, se recomienda utilizar **Next.js** como framework principal del frontend.

## Stack recomendado

| Capa | Tecnología | Estado | Justificación |
|---|---|---|---|
| Frontend público | Next.js | Recomendado | Permite SSR, rutas, SEO y estructura multipágina. |
| UI interactiva | Three.js | Uso moderado | Aporta experiencias visuales educativas sin sobrecargar la web. |
| Backend/API | NestJS | Recomendado | Arquitectura modular, escalable y mantenible. |
| Base de datos | PostgreSQL | Recomendado | Base relacional robusta para solicitudes, usuarios, actividades y calendario. |
| Autenticación | Better Auth | En evaluación | Compatible con TypeScript, Next.js y PostgreSQL mediante adaptadores. |
| Servicios administrados | Supabase | En evaluación | Reduce trabajo en auth/storage/DB, pero implica dependencia tercerizada. |

## Frontend: Next.js

Se recomienda Next.js porque la plataforma necesita:

- Buen SEO.
- Renderizado del lado del servidor.
- Múltiples rutas públicas.
- Optimización de rendimiento.
- Estructura escalable para páginas informativas y administrativas.
- Posibilidad de combinar web pública y backoffice protegido.

## Three.js

Three.js se contempla como apoyo visual, no como base completa de la UI.

Casos de uso:

- Hero interactivo.
- Tarjetas 3D de salas.
- Experiencias educativas simples.
- Mascotas interactivas.
- Recorrido visual ligero.

Debe usarse con moderación para no afectar rendimiento, accesibilidad ni experiencia móvil.

## Backend: NestJS

NestJS se mantiene como propuesta backend por su estructura modular. Módulos sugeridos:

- Usuarios y roles.
- Solicitudes educativas.
- Actividades.
- Calendario.
- Contenido.
- Notificaciones.
- Autenticación.

## Base de datos: PostgreSQL

PostgreSQL es recomendado para manejar:

- Usuarios.
- Roles.
- Solicitudes.
- Estados de solicitud.
- Actividades y talleres.
- Contenido.
- Calendario.
- Historial administrativo.

## Supabase en evaluación

Supabase puede acelerar el desarrollo al ofrecer PostgreSQL administrado, autenticación y almacenamiento. Sin embargo, debe evaluarse cuidadosamente porque:

- Es un servicio tercerizado.
- Puede generar dependencia externa.
- Su capa gratuita tiene condiciones y límites operativos.
- La institución debe validar si desea depender de un BaaS.

## Better Auth en evaluación

Better Auth puede evaluarse para autenticación porque es compatible con stacks TypeScript y puede integrarse con Next.js y PostgreSQL mediante ORM o adaptadores como Prisma, Drizzle o Kysely.

## Recomendación final

Para la primera versión se recomienda:

```txt
Next.js + Three.js + NestJS + PostgreSQL
```

Y dejar en evaluación:

```txt
Better Auth + Supabase
```

La decisión final debe validarse con el analista técnico asignado y las restricciones institucionales del museo.
