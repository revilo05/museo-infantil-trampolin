# Minuta - Presentación de boceto y prototipo

**Fecha:** 6 de julio de 2026  
**Proyecto:** Modernización de la Página Web y Plataforma Digital del Museo Infantil Trampolín  
**Tipo de reunión:** Presentación de boceto y prototipo  
**Participantes:** Oliver Abreu Mateo, Laura Grullón, Francisco Sánchez, Soledad Terc y equipo del proyecto.

## Objetivo de la reunión

Presentar los bocetos y prototipo inicial de experiencia de usuario de la plataforma web del Museo Infantil Trampolín, con el fin de recibir observaciones, validación y recomendaciones de mejora.

## Temas presentados

### 1. Boceto general de la web

Se presentó una propuesta visual de la página inicial con secciones orientadas a:

- Salas destacadas.
- Próximas actividades.
- Mapa de ubicación.
- Acceso a información del museo.
- Botones de acción para visitas y actividades.

Laura indicó que el diseño general le agradaba, pero observó que en la navegación inicial faltaban elementos como calendario, visitas y referencia contextual de Casa Rodrigo de Bastidas.

### 2. Sección de salas y experiencias

Se presentó un catálogo de salas del museo con tarjetas visuales. Francisco observó que mostrar el detalle únicamente mediante pop-ups o modales podría ser limitado desde el punto de vista técnico, SEO, métricas y marketing.

Se recomendó que cada sala tenga una página de detalle con URL propia.

Ruta sugerida:

```txt
/salas/[slug]
```

Beneficios identificados:

- Mejor posicionamiento SEO.
- Métricas por sala.
- Mayor espacio para información, galerías y datos complementarios.
- Posibilidad de compartir una sala específica.
- Base para futuros recursos interactivos por sala.

### 3. Actividades y calendario

Se presentó una vista de calendario con eventos y actividades. Francisco indicó que los eventos también deben tener una página de detalle propia, no solo mostrarse como información dentro de una tarjeta.

Ruta sugerida:

```txt
/actividades/[slug]
```

Beneficios identificados:

- URL individual para compartir en redes sociales.
- Mejor seguimiento de campañas.
- Posibilidad de registrar participantes desde una página específica.
- Mejor organización de información.

Se tomó como referencia conceptual el portal de Museos RD para la estructura de detalle de museos/eventos.

### 4. Casa Rodrigo de Bastidas

Se discutió cómo debe aparecer Casa Rodrigo de Bastidas dentro de la web.

Acuerdo:

- No se desarrollará una página o módulo completo de Casa Rodrigo de Bastidas en esta fase.
- Sí se incluirá una referencia contextual indicando que el Museo Infantil Trampolín opera dentro de Casa Rodrigo de Bastidas.
- Esta referencia debe aparecer en la sección Conoce el museo.
- Los servicios externos, bodas, eventos corporativos o alquileres no forman parte del módulo principal de reservas educativas.
- Se puede contemplar un medio de contacto o enlace a correo para consultas de actividades/servicios especiales.

### 5. Trampolín Inclusivo

Se mostró una sección informativa sobre Trampolín Inclusivo, enfocada en comunicar las facilidades del museo para visitantes con necesidades especiales.

Se mantiene como sección pública de carácter informativo, accesible y humano.

### 6. Formulario de solicitud de visita

Se presentó el flujo de solicitud de reservación educativa para colegios, instituciones y grupos.

El formulario contempla datos como:

- Información de la institución.
- Fecha y horario deseado.
- Cantidad de visitantes.
- Necesidades especiales.
- Observaciones.

### 7. Dashboard administrativo

Se presentó una vista interna para el personal del museo que incluye:

- Solicitudes recibidas.
- Próximas solicitudes.
- Cantidad de niños por visita.
- Estados de solicitudes.
- Solicitudes rechazadas, validadas o pendientes.
- Gestión de eventos, salas y reservaciones.

Francisco validó que como prototipo está bien planteado, pero recomendó que la información de salas y eventos se maneje desde base de datos con plantillas reutilizables y slugs únicos.

### 8. Gestión de actividades especiales

Soledad aclaró que algunas actividades corporativas o servicios especiales se gestionan por canales propios y no necesariamente por el módulo educativo. Se discutió la posibilidad de incluir fotos o referencias a actividades realizadas y un enlace de contacto hacia el correo correspondiente.

## Acuerdos

- Mantener el enfoque principal en la web institucional, salas, actividades educativas y solicitudes de visitas.
- Agregar referencia contextual a Casa Rodrigo de Bastidas en Conoce el museo.
- No desarrollar un módulo completo de Casa Rodrigo de Bastidas en esta fase.
- Crear páginas de detalle independientes para cada sala.
- Crear páginas de detalle independientes para cada evento o actividad educativa.
- Evitar depender únicamente de pop-ups para contenido importante.
- Usar slugs únicos para salas y eventos.
- Mantener un backoffice para gestionar salas, eventos, solicitudes y contenido.
- Contemplar un medio de contacto para actividades/servicios especiales sin asumir un módulo completo.

## Pendientes

### Equipo estudiantil

- Ajustar prototipo para incluir páginas individuales de salas.
- Ajustar prototipo para incluir páginas individuales de actividades/eventos.
- Agregar referencia correcta a Casa Rodrigo de Bastidas en Conoce el museo.
- Revisar estructura de navegación y menú principal.
- Agregar o ajustar elementos faltantes del menú: calendario, visitas, contacto y galerías.
- Actualizar documentación técnica y funcional.

### Museo / stakeholders

- Validar qué información exacta debe mostrarse sobre Casa Rodrigo de Bastidas.
- Confirmar medio de contacto para actividades/servicios especiales.
- Proveer imágenes, galerías y contenido de salas.
- Validar el contenido del calendario y actividades educativas.

## Conclusión

La reunión permitió validar la dirección visual inicial del prototipo y definir ajustes importantes de arquitectura de información. Las principales mejoras identificadas fueron sustituir los detalles en pop-up por páginas individuales con URL propia para salas y actividades, incorporar una referencia contextual a Casa Rodrigo de Bastidas y mantener el alcance del proyecto centrado en la plataforma institucional del Museo Infantil Trampolín y sus procesos educativos.
