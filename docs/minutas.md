# Minutas y Puntos Principales

## Reuniones documentadas

- [Reunión técnica sobre stack e infraestructura - 23 de junio de 2026](./minutas/reunion-tecnica-stack-2026-06-23.md)
- [Presentación de boceto y prototipo - 6 de julio de 2026](./minutas/presentacion-boceto-prototipo-2026-07-06.md)

## Resumen actualizado del proyecto

Durante las últimas reuniones se actualizaron puntos importantes del proyecto, tanto a nivel técnico como funcional.

## Puntos principales identificados

- La página actual necesita modernización visual y funcional.
- El museo requiere una plataforma más amigable, accesible, interactiva y administrable.
- Las solicitudes educativas se gestionan principalmente mediante canales manuales como WhatsApp, llamadas y Google Calendar.
- El museo necesita mantener validación humana en procesos de reservación debido a reglas operativas, descuentos, cupos y condiciones especiales.
- La plataforma debe facilitar la publicación de actividades, talleres, noticias y contenido institucional.
- El diseño debe reflejar mejor la experiencia educativa, cultural e interactiva del museo.
- La parte de Trampolín Inclusivo debe comunicarse como política de accesibilidad e inclusión.
- La gestión completa de eventos externos asociados a Casa Rodrigo de Bastidas queda fuera del alcance inicial.
- Casa Rodrigo de Bastidas debe mencionarse de forma contextual en la sección Conoce el museo.
- Las salas y actividades educativas deben tener páginas individuales con URL propia.

## Decisiones técnicas actualizadas

- Se recomienda usar Next.js en lugar de React puro para la web pública.
- Next.js permite mejor SEO, SSR/SSG, rutas dinámicas, Open Graph y URLs amigables.
- Se evaluará Supabase self-hosted como backend/BaaS principal.
- PostgreSQL se mantiene como base de datos recomendada.
- NestJS queda como alternativa futura si no se utiliza Supabase.
- Better Auth queda como alternativa futura si no se utiliza Supabase Auth.
- Vercel se contempla para despliegue frontend y previews.
- DigitalOcean/VPS se evaluará para alojar Supabase self-hosted.
- Three.js debe usarse de forma moderada y con lazy loading.
- Se debe evaluar un proveedor de correo transaccional para notificaciones y formularios.
- WhatsApp se manejará inicialmente como botón de contacto.

## Decisiones funcionales actualizadas

- Las salas no deben depender únicamente de pop-ups; deben tener landing individual.
- Los eventos o actividades educativas también deben tener landing individual.
- El backoffice debe permitir gestionar salas, actividades, contenido y solicitudes.
- Se debe generar slug único para salas y actividades.
- El calendario debe permitir visualizar actividades y eventos educativos.
- La sección de Casa Rodrigo de Bastidas no será un módulo completo, sino una referencia contextual o medio de contacto según validación.

## Acuerdos generales

- Priorizar la modernización de la página web institucional.
- Priorizar solicitudes educativas y actividades del museo.
- Incorporar un panel administrativo para gestión de solicitudes y contenido.
- Mantener WhatsApp como canal complementario.
- Evaluar técnicamente el stack antes de una implementación definitiva.
- Dividir el proyecto por entregables para controlar el alcance.

## Pendientes del equipo estudiantil

- Ajustar prototipo para incluir páginas individuales de salas.
- Ajustar prototipo para incluir páginas individuales de actividades/eventos.
- Actualizar la arquitectura de información.
- Investigar Supabase self-hosted en DigitalOcean.
- Documentar la infraestructura mínima requerida.
- Definir estrategia de correo transaccional.
- Actualizar documentación técnica y funcional.
- Diseñar estructura inicial de base de datos.

## Pendientes del museo / stakeholders

- Entrega de formularios actuales disponibles.
- Información de tarifas, horarios, descuentos y políticas.
- Material gráfico y audiovisual.
- Información detallada de salas.
- Contenido de actividades educativas.
- Validación del texto sobre Casa Rodrigo de Bastidas.
- Confirmación de medio de contacto para actividades/servicios especiales.
- Validación final del alcance.
- Confirmación de responsables administrativos.
- Revisión y firma de documentos académicos.
