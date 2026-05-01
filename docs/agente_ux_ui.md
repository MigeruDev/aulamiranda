# PROMPT MAESTRO — Agente UX/UI + Frontend para plataforma de preparación de Evaluación Docente Ecuador

## 0. Rol del agente

Actúa como **Lead Product Designer, UX Researcher y Frontend Architect** especializado en EdTech, evaluación educativa, conversión ética, accesibilidad y productos SaaS. Tu tarea es diseñar la experiencia completa de una plataforma web privada e independiente para que docentes de Ecuador se preparen para la **Evaluación de Desempeño Docente 2026**.

Entrega una propuesta accionable para landing, interfaz pública, app de usuario y panel administrativo, lista para pasar a desarrollo frontend.

---

## 1. Fuentes de verdad y reglas de validación

Usa como fuente prioritaria los materiales oficiales de INEVAL y los assets visuales entregados en este chat. El sitio oficial de INEVAL muestra la evaluación docente como tema actual, incluye el aviso “Infórmate solo por nuestros canales oficiales” y publica servicios oficiales como Simulador, Documentos Técnicos y Banco de Información; por tanto, el producto debe evitar cualquier confusión institucional y remitir siempre a canales oficiales cuando corresponda. ([Evaluación][1])

Usa el **Modelo de Evaluación Docente / Ser Maestro** como base histórica y conceptual: la evaluación se planteó como integral, dirigida a docentes del Magisterio Fiscal, con dimensiones relacionadas con saberes disciplinares, gestión del aprendizaje, liderazgo profesional y habilidades sociales/emocionales. ([Evaluación][2])

Usa la presentación oficial del Modelo de Evaluación Docente para entender la estructura conceptual anterior: cuatro dimensiones, ocho dominios y componentes; niveles de desempeño; instrumentos como cuestionario de autoevaluación, valoración de práctica de aula, cuestionario de contexto, prueba de base estructurada, rúbricas y cuestionarios de referencia. 

Usa el documento MED 2017 y su contenido técnico como marco de profundidad para explicar la naturaleza formativa, integral y funcional de la evaluación, especialmente la gestión del aprendizaje como ciclo de planificación, ejecución y evaluación. ([Evaluación][3]) ([calameo.com][4])

Usa la página oficial de **Factores asociados** para representar estos elementos como contexto que ayuda a interpretar resultados, no como una dimensión evaluativa principal. ([Evaluación][5])

Usa `evaluaciondocente.lat` únicamente como **benchmark de mercado**, no como fuente oficial. El benchmark ofrece simuladores por especialidad, tronco común, blog, plan premium, acceso total de pago único de USD 20, PDFs, justificaciones pedagógicas y disclaimer de no afiliación institucional. ([Evaluación Docente][6]) ([Evaluación Docente][7]) ([Evaluación Docente][8])

Cumple principios de privacidad y comercio electrónico en Ecuador: la Ley Orgánica de Protección de Datos Personales protege el acceso, decisión y protección de datos personales; la Ley de Comercio Electrónico regula contratación electrónica, prestación de servicios electrónicos y protección de usuarios. ([Gob Ecuador][9]) ([Gob Ecuador][10])

---

## 2. Contexto del producto

Diseña una plataforma web llamada provisionalmente **PrepDocente EC**.

Propósito: ayudar a docentes ecuatorianos a prepararse mediante guías, cursos, simuladores, reportes de práctica y rutas de estudio alineadas al modelo de Evaluación de Desempeño Docente.

La plataforma es **privada, independiente y no oficial**. No representa a INEVAL, Ministerio de Educación, entidades públicas ni gestiona inscripciones, convocatorias, trámites, certificados o resultados oficiales.

La experiencia debe comunicar rigor académico sin parecer una página gubernamental. Puede usar términos descriptivos como “Evaluación Docente Ecuador 2026” y “preparación para la evaluación docente de INEVAL”, pero no debe usar INEVAL como marca principal, logotipo, sello, iconografía institucional ni diseño confundible.

---

## 3. Modelo 2026 que debe estructurar la UI

Representa el modelo actual con esta taxonomía visible en la landing, dashboard y simuladores:

| Bloque      | Nombre UI                                              | Qué evalúa                                                                                                                          | Instrumento                    | Items / tiempo                                             | Modalidad        |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------- | ---------------- |
| Dimensión 1 | Conocimientos para la enseñanza efectiva               | Conocimientos pedagógicos y digitales generales + conocimientos disciplinares específicos                                           | Prueba de base estructurada    | 39 generales + 60 específicos = 99 ítems; 45 min + 120 min | Online           |
| Dimensión 2 | Competencias socioemocionales                          | Reconocimiento, comprensión, expresión y regulación emocional; relaciones interpersonales efectivas                                 | Cuestionario de autorreporte   | 120 ítems; 45 min                                          | Online           |
| Dimensión 3 | Habilidades y actitudes de responsabilidad profesional | Reflexión sistemática sobre la práctica profesional, desarrollo profesional y cumplimiento responsable de funciones institucionales | Cuestionario de autoevaluación | 70 ítems; 90 min                                           | Online           |
| Dimensión 4 | Habilidades de gestión del aprendizaje                 | Prácticas pedagógicas y estrategias de enseñanza-aprendizaje observadas en aula                                                     | Rúbrica de observación de aula | 32 indicadores; grabación de clase de hasta 45 min         | Entorno del aula |
| Contexto    | Factores asociados                                     | Información contextual para interpretar resultados de las cuatro dimensiones                                                        | Encuesta a docentes            | No tratar como prueba principal                            | Online           |

Incluye una vista de **correspondencia histórica** solo en página informativa o tooltip avanzado:

| Modelo histórico Ser Maestro       | Modelo UI 2026                               |
| ---------------------------------- | -------------------------------------------- |
| Saberes disciplinares              | D1: Conocimientos para la enseñanza efectiva |
| Gestión del aprendizaje            | D4: Habilidades de gestión del aprendizaje   |
| Liderazgo profesional              | D3: Responsabilidad profesional              |
| Habilidades sociales y emocionales | D2: Competencias socioemocionales            |

No clasifiques al usuario como “Excelente”, “Satisfactorio”, “Elemental” o “Insuficiente” salvo que exista un modelo psicométrico validado. Usa etiquetas de preparación no oficiales: “Necesita refuerzo”, “En progreso”, “Buen dominio”, “Listo para practicar en tiempo real”.

---

## 4. Especialidades y fases 2026 que debe reflejar la UI

Diseña filtros, cards y rutas de preparación para estas fases iniciales:

### Fase 1 — 8 especialidades — 57% de docentes

1. Estudios Sociales — 8.º a 10.º de EGB
2. Ciencias Naturales — 8.º a 10.º de EGB
3. Emprendimiento y Gestión — Bachillerato
4. Química — Bachillerato
5. Biología — Bachillerato
6. Educación para la Ciudadanía — Bachillerato
7. Filosofía / Pensamiento filosófico — Bachillerato
8. Educación General Básica — 2.º a 7.º de EGB

### Fase 2 — 6 especialidades — 31% de docentes

1. Matemática — 8.º de EGB a 3.º de Bachillerato
2. Física — Bachillerato
3. Historia — Bachillerato
4. Lengua y Literatura — 8.º de EGB a 3.º de Bachillerato
5. Educación Inicial
6. Educación Física — 2.º de EGB a Bachillerato

Total visible: **14 especialidades — 88% de docentes**.

La planificación M1–M6 debe mostrarse como cronograma editable desde CMS/admin porque puede cambiar:

* M1: Pilotaje Fase 1 — Dimensión 3
* M2: Factores asociados — Fase 1 definitivo
* M3: Todas las dimensiones — Fase 1 definitivo
* M4: Pilotaje afinamiento — Fase 2 Dimensión 1
* M5: Factores asociados — Fase 2 definitivo
* M6: Todas las dimensiones — Fase 2 definitivo

---

## 5. Principios de UX

Diseña para docentes adultos, con baja tolerancia a fricción, necesidad de claridad, ansiedad evaluativa y uso frecuente desde móvil.

Principios obligatorios:

1. **Claridad antes que espectacularidad.** El docente debe entender en menos de 10 segundos qué ofrece la plataforma, qué no ofrece y cómo empezar.
2. **Preparación por dimensiones.** La navegación principal debe mapearse al modelo de evaluación.
3. **Progreso visible.** Cada usuario debe ver avance, intentos, debilidades, recursos recomendados y próximas acciones.
4. **Ética comercial.** No uses falsas urgencias, contadores inventados, promesas de aprobación, “reactivos reales” ni “puntaje garantizado”.
5. **Separación institucional.** Mantén disclaimer persistente en footer, registro, checkout y páginas informativas.
6. **Mobile-first.** Muchos docentes usarán celular; todas las rutas críticas deben funcionar en 390px.
7. **Accesibilidad WCAG 2.2 AA.** Contraste suficiente, navegación por teclado, labels, tamaños legibles, foco visible.
8. **Bajo ancho de banda.** PDFs comprimidos, videos adaptativos, skeleton states, lazy loading y modo lectura.
9. **Confianza verificable.** Incluye enlaces a fuentes oficiales, fecha de última actualización y advertencia de verificar convocatorias en canales oficiales.
10. **Contenido original.** Toda pregunta, guía, video o simulador debe presentarse como recurso propio de preparación, no como material oficial filtrado.

---

## 6. Identidad visual

Crear una identidad independiente, confiable, educativa y ecuatoriana sin copiar marca INEVAL.

### Dirección visual

* Profesional, sobria, académica.
* Inspiración cromática permitida: azul profundo, amarillo educativo, blanco, gris claro y acento turquesa/verde para progreso.
* Evitar parecer portal gubernamental.
* No usar logos, escudos, sellos ni símbolos oficiales.
* Usar ilustraciones propias: docente, aula, progreso, checklist, simulación, rúbrica, video de clase.
* Evitar fotografías institucionales o personas reales de INEVAL.

### Tokens sugeridos

* `primary`: azul profundo `#172A6A`
* `primary-dark`: `#0D1745`
* `accent`: amarillo aprendizaje `#FFB81C`
* `success`: verde progreso `#16A34A`
* `info`: turquesa `#00A7B5`
* `warning`: ámbar `#F59E0B`
* `danger`: rojo suave `#DC2626`
* `background`: `#F7F8FC`
* `surface`: `#FFFFFF`
* `text-primary`: `#111827`
* `text-secondary`: `#4B5563`
* `border-soft`: `#E5E7EB`

### Tipografía

* Headings: Manrope, Sora o Poppins.
* Body/UI: Inter o Source Sans 3.
* Tamaño mínimo body: 16px.
* Evitar párrafos largos; usar bloques, cards y listas escaneables.

### Componentes base

* Navbar sticky con CTA.
* Hero con doble CTA.
* Cards de dimensión.
* Cards de especialidad.
* Timeline M1–M6.
* Pricing cards.
* Modales legales.
* Simulador interactivo.
* Reporte de resultados.
* Dashboard de progreso.
* Reproductor de video/curso.
* Biblioteca filtrable.
* Admin tables con bulk actions.
* Empty, loading, error, locked, pending-payment y success states.

---

## 7. Arquitectura de información

Diseña estas rutas mínimas.

### Público

* `/` — Landing principal
* `/evaluacion-docente-ecuador-2026` — Página informativa SEO
* `/modelo-de-evaluacion` — Dimensiones, instrumentos, tiempos, factores asociados
* `/especialidades` — Fase 1, Fase 2, filtros por nivel/especialidad
* `/simuladores` — Catálogo público de simuladores gratuitos y premium
* `/recursos` — Guías, PDFs, videos, artículos
* `/precios` — Planes y comparación
* `/faq` — Preguntas frecuentes
* `/disclaimer` — Descargo institucional
* `/terminos` — Términos y condiciones
* `/privacidad` — Política de privacidad
* `/login` — SSO Google/Facebook

### App docente

* `/app/onboarding`
* `/app/dashboard`
* `/app/ruta-de-estudio`
* `/app/dimensiones`
* `/app/dimensiones/[dimension]`
* `/app/especialidad`
* `/app/simuladores`
* `/app/simuladores/[id]`
* `/app/intentos/[id]/resultado`
* `/app/recursos`
* `/app/cursos`
* `/app/calendario`
* `/app/marcadores`
* `/app/notas`
* `/app/suscripcion`
* `/app/facturacion`
* `/app/perfil`

### Admin

* `/admin/dashboard`
* `/admin/contenidos`
* `/admin/recursos`
* `/admin/cursos`
* `/admin/banco-de-items`
* `/admin/simuladores`
* `/admin/especialidades`
* `/admin/dimensiones`
* `/admin/precios`
* `/admin/cupones`
* `/admin/usuarios`
* `/admin/suscripciones`
* `/admin/pagos`
* `/admin/reportes`
* `/admin/legal`
* `/admin/auditoria`

---

## 8. Landing principal

Diseña una landing de alta conversión con secciones en este orden:

### 8.1 Hero

Objetivo: explicar valor y convertir a diagnóstico gratuito.

Copy base:

* H1: “Prepárate con estructura para la Evaluación Docente Ecuador 2026”
* Subheadline: “Simuladores, guías y rutas de estudio organizadas por dimensiones, especialidades y tiempos de evaluación.”
* Disclaimer corto visible: “Plataforma privada e independiente. No somos INEVAL ni Mineduc. No gestionamos trámites oficiales.”
* CTA primario: “Hacer diagnóstico gratuito”
* CTA secundario: “Ver mi especialidad”
* Link terciario: “Consultar fuentes oficiales”

Visual: mockup del dashboard + cards de dimensiones.

### 8.2 Bloque de confianza

Mostrar 3 garantías éticas:

* Recursos originales de preparación.
* Alineación pedagógica por dimensiones.
* Sin promesas de aprobación ni uso de reactivos oficiales.

### 8.3 Qué es la evaluación docente

Explicar en lenguaje claro:

* Evaluación multidimensional y formativa.
* Competencias profesionales movilizadas dentro y fuera del aula.
* Enfoque por calidad, toma de decisiones, actividades y resolución de problemas.
* Link a página de modelo.

### 8.4 Modelo 2026

Card por dimensión:

* D1 Conocimientos para la enseñanza efectiva.
* D2 Competencias socioemocionales.
* D3 Responsabilidad profesional.
* D4 Gestión del aprendizaje.
* Factores asociados como contexto.

Cada card debe mostrar:

* Instrumento.
* Tiempo.
* Qué practicar en la plataforma.
* CTA “Prepararme en esta dimensión”.

### 8.5 Especialidades por fase

Tabs Fase 1 / Fase 2.
Cada especialidad como card con:

* Nombre.
* Nivel educativo.
* Estado: disponible / en preparación / próximamente.
* CTA: “Ver ruta de preparación”.

### 8.6 Simuladores

Mostrar:

* Diagnóstico gratuito.
* Simulador por dimensión.
* Simulador por especialidad.
* Simulador cronometrado.
* Revisión de fallos.
* Recomendaciones automáticas.

No usar copy “reactivos reales”. Usar “preguntas de práctica originales”.

### 8.7 Cómo funciona

Flow de 4 pasos:

1. Crea tu cuenta con Google o Facebook.
2. Selecciona fase, especialidad y dimensiones prioritarias.
3. Practica con simuladores y recursos guiados.
4. Revisa tu reporte y refuerza debilidades.

### 8.8 Pricing

Mostrar modelo comercial definido en la sección 12.

### 8.9 FAQ

Preguntas obligatorias:

* ¿Esta plataforma es oficial?
* ¿Garantiza aprobar la evaluación?
* ¿Usan preguntas reales de INEVAL?
* ¿Puedo prepararme gratis?
* ¿Qué pasa si cambia el cronograma?
* ¿Qué métodos de pago aceptan?
* ¿Cómo se protegen mis datos?
* ¿Puedo cancelar o pedir soporte?

### 8.10 Footer

Debe incluir:

* Disclaimer institucional.
* Links legales.
* Links a fuentes oficiales.
* Contacto.
* Fecha de última actualización de contenidos.
* “No afiliado a INEVAL ni Mineduc”.

---

## 9. Onboarding docente

Diseña onboarding posterior a SSO.

### Paso 0 — Disclaimer obligatorio antes de crear cuenta

Modal bloqueante antes del primer login/registro:

* Título: “Antes de continuar”
* Texto: “PrepDocente EC es una plataforma privada e independiente de preparación académica. No somos INEVAL, Ministerio de Educación ni entidad pública. No gestionamos inscripciones, convocatorias, resultados ni trámites oficiales. Los recursos son originales y no garantizan aprobación o resultados específicos.”
* Checkboxes:

  * “Entiendo que esta plataforma no es oficial.”
  * “Acepto términos, privacidad y tratamiento de datos.”
  * “Entiendo que debo verificar información oficial en canales de INEVAL/Mineduc.”
* Botones:

  * “Aceptar y continuar”
  * “Ver fuentes oficiales”
  * “Cancelar”

Persistir versión de disclaimer aceptada.

### Paso 1 — Perfil de preparación

Campos:

* Fase: 1 / 2 / no sé.
* Especialidad.
* Nivel educativo.
* Tiempo disponible por semana.
* Fecha tentativa de evaluación si la conoce.
* Prioridad: diagnóstico rápido / preparación completa / refuerzo por dimensión.
* Preferencia de estudio: simuladores / videos / PDFs / ruta mixta.

### Paso 2 — Diagnóstico inicial

Ofrecer simulador corto gratuito:

* 20–30 preguntas mixtas.
* Sin claims oficiales.
* Resultado por dimensiones.
* Recomendación de ruta.

### Paso 3 — Dashboard

Crear ruta personalizada:

* Dimensiones pendientes.
* Especialidad seleccionada.
* Recursos recomendados.
* CTA: “Empezar ruta de estudio”.

---

## 10. Dashboard docente

Diseña un dashboard con estos módulos:

1. **Resumen de preparación**

   * Score no oficial de práctica.
   * Progreso global.
   * Último intento.
   * Próxima actividad recomendada.

2. **Dimensiones**

   * Cards D1–D4.
   * Estado de práctica.
   * Tiempo recomendado.
   * Debilidades detectadas.

3. **Ruta de estudio**

   * Semana actual.
   * Actividades: leer guía, ver video, practicar, revisar fallos.
   * Marcar como completado.

4. **Simuladores recientes**

   * Intentos.
   * Puntaje de práctica.
   * Tiempo usado.
   * Ver reporte.

5. **Recursos guardados**

   * PDFs.
   * Videos.
   * Notas.
   * Marcadores.

6. **Upgrade contextual**

   * Mostrar solo si aporta valor.
   * Ejemplo: “Desbloquea revisión detallada de fallos y simuladores completos”.
   * No bloquear recursos gratuitos ya prometidos.

---

## 11. Simulador UX

Diseña el simulador como experiencia central.

### Antes de iniciar

* Nombre del simulador.
* Dimensión/especialidad.
* Número de preguntas.
* Tiempo estimado.
* Qué cubre.
* Qué no cubre.
* Botón “Iniciar”.
* Modo práctica / modo cronometrado.

### Durante el intento

* Timer visible, no invasivo.
* Pregunta una por pantalla en móvil.
* Navegación por mapa de preguntas en desktop.
* Marcar para revisar.
* Guardado automático.
* Indicador de avance.
* Accesibilidad para lectura prolongada.
* Confirmación antes de finalizar.

### Después del intento

Reporte:

* Resultado de práctica.
* Distribución por dimensión, tema, dificultad.
* Correctas / incorrectas / omitidas.
* Tiempo por pregunta.
* Fallos críticos.
* Explicación pedagógica.
* Recursos recomendados.
* CTA: “Reintentar fallos”, “Ver guía”, “Practicar tema débil”.

No presentar el resultado como nota oficial.

---

## 12. Modelo comercial y pricing UI

Usa un modelo **freemium + pago único por temporada 2026**, no suscripción recurrente como MVP. Justificación UX/comercial: la evaluación es estacional, el pago único reduce ansiedad por cobros recurrentes, es más compatible con transferencias locales y se alinea con el benchmark de mercado de acceso total a USD 20.

Diseña tres planes:

### Gratis — USD 0

Incluye:

* Cuenta SSO.
* Diagnóstico inicial limitado.
* Acceso a guías introductorias.
* Simuladores demo.
* Progreso básico.
* Links a fuentes oficiales.

CTA: “Empezar gratis”.

### Especialidad — USD 7.99 pago único

Incluye:

* Simuladores de una especialidad.
* D1 específica.
* Reporte de fallos.
* PDFs de apoyo de esa especialidad.
* Acceso durante temporada 2026.

CTA: “Preparar mi especialidad”.

### Pro 2026 — USD 19.99 pago único — Recomendado

Incluye:

* Todas las dimensiones.
* Todas las especialidades disponibles.
* Simuladores cronometrados.
* Revisión de fallos críticos.
* PDFs descargables.
* Videos/cursos.
* Ruta personalizada.
* Reportes avanzados.
* Acceso durante temporada 2026.

CTA: “Desbloquear Pro 2026”.

### Diseño psicológico

* Usar Pro como plan recomendado.
* Mostrar “pago único, sin renovación automática”.
* Mostrar comparación transparente.
* No usar urgencia falsa.
* No usar testimonios no verificables.
* Mostrar métodos de pago locales: tarjeta, transferencia, Payphone/DeUna si se implementan.
* Mostrar estado de activación: inmediato / pendiente de verificación / rechazado.
* Incluir factura si aplica.
* Indicar que impuestos y política de reembolso requieren validación legal/tributaria.

---

## 13. Panel administrativo

Diseña admin con UX operacional eficiente.

### Dashboard admin

KPIs:

* Usuarios registrados.
* Usuarios activos.
* Conversión free → pago.
* Simuladores completados.
* Preguntas con mayor error.
* Recursos más vistos.
* Pagos pendientes.
* Contenido desactualizado.
* Tickets/soporte.

### Gestión de contenidos

CRUD para:

* PDFs.
* Videos.
* Guías.
* Cursos.
* Artículos.
* Recursos gratuitos/premium.
* Versionado.
* Estado: borrador / revisión / publicado / archivado.
* Tags: dimensión, especialidad, fase, nivel, tema, fuente, autor, fecha de revisión.

### Banco de ítems

CRUD para preguntas:

* Enunciado.
* Opciones.
* Respuesta correcta.
* Explicación pedagógica.
* Dimensión.
* Especialidad.
* Tema.
* Dificultad.
* Tiempo estimado.
* Fuente conceptual.
* Estado de revisión.
* Autor/revisor.
* Historial de cambios.
* Reportes de usuarios.

### Simuladores

Constructor:

* Seleccionar preguntas por filtros.
* Configurar tiempo.
* Configurar intentos.
* Gratis/premium.
* Modo práctica/cronometrado.
* Por dimensión/especialidad.
* Publicar/archivar.

### Precios

* Planes.
* Recursos individuales.
* Cupones.
* Fechas de vigencia.
* Activar/desactivar plan.
* Cambiar copy comercial.
* Vista previa pública.

### Usuarios y pagos

* Usuarios.
* Estado de cuenta.
* Plan activo.
* Historial de intentos.
* Pagos.
* Comprobantes.
* Aprobación manual.
* Rechazo con motivo.
* Reenvío de acceso.

### Legal

* Versiones de disclaimer.
* Términos.
* Privacidad.
* Registro de aceptación por usuario.
* Fecha de publicación.
* Auditoría.

---

## 14. Páginas legales y compliance UX

Diseña legal como parte visible de confianza, no como texto escondido.

### Disclaimer corto global

Usar en footer, registro, checkout y página de simuladores:

“PrepDocente EC es una plataforma privada e independiente de preparación académica. No somos INEVAL, Ministerio de Educación ni entidad pública. No gestionamos convocatorias, inscripciones, resultados, certificados ni trámites oficiales. Los recursos son originales y no garantizan aprobación o resultados específicos. Verifica siempre la información oficial en canales institucionales.”

### Prohibiciones de copy

No usar:

* “Entrenamiento oficial”
* “Reactivos reales”
* “Preguntas filtradas”
* “Garantiza tu aprobación”
* “Asegura tu puntaje”
* “Somos aliados de INEVAL”
* “Inscríbete a la evaluación aquí”

Usar:

* “Recursos originales de preparación”
* “Alineado al modelo de evaluación”
* “Simuladores de práctica”
* “Reporte no oficial de preparación”
* “Verifica la convocatoria en canales oficiales”

### Privacidad

Incluir:

* Datos recolectados vía Google/Facebook SSO.
* Datos de perfil docente.
* Historial de intentos.
* Datos de pago.
* Finalidades.
* Derechos del titular.
* Contacto.
* Eliminación de cuenta.
* Retención de datos.
* Encargados/proveedores.

---

## 15. Recursos y cursos

Diseña biblioteca con filtros:

* Dimensión.
* Especialidad.
* Fase.
* Formato: PDF, video, artículo, simulador.
* Gratis/premium.
* Tiempo estimado.
* Nivel: básico, intermedio, avanzado.
* Última actualización.

Cards de recurso:

* Título.
* Resumen.
* Tags.
* Tiempo.
* Estado premium.
* CTA.
* Fecha de revisión.
* Fuente conceptual si aplica.

Curso:

* Módulos.
* Lecciones.
* Progreso.
* Material descargable.
* Quiz asociado.
* Certificado interno opcional, con disclaimer “certificado privado de participación, no oficial”.

---

## 16. Página de modelo de evaluación

Diseña una página educativa con:

1. Definición clara de evaluación docente.
2. Enfoque formativo y basado en competencias.
3. Dimensiones actuales.
4. Qué evalúa cada dimensión.
5. Cómo se evalúa cada dimensión.
6. Items, tiempos y modalidad.
7. Factores asociados.
8. Cronograma M1–M6 editable.
9. Especialidades por fase.
10. Bloque “Lo que esta plataforma sí hace / no hace”.

### Sí hace

* Organiza recursos.
* Permite practicar.
* Recomienda rutas.
* Mide progreso de práctica.
* Ayuda a identificar debilidades.

### No hace

* No reemplaza a INEVAL.
* No inscribe a evaluaciones.
* No emite resultados oficiales.
* No usa reactivos oficiales.
* No garantiza aprobación.

---

## 17. Estados de interfaz

Diseña todos los estados:

* Usuario invitado.
* Usuario registrado sin onboarding.
* Usuario con onboarding incompleto.
* Usuario free.
* Usuario premium activo.
* Usuario con pago pendiente.
* Usuario con pago rechazado.
* Usuario premium vencido.
* Recurso bloqueado.
* Simulador sin preguntas disponibles.
* Error de red.
* Sesión expirada.
* Mantenimiento.
* Contenido archivado.
* Cronograma en actualización.

---

## 18. SSO y autenticación

La plataforma solo permite:

* Google SSO.
* Facebook SSO.

No diseñar registro con contraseña local.

Flujo:

1. Usuario intenta entrar.
2. Modal disclaimer.
3. Acepta términos/disclaimer.
4. Selecciona Google o Facebook.
5. Retorna a onboarding.
6. Completa perfil.
7. Accede a dashboard.

Diseña también:

* Error de SSO.
* Cuenta existente vinculada.
* Solicitud de eliminación de cuenta.
* Cierre de sesión.
* Reautenticación para pagos o cambios sensibles.

---

## 19. Accesibilidad y contenido inclusivo

Requisitos:

* WCAG 2.2 AA.
* Contraste AA en todos los textos.
* No depender solo del color para progreso.
* Navegación completa por teclado.
* Labels visibles.
* Mensajes de error claros.
* Texto alternativo en imágenes.
* Tamaño táctil mínimo 44px.
* Lenguaje claro, ecuatoriano, profesional.
* Evitar culpabilizar al docente por bajo desempeño.
* Usar tono de acompañamiento: “reforzar”, “practicar”, “mejorar”, “siguiente paso”.

---

## 20. SEO y contenido público

Diseña estructura SEO sin claims engañosos.

Keywords permitidas:

* evaluación docente Ecuador 2026
* preparación evaluación docente
* simulador evaluación docente Ecuador
* dimensiones evaluación docente
* INEVAL evaluación docente
* docentes Ecuador
* conocimientos para la enseñanza efectiva
* competencias socioemocionales docentes
* responsabilidad profesional docente
* gestión del aprendizaje

Meta title ejemplo:
“Preparación Evaluación Docente Ecuador 2026 | Simuladores y Guías”

Meta description ejemplo:
“Plataforma privada de preparación para docentes de Ecuador: simuladores de práctica, guías, cursos y rutas por dimensiones. No oficial ni afiliada a INEVAL.”

---

## 21. Entregables obligatorios del agente

Entrega:

1. **Mapa del sitio** con rutas públicas, app docente y admin.
2. **User journeys** para:

   * invitado → diagnóstico gratuito;
   * invitado → compra Pro;
   * usuario free → premium;
   * usuario premium → simulador → reporte;
   * admin → crear recurso;
   * admin → crear simulador;
   * admin → aprobar pago por transferencia.
3. **Wireframes textuales o Figma-ready** para desktop 1440px y mobile 390px.
4. **Diseño visual de alto nivel** con tokens, tipografía, colores, espaciado y componentes.
5. **Copy completo** para landing, pricing, disclaimer, onboarding, dashboard y checkout.
6. **Component inventory** con estados.
7. **Responsive rules** por breakpoint.
8. **Accesibilidad checklist**.
9. **Frontend handoff**:

   * estructura de componentes;
   * props esperadas;
   * estados;
   * eventos analytics;
   * validaciones UI.
10. **Lista de riesgos UX/legal** con mitigación.

---

## 22. Estructura de componentes sugerida

Usa arquitectura de componentes tipo Atomic Design:

### Atoms

* Button
* Input
* Select
* Checkbox
* Badge
* Tooltip
* ProgressBar
* Timer
* Icon
* Link
* Spinner

### Molecules

* DimensionCard
* SpecialtyCard
* ResourceCard
* PricingCard
* QuestionOption
* LegalNotice
* StatCard
* FilterBar
* TimelineStep
* AttemptSummary

### Organisms

* LandingHero
* DimensionGrid
* SpecialtyTabs
* PricingSection
* FAQAccordion
* AuthDisclaimerModal
* OnboardingWizard
* UserDashboard
* SimulatorRunner
* AttemptReport
* ResourceLibrary
* AdminDataTable
* AdminItemEditor
* PaymentReviewPanel

### Templates

* PublicLayout
* AppLayout
* AdminLayout
* AuthLayout
* LegalLayout
* SimulatorLayout

---

## 23. Eventos analytics a considerar en diseño

Diseña puntos de instrumentación:

* `landing_cta_clicked`
* `official_sources_clicked`
* `disclaimer_viewed`
* `disclaimer_accepted`
* `sso_started`
* `onboarding_completed`
* `diagnostic_started`
* `diagnostic_completed`
* `simulator_started`
* `simulator_completed`
* `report_viewed`
* `resource_opened`
* `pricing_viewed`
* `checkout_started`
* `payment_submitted`
* `upgrade_clicked`
* `admin_content_created`
* `admin_simulator_published`

---

## 24. Criterios de aceptación

El diseño se considera correcto si:

* El usuario entiende que la plataforma es privada y no oficial antes de registrarse.
* La landing comunica valor, modelo 2026, dimensiones, especialidades, pricing y disclaimer sin saturación.
* Las dimensiones D1–D4 y factores asociados están correctamente representados.
* Las fases y especialidades 2026 están visibles y filtrables.
* El simulador es usable en móvil.
* El reporte no se confunde con resultado oficial.
* El pricing es claro, accesible y sin renovación automática oculta.
* El admin permite gestionar contenidos, simuladores, precios, usuarios, pagos y legales.
* La UI evita claims prohibidos.
* Hay trazabilidad de fuentes, fecha de actualización y enlaces oficiales.
* La propuesta puede pasar directamente a implementación frontend.

[1]: https://www.evaluacion.gob.ec/ "Instituto Nacional de Evaluación Educativa | Página oficial del Instituto Nacional de Evaluación Educativa"
[2]: https://www.evaluacion.gob.ec/inicia-primera-evaluacion-docente-censal-del-ecuador/ "Inicia Primera Evaluación Docente censal del Ecuador | Instituto Nacional de Evaluación Educativa"
[3]: https://www.evaluacion.gob.ec/wp-content/uploads/downloads/2017/08/MED_librodigital_20170814.pdf?utm_source=chatgpt.com "Modelo de Evaluación Docente - Gob"
[4]: https://www.calameo.com/books/003978406bcf6dd86afb9 "Calaméo - Med Librodigital 20170814"
[5]: https://www.evaluacion.gob.ec/factores-asociados/ "Factores asociados | Instituto Nacional de Evaluación Educativa"
[6]: https://evaluaciondocente.lat/ec/ "Simulador INEVAL Ecuador 2026 - Evaluación de Desempeño Docente | Entrenamiento Oficial"
[7]: https://evaluaciondocente.lat/ec/premium/ "Acceso Premium Total para Simuladores Docentes | INEVAL"
[8]: https://evaluaciondocente.lat/pagina/terminos-y-condiciones/ "Simuladores Examen Docente 2026: USICAMM, QSM y Carrera Docente | EvaluacionDocente.latTerminos y Condiciones"
[9]: https://www.gob.ec/regulaciones/ley-organica-proteccion-datos-personales?utm_source=chatgpt.com "LEY ORGÁNICA DE PROTECCIÓN DE DATOS PERSONALES - Guía Oficial de ..."
[10]: https://www.gob.ec/sites/default/files/regulations/2018-10/LEY%20DE%20COMERCIO%20ELECTRONICO%2C%20FIRMAS%20Y%20MENSAJES%20DE%20DATOS.pdf?utm_source=chatgpt.com "LEY DE COMERCIO ELECTRONICO, FIRMAS Y MENSAJES DE DATOS - Ecuador"
