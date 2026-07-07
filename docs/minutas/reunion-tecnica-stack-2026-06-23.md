# Minuta - Reunión técnica sobre stack e infraestructura

**Fecha:** 23 de junio de 2026  
**Proyecto:** Modernización de la Página Web y Plataforma Digital del Museo Infantil Trampolín  
**Tipo de reunión:** Técnica  
**Participantes:** Oliver Abreu Mateo, Randolph Raymond Carmona Tejeda, Algenis De Los Santos López y Francisco Sánchez.

## Objetivo de la reunión

Aclarar dudas técnicas relacionadas con el stack tecnológico, infraestructura, despliegue, backend, base de datos, autenticación, formularios y servicios de notificación del proyecto.

## Temas tratados

### 1. Revisión del stack propuesto inicialmente

El equipo había planteado inicialmente:

- React para frontend.
- Three.js para interacciones visuales.
- NestJS como posible backend.
- Supabase como alternativa para base de datos, autenticación y servicios backend.

Durante la reunión se aclaró que NestJS y Supabase no necesariamente deben utilizarse juntos, ya que Supabase podría cubrir gran parte de las necesidades de backend, autenticación, API y base de datos.

### 2. Cambio de React a Next.js

Francisco recomendó utilizar Next.js en lugar de React puro para la web pública, debido a que el sitio no será solamente una aplicación SPA, sino una web institucional multipágina con necesidad de SEO, URLs dinámicas, Open Graph, rutas amigables y páginas compartibles.

Se acordó que Next.js es más adecuado porque:

- Está basado en React.
- Permite SSR y SSG.
- Facilita SEO.
- Permite rutas dinámicas.
- Facilita compartir URLs de eventos y contenido.
- Permite una mejor estructura para una web pública.

### 3. Supabase como backend/BaaS

Se discutió el uso de Supabase. Francisco indicó que Supabase reduce mucho trabajo en autenticación, APIs, base de datos y seguridad. Sin embargo, se identificó como riesgo depender de la capa gratuita de Supabase Cloud, ya que los proyectos gratuitos pueden pausarse por inactividad.

Randolph propuso evaluar Supabase self-hosted para evitar dependencia directa del servicio en la nube de Supabase.

Se acordó evaluar Supabase self-hosted como alternativa principal para:

- Autenticación.
- Base de datos PostgreSQL.
- APIs.
- Storage.
- Gestión de usuarios.

### 4. PostgreSQL

Se confirmó que PostgreSQL es una base de datos adecuada para el proyecto. Si se utiliza Supabase, PostgreSQL formaría parte de la solución.

### 5. NestJS y Better Auth

Se concluyó que si se adopta Supabase como backend principal, NestJS no sería necesario en esta primera fase. NestJS queda como alternativa si se decide construir un backend propio.

Better Auth queda como alternativa únicamente si se decide no utilizar Supabase Auth.

### 6. Infraestructura y despliegue

Se conversó sobre el uso de Vercel para desplegar el frontend en etapa de pruebas y presentación de avances.

También se acordó investigar DigitalOcean como posible VPS para alojar Supabase self-hosted usando Docker.

Pendientes técnicos:

- Evaluar Supabase self-hosted sobre DigitalOcean.
- Definir requisitos mínimos del VPS.
- Validar costos.
- Confirmar estrategia de backups.
- Confirmar manejo de actualizaciones.

### 7. Three.js y rendimiento

Francisco recomendó utilizar Three.js con moderación. Se sugirió usar lazy loading para evitar cargar todos los recursos inicialmente.

Recomendaciones:

- Cargar primero logo e imagen principal.
- Usar lazy loading para recursos adicionales.
- Cargar elementos según el viewport.
- Usar CSS animations y SVG cuando sea suficiente.
- Evitar consumo innecesario de GPU.

### 8. Formularios y correos transaccionales

Se identificó que el proyecto requerirá servicios de correo para formularios y notificaciones.

Casos posibles:

- Confirmación de solicitudes.
- Cambios de estado.
- Recordatorios.
- Solicitudes pendientes.
- Formularios de contacto.

Francisco indicó que los VPS suelen tener el puerto 25 bloqueado, por lo que se debe evaluar un proveedor externo de correo transaccional como Brevo, SendGrid, Mailgun o Mailrelay.

### 9. WhatsApp

Se aclaró que WhatsApp debe mantenerse como canal complementario. El uso inicial sería mediante un botón que abra la conversación. No se recomienda en esta fase automatizar notificaciones vía API de WhatsApp debido a costos y complejidad.

## Acuerdos

- Sustituir React puro por Next.js para la web pública.
- Mantener Three.js solo como apoyo visual e interactivo moderado.
- Evaluar Supabase self-hosted como backend principal.
- Mantener PostgreSQL como base de datos.
- Descartar NestJS como backend principal si Supabase cubre las necesidades.
- Dejar Better Auth solo como alternativa si no se utiliza Supabase Auth.
- Evaluar DigitalOcean como VPS para Supabase self-hosted.
- Usar Vercel para pruebas o despliegues del frontend.
- Evaluar un proveedor externo para correos transaccionales.

## Pendientes

### Equipo estudiantil

- Investigar Supabase self-hosted en DigitalOcean.
- Documentar la infraestructura mínima requerida.
- Actualizar el documento técnico del stack.
- Revisar la estrategia de lazy loading para Three.js.
- Considerar la integración de servicio de correo transaccional.

### Francisco Sánchez

- Conversar con el proveedor técnico sobre infraestructura, servidor, correo transaccional y ciberseguridad.
- Confirmar recomendaciones técnicas para el entorno final.

## Conclusión

La reunión permitió ajustar la propuesta tecnológica del proyecto hacia una arquitectura más adecuada para una web institucional escalable. El stack actualizado se orienta a Next.js para frontend, Supabase self-hosted con PostgreSQL para backend y datos, Vercel para despliegue de frontend y DigitalOcean/VPS como infraestructura candidata para servicios backend.
