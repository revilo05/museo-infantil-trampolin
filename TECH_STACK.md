# TECH_STACK.md - Propuesta de Stack Tecnológico Actualizada

## Resumen

Luego de la reunión técnica con Francisco Sánchez, se ajustó la propuesta tecnológica del proyecto. La plataforma del Museo Infantil Trampolín no debe tratarse como una SPA informativa simple, sino como una web pública con múltiples rutas, contenido indexable, páginas de detalle y necesidad de SEO.

Por esta razón, se recomienda utilizar **Next.js** como framework principal del frontend, en lugar de React puro bajo un enfoque CSR. Next.js permite trabajar sobre React, pero aporta enrutamiento, SSR/SSG, manejo de metadatos, Open Graph, URLs amigables y mejor soporte para SEO.

## Stack recomendado actualizado

| Capa | Tecnología | Estado | Justificación |
|---|---|---|---|
| Frontend público | Next.js | Recomendado | Permite SSR/SSG, rutas, SEO, Open Graph, URLs amigables y estructura multipágina. |
| Backoffice / panel administrativo | Next.js | Recomendado | Puede implementarse como área protegida dentro del mismo proyecto. El SEO no es prioritario aquí. |
| UI interactiva | Three.js | Uso moderado | Aporta experiencias visuales educativas, siempre con lazy loading y optimización. |
| Backend / BaaS | Supabase Self-Hosted | Recomendado en evaluación | Reduce desarrollo de auth, CRUD, storage y API; evita dependencia directa de la nube gratuita de Supabase. |
| Base de datos | PostgreSQL | Recomendado | Base relacional robusta; Supabase trabaja sobre PostgreSQL. |
| Hosting frontend | Vercel | Recomendado para pruebas y despliegues | Facilita CI/CD, preview deployments, rollback y publicación rápida. |
| Infraestructura backend | VPS / DigitalOcean | En evaluación | Candidato para alojar Supabase self-hosted vía Docker. |
| Correo transaccional | Brevo, SendGrid, Mailgun u otro SMTP | En evaluación | Necesario para formularios, confirmaciones, recordatorios y notificaciones. |
| WhatsApp | Botón de contacto | Recomendado básico | Se usará como canal complementario, no como automatización principal vía API. |

## Decisión sobre React vs Next.js

React puro fue considerado inicialmente para el frontend. Sin embargo, al tratarse de una web pública con múltiples páginas, eventos, salas, URLs compartibles y requerimientos SEO, React bajo CSR puede aumentar la complejidad técnica.

Next.js es más adecuado porque permite:

- Rutas nativas.
- SSR y SSG.
- Generación de páginas estáticas o dinámicas.
- Mejor SEO.
- URLs amigables para salas y eventos.
- Manejo más simple de metadatos.
- Open Graph para compartir eventos en redes sociales.
- Mejor estructura para una web institucional multipágina.

## Páginas dinámicas requeridas

Como resultado de la revisión técnica, se determinó que no basta con mostrar salas y eventos únicamente mediante modales o pop-ups. Cada elemento debe poder tener una URL única.

### Salas

Cada sala debe tener una landing o página de detalle propia:

```txt
/salas/[slug]
```

Beneficios:

- Mejor SEO.
- Métricas por sala.
- Posibilidad de compartir una sala específica.
- Galería propia.
- Información ampliada.
- Posibles recursos interactivos o educativos por sala.

### Eventos / actividades

Cada evento o actividad debe tener su página de detalle propia:

```txt
/actividades/[slug]
```

Beneficios:

- URL individual para campañas, redes sociales y registros.
- Mejor trazabilidad del interés por actividad.
- Espacio suficiente para cupos, fechas, descripción, ubicación interna, condiciones y CTA.

## Three.js

Three.js se contempla como apoyo visual, no como base completa de la UI.

Casos de uso recomendados:

- Hero interactivo ligero.
- Tarjetas 3D de salas.
- Experiencias educativas simples.
- Mascotas interactivas.
- Recorrido visual ligero.

Recomendaciones técnicas:

- Usar lazy loading.
- Evitar cargar recursos 3D en el primer render si no son necesarios.
- Priorizar CSS animations y SVG cuando sea suficiente.
- Optimizar para móviles.
- Cargar únicamente lo que esté dentro o próximo al viewport.

## Supabase Self-Hosted

Supabase se mantiene como alternativa fuerte porque reduce trabajo en:

- Autenticación.
- Roles y usuarios.
- CRUD.
- APIs.
- Storage.
- PostgreSQL.

Sin embargo, no se recomienda depender de la capa gratuita de Supabase Cloud para producción porque puede pausar proyectos por inactividad y mantiene dependencia de un servicio tercerizado.

La alternativa más conveniente sería evaluar **Supabase self-hosted** sobre un VPS, posiblemente DigitalOcean, utilizando Docker.

## NestJS

NestJS fue considerado inicialmente como backend. Luego de la revisión técnica, se entiende que si se adopta Supabase como backend/BaaS, NestJS no sería necesario para esta primera versión, ya que se duplicaría parte del trabajo.

NestJS queda como alternativa futura si:

- El proyecto necesita lógica de negocio más compleja.
- Se decide no usar Supabase.
- Se requiere una API propia completamente desacoplada.

## Better Auth

Better Auth fue considerado como opción para autenticación con Next.js y PostgreSQL. Sin embargo, si se utiliza Supabase, se priorizaría Supabase Auth.

Better Auth queda como alternativa si el equipo decide implementar autenticación propia con PostgreSQL sin Supabase.

## Vercel

Vercel se recomienda para el frontend por:

- Despliegues automáticos.
- Preview deployments.
- Rollback rápido.
- Integración sencilla con Next.js.
- Buen plan gratuito para etapa de desarrollo y pruebas.

## DigitalOcean / VPS

Se debe evaluar una infraestructura basada en VPS, preferiblemente DigitalOcean, para alojar Supabase self-hosted y la base de datos.

Tareas pendientes:

- Validar requisitos mínimos de servidor.
- Confirmar compatibilidad con Docker.
- Definir estrategia de backups.
- Definir actualizaciones de Supabase self-hosted.
- Validar costos mensuales.

## Correo transaccional y formularios

El proyecto necesitará enviar correos para:

- Confirmaciones de solicitudes.
- Cambios de estado.
- Recordatorios.
- Solicitudes pendientes de validación.
- Formularios de contacto.
- Posibles comprobantes o notificaciones futuras.

Se debe evaluar un proveedor de correo transaccional como:

- Brevo.
- SendGrid.
- Mailgun.
- Mailrelay.
- Otro SMTP definido por el proveedor técnico.

Punto importante: los VPS suelen tener el puerto 25 bloqueado, por lo que no se debe asumir que el servidor podrá enviar correos directamente.

## WhatsApp

WhatsApp debe manejarse inicialmente como botón de contacto. No se recomienda integrar automatización vía API de WhatsApp en esta fase porque:

- Puede generar costos por plantillas.
- Requiere configuración adicional.
- Puede complicar el alcance.
- La plataforma debe centralizar el proceso formal de solicitudes.

## Recomendación final actualizada

Para la primera versión se recomienda:

```txt
Next.js + Three.js + Supabase Self-Hosted + PostgreSQL + Vercel + VPS/DigitalOcean
```

En evaluación:

```txt
Proveedor SMTP / Brevo / SendGrid / Mailgun
```

Alternativas no prioritarias para esta fase:

```txt
NestJS + Better Auth
```
