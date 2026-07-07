# Requerimientos del Proyecto

## Proyecto

**Modernización de la Página Web y Plataforma Digital del Museo Infantil Trampolín**

## Objetivo general

Modernizar la presencia digital del Museo Infantil Trampolín mediante una plataforma web moderna, accesible, interactiva y administrable, que facilite la consulta de información, la gestión de solicitudes educativas y la publicación de actividades.

## Problema identificado

La página web actual no refleja completamente el valor educativo, cultural e interactivo del museo. Además, varios procesos operativos se gestionan de forma manual mediante llamadas, WhatsApp, correos y Google Calendar.

## Requerimientos funcionales principales

### Web pública

- Página de inicio moderna e interactiva.
- Sección Conoce el museo.
- Referencia contextual a Casa Rodrigo de Bastidas dentro de la sección Conoce el museo.
- Sección de salas y experiencias.
- Página de detalle por cada sala con URL única.
- Página de actividades y calendario.
- Página de detalle por cada actividad/evento educativo con URL única.
- Sección Trampolín Inclusivo.
- Preguntas frecuentes.
- Página de contacto.
- Integración visual con Instagram.
- Botón de contacto vía WhatsApp.
- Medio de contacto para consultas de actividades/servicios especiales que no formen parte del módulo educativo principal.

### Salas y experiencias

Cada sala debe contar con una página propia y no depender únicamente de un modal o pop-up.

La página de detalle de una sala debe permitir:

- Mostrar información ampliada.
- Incluir galería de imágenes.
- Mostrar datos como duración aproximada, edad recomendada o dato curioso.
- Mejorar SEO mediante URL única.
- Medir visitas e interés por sala.
- Agregar recursos interactivos o juegos asociados en fases futuras.

Ruta sugerida:

```txt
/salas/[slug]
```

### Actividades y calendario

Cada actividad o evento educativo debe contar con una página propia y URL única.

La página de detalle de actividad debe permitir:

- Compartir el enlace directamente en redes sociales.
- Mostrar fecha, horario, cupo, descripción y condiciones.
- Permitir registro o consulta.
- Mejorar SEO y campañas.
- Medir interés por actividad.

Ruta sugerida:

```txt
/actividades/[slug]
```

### Solicitudes educativas

- Formulario digital para visitas educativas.
- Registro de datos de institución.
- Registro de persona de contacto.
- Cantidad de estudiantes y adultos.
- Tipo de institución.
- Fecha deseada.
- Observaciones.
- Necesidades de accesibilidad.
- Manejo de estados de solicitud.

Estados sugeridos:

- Enviada.
- En revisión.
- Pendiente de información.
- Validada.
- Confirmada.
- Rechazada.

### Panel administrativo

- Dashboard principal.
- Listado de solicitudes.
- Filtros por estado.
- Vista de detalle de solicitudes.
- Acciones de revisión, validación, confirmación y rechazo.
- Gestión de actividades educativas.
- Gestión de contenido informativo.
- Gestión de preguntas frecuentes.
- Publicación de noticias o novedades.
- Gestión de salas y contenido asociado.
- Creación de slugs para salas y actividades.

## Requerimientos no funcionales

- Diseño responsive.
- Accesibilidad visual y de navegación.
- Buen rendimiento en móviles.
- SEO para contenido público.
- URLs amigables.
- Open Graph para compartir contenido.
- Seguridad en acceso administrativo.
- Arquitectura escalable.
- Interfaz simple para usuarios no técnicos.
- Optimización de carga mediante lazy loading.
- Política de caché para reducir consultas innecesarias.

## Requerimientos técnicos derivados

- Usar Next.js para la web pública y backoffice.
- Evaluar Supabase self-hosted para autenticación, base de datos y APIs.
- Usar PostgreSQL como base de datos.
- Evaluar DigitalOcean/VPS para la infraestructura backend.
- Usar Vercel como alternativa de despliegue del frontend o pruebas.
- Evaluar proveedor de correo transaccional para formularios y notificaciones.
- Mantener WhatsApp como canal complementario mediante botón de contacto.

## Alcance inicial

El alcance inicial se centra en la modernización web institucional, solicitudes educativas, actividades educativas, contenido y administración básica.

## Fuera del alcance inicial

La gestión completa de eventos externos asociados a Casa Rodrigo de Bastidas queda fuera del alcance inicial. Puede considerarse en futuras fases o integraciones. Para esta etapa solo se contempla una referencia contextual y un medio de contacto si el museo lo requiere.

## Futuras integraciones

- Chatbot o asistente virtual.
- Pagos en línea.
- Integración avanzada con inteligencia artificial.
- Recorridos interactivos.
- Integración completa con calendarios externos.
- Módulo avanzado de eventos externos.
- Automatización avanzada por WhatsApp API.
