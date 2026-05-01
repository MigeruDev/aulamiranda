# Documento de Especificación de Requisitos Funcionales

## Plataforma web de preparación para la Evaluación de Desempeño Docente Ecuador 2026

**Nombre provisional:** PrepDocente EC
**Versión:** 0.1
**Tipo:** SRS / Functional Requirements Specification
**Alcance:** Landing pública, aplicación docente, simuladores, biblioteca de recursos, cursos, pagos, panel administrativo, reportes de práctica, gestión legal y analítica operativa.

---

## 1. Marco de referencia y restricciones de dominio

PrepDocente EC será una plataforma privada de preparación académica para docentes de Ecuador. El sistema no debe presentarse como canal oficial, aliado, representante ni intermediario de INEVAL, Ministerio de Educación u otra entidad pública. Esta restricción es crítica porque el sitio oficial de INEVAL promueve explícitamente la consulta por canales oficiales y lista sus propios servicios institucionales como Banco de Información, Simulador, Documentos Técnicos y Descarga de Certificados. ([Evaluación][1])

La definición funcional del producto se alinea con el enfoque de evaluación docente como evaluación multidimensional y formativa, visible en el material actual de INEVAL sobre evaluación del desempeño docente.  El piloto de evaluación de desempeño docente aplicado por INEVAL en octubre de 2024 tuvo como objetivo validar características de instrumentos y tiempos; incluyó conocimientos generales y específicos mediante prueba de base estructurada. ([Evaluación][2])

El sistema debe tratar “Factores asociados” como información contextual para interpretar condiciones del proceso educativo, no como prueba principal ni como predictor oficial de resultados. INEVAL define estos factores como elementos que permiten conocer la estructura del sistema educativo y componentes cualitativos del contexto. ([Evaluación][3])

Como referencia histórica, la evaluación Ser Maestro se comunicó como un proceso para conocer el desempeño docente y mejorar destrezas profesionales; sus dimensiones históricas incluyeron saberes disciplinares, gestión del aprendizaje, liderazgo profesional y habilidades socioemocionales/ciudadanas. ([Evaluación][4])

La plataforma manejará datos personales, perfiles docentes, historial de intentos, pagos y consentimientos. Debe implementar consentimiento informado, trazabilidad y mecanismos de ejercicio de derechos porque la Ley Orgánica de Protección de Datos Personales garantiza el acceso, decisión y protección sobre datos personales. ([Gobierno del Ecuador][5]) El Reglamento exige informar previamente tipos de tratamiento, finalidades, tiempo de conservación, medidas de protección y consecuencias de la entrega de datos; además, el silencio o inacción no presume consentimiento. 

Para pagos digitales, checkout y activaciones, el sistema debe informar claramente derechos y obligaciones del consumidor en la prestación de servicios electrónicos. 

Como benchmark comercial, existe una oferta privada en Ecuador con simuladores, tronco común, especialidades, clase demostrativa, plan premium, pago único de USD 20 y métodos como transferencia, tarjeta, PayPal, Payphone y DeUna. Ese benchmark también usa claims que deben evitarse en PrepDocente EC, como “entrenamiento oficial”, “reactivos reales” o “asegura tu puntaje”. ([Evaluación Docente][6])

---

## 2. Objetivos del sistema

### OBJ-001 — Preparación estructurada por dimensiones

Permitir que los docentes preparen la evaluación con rutas, recursos y simuladores organizados por las dimensiones del modelo EVDO 2026: conocimientos para la enseñanza efectiva, competencias socioemocionales, responsabilidad profesional y gestión del aprendizaje.

### OBJ-002 — Diagnóstico de preparación no oficial

Permitir que el docente identifique fortalezas, debilidades, temas críticos, tiempo de respuesta y evolución de práctica, sin presentar estos resultados como calificación oficial ni predicción garantizada.

### OBJ-003 — Acceso freemium y monetización ética

Permitir acceso gratuito limitado, venta de acceso por especialidad y plan Pro 2026 con pago único, evitando suscripciones opacas, urgencia falsa o claims de aprobación.

### OBJ-004 — Gestión administrativa integral

Permitir que administradores creen, revisen, publiquen, versionen y retiren recursos, simuladores, preguntas, planes, precios, pagos, disclaimers y contenidos legales.

### OBJ-005 — Cumplimiento legal, privacidad y trazabilidad

Registrar consentimiento, versiones legales, acciones administrativas, pagos, cambios de contenido y tratamiento de datos personales.

### OBJ-006 — Escalabilidad funcional del MVP

Definir módulos desacoplados para que el MVP pueda iniciar con landing, SSO, onboarding, biblioteca, simuladores, reportes básicos, pagos manuales y admin, dejando integración avanzada y analítica predictiva para iteraciones posteriores.

---

## 3. Alcance funcional

### Incluido en MVP

* Landing pública.
* Páginas informativas sobre evaluación docente, modelo, dimensiones, especialidades, precios, FAQ y disclaimer.
* Autenticación solo con Google SSO y Facebook SSO.
* Disclaimer obligatorio antes del registro.
* Onboarding docente.
* Dashboard docente.
* Biblioteca de recursos.
* Cursos simples por módulos/lecciones.
* Simuladores de práctica.
* Banco de preguntas.
* Resultados de intento.
* Revisión de fallos.
* Plan gratuito.
* Plan por especialidad.
* Plan Pro 2026.
* Checkout.
* Pago por transferencia con revisión manual.
* Registro de pagos externos.
* Panel admin.
* Gestión legal.
* Auditoría.
* Analítica operativa básica.

### Excluido del MVP

* Inscripción oficial a evaluaciones.
* Consulta de resultados oficiales.
* Certificados oficiales.
* Integración directa con sistemas de INEVAL.
* Uso de reactivos reales, filtrados o propietarios de entidades públicas.
* Garantía de aprobación.
* App móvil nativa.
* Proctoring.
* IA generativa de preguntas en producción sin revisión humana.
* Predicción psicométrica oficial.
* Facturación electrónica automatizada, salvo que se valide proveedor y cumplimiento tributario.

---

## 4. Glosario funcional

| Término             | Definición operativa                                                 |
| ------------------- | -------------------------------------------------------------------- |
| Docente             | Usuario final que usa la plataforma para prepararse.                 |
| Invitado            | Usuario no autenticado.                                              |
| Usuario free        | Docente registrado sin plan pagado.                                  |
| Usuario premium     | Docente con acceso activo a plan pagado.                             |
| Plan Especialidad   | Acceso pago único a recursos/simuladores de una especialidad.        |
| Plan Pro 2026       | Acceso pago único a todos los recursos premium de temporada 2026.    |
| Dimensión           | Bloque evaluativo del modelo de desempeño docente.                   |
| Especialidad        | Área docente asociada a fase 1 o fase 2.                             |
| Recurso             | PDF, video, guía, artículo, checklist o material descargable.        |
| Curso               | Secuencia de módulos/lecciones con progreso.                         |
| Ítem                | Pregunta de práctica original con opciones, respuesta y explicación. |
| Simulador           | Evaluación de práctica creada a partir de ítems.                     |
| Intento             | Ejecución individual de un simulador por un docente.                 |
| Reporte de práctica | Resultado no oficial del intento.                                    |
| Disclaimer          | Aviso legal/institucional obligatorio.                               |
| Entitlement         | Derecho de acceso derivado de plan, compra o cupón.                  |
| Factores asociados  | Información contextual, no tratada como prueba principal.            |

---

## 5. Priorización

| Prioridad | Significado           | Criterio                                           |
| --------- | --------------------- | -------------------------------------------------- |
| P0        | Bloqueante legal/core | Sin esto no puede lanzarse MVP.                    |
| P1        | MVP esencial          | Necesario para propuesta de valor inicial.         |
| P2        | Post-MVP cercano      | Mejora conversión, retención u operación.          |
| P3        | Escalable/futuro      | Funcionalidad avanzada o automatización posterior. |

---

## 6. Actores

| Código  | Actor             | Descripción                                              | Permisos base                                                                  |
| ------- | ----------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ACT-001 | Invitado          | Visitante público sin sesión.                            | Ver landing, precios, FAQ, recursos públicos, iniciar SSO.                     |
| ACT-002 | Docente Free      | Usuario autenticado sin plan pagado.                     | Diagnóstico limitado, recursos gratuitos, dashboard básico.                    |
| ACT-003 | Docente Premium   | Usuario con plan Especialidad o Pro activo.              | Recursos premium según entitlement, simuladores completos, reportes avanzados. |
| ACT-004 | Admin Contenido   | Gestiona guías, PDFs, videos, cursos y artículos.        | CRUD contenido, versionado, publicación.                                       |
| ACT-005 | Revisor Académico | Revisa preguntas, explicaciones y alineación curricular. | Aprobar/rechazar ítems y simuladores.                                          |
| ACT-006 | Admin Comercial   | Gestiona precios, planes, cupones y pagos.               | CRUD comercial, aprobación pagos, reportes comerciales.                        |
| ACT-007 | Super Admin       | Control total del sistema.                               | Gestión de roles, auditoría, legales, configuración global.                    |
| ACT-008 | Soporte           | Atiende incidencias de usuario, pagos y accesos.         | Lectura limitada, actualización de tickets, reenvío de instrucciones.          |
| ACT-009 | Proveedor SSO     | Google/Facebook.                                         | Autenticación externa.                                                         |
| ACT-010 | Proveedor Pago    | Payphone, PayPal, transferencia, tarjeta u otro futuro.  | Confirmación/verificación de pagos.                                            |
| ACT-011 | Sistema           | Procesos automáticos.                                    | Recalcular progreso, enviar notificaciones, expirar accesos, auditar eventos.  |

---

## 7. Reglas de negocio

| ID     | Regla                                                                                                                                              | Prioridad | Relación                        |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------: | ------------------------------- |
| BR-001 | La plataforma debe identificarse siempre como privada, independiente y no oficial.                                                                 |        P0 | FR-LEG, FR-PUB, FR-AUTH, FR-COM |
| BR-002 | Ningún texto debe afirmar afiliación, convenio, representación o aval de INEVAL/Mineduc.                                                           |        P0 | FR-CMS-013, FR-LEG-001          |
| BR-003 | El sistema debe enlazar a fuentes oficiales para convocatorias, resultados, certificados y simuladores oficiales.                                  |        P0 | FR-PUB-006                      |
| BR-004 | Todo resultado del sistema debe etiquetarse como “resultado de práctica no oficial”.                                                               |        P0 | FR-REP-002                      |
| BR-005 | Está prohibido usar claims como “reactivos reales”, “preguntas filtradas”, “entrenamiento oficial”, “garantiza aprobación” o “asegura tu puntaje”. |        P0 | FR-CMS-014, FR-ADM-LEGAL-008    |
| BR-006 | Todo usuario debe aceptar disclaimer, términos y privacidad antes del primer SSO efectivo.                                                         |        P0 | FR-AUTH-001                     |
| BR-007 | El consentimiento debe registrar versión, fecha, IP, user agent y texto aceptado.                                                                  |        P0 | FR-LEG-004                      |
| BR-008 | El registro solo puede realizarse con Google SSO o Facebook SSO.                                                                                   |        P0 | FR-AUTH-003                     |
| BR-009 | No debe existir contraseña local para docentes.                                                                                                    |        P0 | FR-AUTH-004                     |
| BR-010 | El usuario free puede acceder a diagnóstico limitado y recursos gratuitos.                                                                         |        P1 | FR-ENT-001                      |
| BR-011 | El acceso premium depende de entitlements activos.                                                                                                 |        P1 | FR-ENT-003                      |
| BR-012 | Plan Especialidad desbloquea únicamente una especialidad más recursos relacionados.                                                                |        P1 | FR-COM-003                      |
| BR-013 | Plan Pro 2026 desbloquea todas las dimensiones, especialidades disponibles y recursos premium publicados.                                          |        P1 | FR-COM-004                      |
| BR-014 | Los planes MVP serán pago único, sin renovación automática.                                                                                        |        P1 | FR-COM-001                      |
| BR-015 | Transferencias bancarias requieren revisión manual antes de activar acceso.                                                                        |        P1 | FR-PAY-006                      |
| BR-016 | Pagos con proveedor confirmado pueden activar acceso automáticamente.                                                                              |        P2 | FR-PAY-012                      |
| BR-017 | Todo recurso debe tener estado: borrador, revisión, publicado, archivado.                                                                          |        P1 | FR-CNT-005                      |
| BR-018 | Todo ítem debe tener explicación pedagógica antes de publicarse.                                                                                   |        P1 | FR-QBK-008                      |
| BR-019 | Todo ítem debe estar asociado al menos a una dimensión y tema.                                                                                     |        P1 | FR-QBK-003                      |
| BR-020 | Los ítems específicos deben asociarse a especialidad.                                                                                              |        P1 | FR-QBK-004                      |
| BR-021 | El sistema debe diferenciar factores asociados de dimensiones evaluativas principales.                                                             |        P0 | FR-MDL-007                      |
| BR-022 | Cronograma M1–M6 debe ser editable por admin.                                                                                                      |        P1 | FR-MDL-011                      |
| BR-023 | Especialidades Fase 1 y Fase 2 deben ser administrables, no hardcodeadas.                                                                          |        P1 | FR-MDL-010                      |
| BR-024 | Las preguntas no deben mostrarse con lenguaje de propiedad oficial.                                                                                |        P0 | FR-QBK-013                      |
| BR-025 | El usuario puede eliminar cuenta o solicitar eliminación de datos.                                                                                 |        P0 | FR-PRI-006                      |
| BR-026 | El sistema debe soportar retiro de consentimiento para tratamientos no esenciales.                                                                 |        P0 | FR-PRI-008                      |
| BR-027 | Las acciones administrativas críticas deben auditarse.                                                                                             |        P0 | FR-AUD-001                      |
| BR-028 | Cambios de precio no deben alterar compras ya pagadas.                                                                                             |        P1 | FR-COM-009                      |
| BR-029 | Un recurso archivado no debe aparecer en catálogos, pero debe conservar trazabilidad histórica.                                                    |        P1 | FR-CNT-010                      |
| BR-030 | Un simulador publicado no debe cambiar retroactivamente intentos finalizados; debe versionarse.                                                    |        P1 | FR-SIM-010                      |
| BR-031 | Los reportes deben evitar clasificaciones oficiales de desempeño.                                                                                  |        P0 | FR-REP-004                      |
| BR-032 | Se permiten etiquetas internas de preparación: “Necesita refuerzo”, “En progreso”, “Buen dominio”, “Listo para práctica cronometrada”.             |        P1 | FR-REP-005                      |
| BR-033 | El sistema debe registrar fecha de última revisión de contenido.                                                                                   |        P1 | FR-CNT-011                      |
| BR-034 | El sistema debe permitir marcar contenidos como “requiere revisión” cuando cambien lineamientos oficiales.                                         |        P1 | FR-CNT-012                      |
| BR-035 | La plataforma debe evitar imágenes, logos, sellos o diseño confundible con portal gubernamental.                                                   |        P0 | FR-PUB-009                      |

---

## 8. Modelo de evaluación representado en el sistema

### REQ-MDL-DOMAIN-001 — Dimensiones base

| Código | Dimensión UI                                           | Instrumento referencial        | Requisitos funcionales relacionados |
| ------ | ------------------------------------------------------ | ------------------------------ | ----------------------------------- |
| D1     | Conocimientos para la enseñanza efectiva               | Prueba de base estructurada    | FR-MDL, FR-QBK, FR-SIM, FR-REP      |
| D2     | Competencias socioemocionales                          | Cuestionario de autorreporte   | FR-MDL, FR-QBK, FR-SIM, FR-REP      |
| D3     | Habilidades y actitudes de responsabilidad profesional | Cuestionario de autoevaluación | FR-MDL, FR-QBK, FR-SIM, FR-REP      |
| D4     | Habilidades de gestión del aprendizaje                 | Rúbrica de observación de aula | FR-MDL, FR-CNT, FR-SIM, FR-REP      |
| FA     | Factores asociados                                     | Encuesta contextual            | FR-MDL, FR-CNT, FR-REP              |

### REQ-MDL-DOMAIN-002 — Especialidades iniciales

| Fase   | Especialidad                       | Nivel                            |
| ------ | ---------------------------------- | -------------------------------- |
| Fase 1 | Estudios Sociales                  | 8.º a 10.º de EGB                |
| Fase 1 | Ciencias Naturales                 | 8.º a 10.º de EGB                |
| Fase 1 | Emprendimiento y Gestión           | Bachillerato                     |
| Fase 1 | Química                            | Bachillerato                     |
| Fase 1 | Biología                           | Bachillerato                     |
| Fase 1 | Educación para la Ciudadanía       | Bachillerato                     |
| Fase 1 | Filosofía / Pensamiento filosófico | Bachillerato                     |
| Fase 1 | Educación General Básica           | 2.º a 7.º de EGB                 |
| Fase 2 | Matemática                         | 8.º de EGB a 3.º de Bachillerato |
| Fase 2 | Física                             | Bachillerato                     |
| Fase 2 | Historia                           | Bachillerato                     |
| Fase 2 | Lengua y Literatura                | 8.º de EGB a 3.º de Bachillerato |
| Fase 2 | Educación Inicial                  | Inicial                          |
| Fase 2 | Educación Física                   | 2.º de EGB a Bachillerato        |

---

## 9. Requisitos funcionales por módulo

## 9.1. Portal público, SEO y contenido informativo

| ID         | Requisito                                                                                                                                  | Prioridad | Depende / Relación | Criterios de aceptación                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------: | ------------------ | ----------------------------------------------------------------------------- |
| FR-PUB-001 | El sistema debe mostrar una landing pública con propuesta de valor, dimensiones, especialidades, simuladores, pricing, FAQ y disclaimer.   |        P1 | BR-001             | La landing carga sin sesión y muestra CTA a diagnóstico gratuito y planes.    |
| FR-PUB-002 | El sistema debe proveer página pública “Evaluación Docente Ecuador 2026”.                                                                  |        P1 | BR-003             | Página indexable con explicación, fuentes oficiales y fecha de actualización. |
| FR-PUB-003 | El sistema debe proveer página pública “Modelo de Evaluación”.                                                                             |        P1 | FR-MDL-001         | Muestra D1–D4, factores asociados, instrumentos, tiempos y modalidad.         |
| FR-PUB-004 | El sistema debe proveer página pública “Especialidades”.                                                                                   |        P1 | FR-MDL-010         | Permite filtrar por fase, nivel, especialidad y disponibilidad.               |
| FR-PUB-005 | El sistema debe proveer catálogo público de simuladores.                                                                                   |        P1 | FR-SIM-001         | Muestra simuladores gratuitos/premium con estado bloqueado si aplica.         |
| FR-PUB-006 | El sistema debe incluir bloque “Fuentes oficiales” con enlaces externos configurables.                                                     |        P0 | BR-003             | Footer y páginas informativas contienen links a canales oficiales.            |
| FR-PUB-007 | El sistema debe mostrar disclaimer corto en footer global.                                                                                 |        P0 | FR-LEG-001         | Footer visible en todas las páginas públicas.                                 |
| FR-PUB-008 | El sistema debe mostrar fecha de última revisión del contenido informativo.                                                                |        P1 | BR-033             | Fecha visible en páginas de modelo, especialidades y FAQ.                     |
| FR-PUB-009 | El sistema debe impedir uso de logotipos, sellos o estética confundible con INEVAL/Mineduc en plantillas públicas.                         |        P0 | BR-035             | Revisión QA visual bloquea publicación si hay assets no permitidos.           |
| FR-PUB-010 | El sistema debe permitir CTA “Hacer diagnóstico gratuito”.                                                                                 |        P1 | FR-AUTH-001        | Si no hay sesión, abre flujo disclaimer + SSO.                                |
| FR-PUB-011 | El sistema debe permitir CTA “Ver mi especialidad”.                                                                                        |        P1 | FR-MDL-010         | Dirige al filtro de especialidades.                                           |
| FR-PUB-012 | El sistema debe mostrar recursos gratuitos destacados.                                                                                     |        P2 | FR-CNT-001         | Cards públicas accesibles sin login si el recurso es público.                 |
| FR-PUB-013 | El sistema debe soportar páginas legales públicas: disclaimer, términos, privacidad, reembolsos.                                           |        P0 | FR-LEG             | URLs públicas y accesibles desde footer.                                      |
| FR-PUB-014 | El sistema debe mostrar pricing público con planes, alcance, precio, duración y restricciones.                                             |        P1 | FR-COM-001         | Pricing no requiere login y no oculta términos.                               |
| FR-PUB-015 | El sistema debe incluir FAQ pública con preguntas sobre no afiliación, uso de preguntas originales, garantía, pagos, privacidad y soporte. |        P1 | BR-001             | FAQ contiene respuestas aprobadas por admin legal.                            |
| FR-PUB-016 | El sistema debe generar metadatos SEO editables por página.                                                                                |        P2 | FR-CMS-009         | Admin puede editar title, description, slug y canonical.                      |
| FR-PUB-017 | El sistema debe generar sitemap público.                                                                                                   |        P2 | FR-PUB-016         | Sitemap incluye páginas publicadas y excluye contenido privado.               |
| FR-PUB-018 | El sistema debe ocultar recursos premium detrás de preview pública.                                                                        |        P1 | FR-ENT-003         | Usuario invitado ve resumen, no contenido completo.                           |

---

## 9.2. Legal, disclaimer y consentimientos

| ID         | Requisito                                                                                                        | Prioridad | Depende / Relación | Criterios de aceptación                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | --------: | ------------------ | ------------------------------------------------------------------------------ |
| FR-LEG-001 | El sistema debe mantener un disclaimer institucional corto global.                                               |        P0 | BR-001             | Footer, registro, checkout y simuladores muestran texto vigente.               |
| FR-LEG-002 | El sistema debe mantener versiones de disclaimer largo.                                                          |        P0 | BR-006             | Admin puede crear nueva versión y marcarla vigente.                            |
| FR-LEG-003 | El sistema debe bloquear SSO hasta que el usuario acepte disclaimer, términos y privacidad.                      |        P0 | FR-AUTH-001        | Botón SSO deshabilitado hasta marcar checkboxes obligatorios.                  |
| FR-LEG-004 | El sistema debe registrar aceptación legal con user/session id, versión, fecha, IP, user agent y hash del texto. |        P0 | BR-007             | Registro consultable en admin legal.                                           |
| FR-LEG-005 | El sistema debe re-solicitar aceptación cuando exista nueva versión legal obligatoria.                           |        P0 | FR-LEG-002         | Usuario no accede a app hasta aceptar versión vigente.                         |
| FR-LEG-006 | El sistema debe permitir aceptación separada de marketing/notificaciones no esenciales.                          |        P0 | FR-PRI-008         | Marketing no puede estar preseleccionado.                                      |
| FR-LEG-007 | El sistema debe registrar retiro de consentimiento no esencial.                                                  |        P0 | FR-PRI-008         | Usuario puede retirar desde perfil.                                            |
| FR-LEG-008 | El sistema debe mantener página de política de privacidad.                                                       |        P0 | FR-PRI             | Debe listar datos, finalidades, base legal, conservación y derechos.           |
| FR-LEG-009 | El sistema debe mantener página de términos y condiciones.                                                       |        P0 | FR-COM             | Incluye acceso, pagos, restricciones, soporte y limitación de responsabilidad. |
| FR-LEG-010 | El sistema debe mantener política de reembolso configurable.                                                     |        P1 | FR-COM-010         | Visible antes del pago.                                                        |
| FR-LEG-011 | El sistema debe mostrar advertencia de no garantía de resultados antes de iniciar simulador.                     |        P0 | FR-SIM-004         | Modal o notice visible antes del primer intento.                               |
| FR-LEG-012 | El sistema debe mostrar advertencia de “contenido original de preparación”.                                      |        P0 | BR-024             | Visible en banco de simuladores y página de preguntas/reporte.                 |
| FR-LEG-013 | El sistema debe incluir “Ver fuentes oficiales” en disclaimer modal.                                             |        P0 | BR-003             | Botón abre página/links oficiales.                                             |
| FR-LEG-014 | El sistema debe permitir exportar historial legal de un usuario.                                                 |        P1 | FR-PRI-005         | Export contiene versiones aceptadas y timestamps.                              |
| FR-LEG-015 | El sistema debe auditar cambios en textos legales.                                                               |        P0 | FR-AUD-001         | Audit log registra autor, diff, fecha y estado.                                |

---

## 9.3. Autenticación, sesión y acceso

| ID          | Requisito                                                                                            | Prioridad | Depende / Relación | Criterios de aceptación                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------- | --------: | ------------------ | --------------------------------------------------------------------------------- |
| FR-AUTH-001 | El sistema debe iniciar flujo de registro/login con modal de disclaimer obligatorio.                 |        P0 | FR-LEG-003         | Usuario no puede seleccionar proveedor SSO sin aceptar.                           |
| FR-AUTH-002 | El sistema debe permitir login con Google SSO.                                                       |        P0 | BR-008             | Usuario autenticado crea o recupera cuenta.                                       |
| FR-AUTH-003 | El sistema debe permitir login con Facebook SSO.                                                     |        P1 | BR-008             | Usuario autenticado crea o recupera cuenta.                                       |
| FR-AUTH-004 | El sistema no debe permitir contraseña local para docentes.                                          |        P0 | BR-009             | No existe formulario de password para usuarios finales.                           |
| FR-AUTH-005 | El sistema debe crear cuenta al primer SSO exitoso.                                                  |        P0 | FR-AUTH-002        | Persistir email, provider, provider subject, avatar opcional y estado onboarding. |
| FR-AUTH-006 | El sistema debe vincular cuentas por email verificado cuando el mismo usuario use Google y Facebook. |        P1 | FR-AUTH-002        | Evita duplicados si email coincide y está verificado.                             |
| FR-AUTH-007 | El sistema debe manejar error de SSO cancelado.                                                      |        P1 | FR-AUTH-002        | Muestra mensaje claro y permite reintentar.                                       |
| FR-AUTH-008 | El sistema debe manejar error de email no verificado.                                                |        P1 | FR-AUTH-002        | Solicita usar cuenta verificada.                                                  |
| FR-AUTH-009 | El sistema debe persistir sesión segura.                                                             |        P0 | FR-AUTH-002        | Rutas `/app/*` requieren sesión.                                                  |
| FR-AUTH-010 | El sistema debe expirar sesión por inactividad configurable.                                         |        P1 | FR-SEC-001         | Usuario debe reautenticarse al expirar.                                           |
| FR-AUTH-011 | El sistema debe permitir cerrar sesión.                                                              |        P0 | FR-AUTH-009        | Sesión local queda invalidada.                                                    |
| FR-AUTH-012 | El sistema debe aplicar RBAC para rutas admin.                                                       |        P0 | ACT-004..ACT-008   | Usuario sin rol admin recibe 403.                                                 |
| FR-AUTH-013 | El sistema debe permitir asignación de roles por Super Admin.                                        |        P1 | FR-ADM-USR-006     | Super Admin agrega/quita roles.                                                   |
| FR-AUTH-014 | El sistema debe registrar evento de login/logout.                                                    |        P1 | FR-AUD-001         | Audit/event log contiene timestamp y provider.                                    |
| FR-AUTH-015 | El sistema debe redirigir a onboarding si el perfil docente está incompleto.                         |        P0 | FR-ONB-001         | Usuario nuevo no entra al dashboard sin onboarding mínimo.                        |

---

## 9.4. Onboarding y perfil docente

| ID          | Requisito                                                                                              | Prioridad | Depende / Relación     | Criterios de aceptación                                   |
| ----------- | ------------------------------------------------------------------------------------------------------ | --------: | ---------------------- | --------------------------------------------------------- |
| FR-ONB-001  | El sistema debe mostrar wizard de onboarding al primer acceso.                                         |        P0 | FR-AUTH-015            | Wizard aparece si `onboarding_status != completed`.       |
| FR-ONB-002  | El sistema debe solicitar fase: Fase 1, Fase 2 o “No sé”.                                              |        P1 | FR-MDL-010             | Selección queda en perfil.                                |
| FR-ONB-003  | El sistema debe solicitar especialidad.                                                                |        P1 | FR-MDL-010             | Lista depende de fase si fue seleccionada.                |
| FR-ONB-004  | El sistema debe solicitar nivel educativo.                                                             |        P1 | FR-MDL-010             | Campo requerido si especialidad lo permite.               |
| FR-ONB-005  | El sistema debe solicitar tiempo disponible por semana.                                                |        P2 | FR-PLAN-001            | Campo alimenta ruta recomendada.                          |
| FR-ONB-006  | El sistema debe solicitar objetivo: diagnóstico rápido, preparación completa o refuerzo por dimensión. |        P1 | FR-PLAN-001            | Selección determina CTA inicial.                          |
| FR-ONB-007  | El sistema debe solicitar preferencia de estudio: simuladores, videos, PDFs o mixto.                   |        P2 | FR-PLAN-003            | Recomendaciones se ordenan por preferencia.               |
| FR-ONB-008  | El sistema debe permitir saltar campos no críticos y completar luego.                                  |        P2 | FR-PROF-001            | Dashboard muestra recordatorio de completar perfil.       |
| FR-ONB-009  | El sistema debe ofrecer diagnóstico inicial al finalizar onboarding.                                   |        P1 | FR-SIM-003             | Usuario puede iniciar o posponer.                         |
| FR-ONB-010  | El sistema debe marcar onboarding como completado cuando se guarden campos mínimos.                    |        P0 | FR-ONB-002, FR-ONB-003 | Usuario accede a dashboard.                               |
| FR-PROF-001 | El sistema debe permitir editar perfil docente.                                                        |        P1 | FR-ONB                 | Usuario cambia fase, especialidad, tiempo y preferencias. |
| FR-PROF-002 | El sistema debe permitir ver plan activo.                                                              |        P1 | FR-ENT-003             | Perfil muestra Free, Especialidad o Pro.                  |
| FR-PROF-003 | El sistema debe permitir ver historial de pagos.                                                       |        P1 | FR-PAY-015             | Lista pagos con estado.                                   |
| FR-PROF-004 | El sistema debe permitir gestionar consentimiento de marketing.                                        |        P0 | FR-LEG-006             | Toggle registra evento.                                   |
| FR-PROF-005 | El sistema debe permitir solicitar eliminación de cuenta.                                              |        P0 | FR-PRI-006             | Solicitud queda registrada para flujo de privacidad.      |

---

## 9.5. Modelo, dimensiones, especialidades y cronograma

| ID         | Requisito                                                                                            | Prioridad | Depende / Relación     | Criterios de aceptación                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------- | --------: | ---------------------- | ------------------------------------------------------------------------ |
| FR-MDL-001 | El sistema debe administrar catálogo de dimensiones.                                                 |        P0 | REQ-MDL-DOMAIN-001     | Admin puede editar descripción, instrumento, tiempo, modalidad y estado. |
| FR-MDL-002 | El sistema debe mostrar D1 en UI como “Conocimientos para la enseñanza efectiva”.                    |        P0 | FR-MDL-001             | Visible en modelo, dashboard, simuladores y reportes.                    |
| FR-MDL-003 | El sistema debe mostrar D2 como “Competencias socioemocionales”.                                     |        P0 | FR-MDL-001             | Visible consistentemente.                                                |
| FR-MDL-004 | El sistema debe mostrar D3 como “Habilidades y actitudes de responsabilidad profesional”.            |        P0 | FR-MDL-001             | Visible consistentemente.                                                |
| FR-MDL-005 | El sistema debe mostrar D4 como “Habilidades de gestión del aprendizaje”.                            |        P0 | FR-MDL-001             | Visible consistentemente.                                                |
| FR-MDL-006 | El sistema debe permitir administrar temas/subtemas por dimensión.                                   |        P1 | FR-QBK-003             | Ítems y recursos pueden asociarse a temas.                               |
| FR-MDL-007 | El sistema debe administrar “Factores asociados” como contexto separado de D1–D4.                    |        P0 | BR-021                 | No aparece como dimensión evaluativa principal.                          |
| FR-MDL-008 | El sistema debe mostrar correspondencia histórica del modelo Ser Maestro solo en página informativa. |        P2 | FR-PUB-003             | Tooltip o sección avanzada, no en dashboard principal.                   |
| FR-MDL-009 | El sistema debe administrar fases.                                                                   |        P1 | REQ-MDL-DOMAIN-002     | Fase tiene nombre, descripción, estado y orden.                          |
| FR-MDL-010 | El sistema debe administrar especialidades por fase.                                                 |        P1 | BR-023                 | Admin puede crear, editar, publicar, archivar especialidad.              |
| FR-MDL-011 | El sistema debe administrar cronograma M1–M6.                                                        |        P1 | BR-022                 | Admin edita título, fase, dimensión, fecha/mes, estado y descripción.    |
| FR-MDL-012 | El sistema debe mostrar advertencia cuando cronograma esté “en revisión”.                            |        P1 | FR-MDL-011             | Usuarios ven badge “cronograma sujeto a actualización”.                  |
| FR-MDL-013 | El sistema debe permitir marcar una especialidad como disponible, en preparación o próximamente.     |        P1 | FR-MDL-010             | Catálogos respetan estado.                                               |
| FR-MDL-014 | El sistema debe permitir asociar recursos, cursos, ítems y simuladores a dimensiones/especialidades. |        P1 | FR-CNT, FR-QBK, FR-SIM | Filtros funcionan por taxonomía.                                         |

---

## 9.6. Entitlements, planes y control de acceso

| ID         | Requisito                                                                            | Prioridad | Depende / Relación | Criterios de aceptación                                       |
| ---------- | ------------------------------------------------------------------------------------ | --------: | ------------------ | ------------------------------------------------------------- |
| FR-ENT-001 | El sistema debe asignar entitlement Free al crear cuenta.                            |        P1 | FR-AUTH-005        | Usuario accede a contenido gratuito.                          |
| FR-ENT-002 | El sistema debe calcular acceso por plan activo.                                     |        P1 | FR-COM-001         | Middleware/UI bloquea contenido no autorizado.                |
| FR-ENT-003 | El sistema debe soportar entitlements por recurso, especialidad, dimensión y global. |        P1 | BR-011             | Plan Especialidad y Pro se comportan distinto.                |
| FR-ENT-004 | El sistema debe bloquear recursos premium si no existe entitlement válido.           |        P1 | FR-CNT-006         | UI muestra paywall contextual.                                |
| FR-ENT-005 | El sistema debe permitir desbloqueo manual por admin.                                |        P1 | FR-ADM-USR-010     | Admin asigna acceso por soporte/beca/caso especial.           |
| FR-ENT-006 | El sistema debe permitir expiración por temporada.                                   |        P2 | FR-COM-004         | Pro 2026 expira según fecha configurable.                     |
| FR-ENT-007 | El sistema debe conservar acceso histórico a reportes generados aunque expire plan.  |        P2 | FR-REP-001         | Usuario puede ver reportes propios, no iniciar premium nuevo. |
| FR-ENT-008 | El sistema debe registrar motivo de concesión o revocación de entitlement.           |        P0 | FR-AUD-001         | Audit log obligatorio.                                        |

---

## 9.7. Biblioteca de recursos y CMS académico

| ID         | Requisito                                                                                   | Prioridad | Depende / Relación | Criterios de aceptación                                 |
| ---------- | ------------------------------------------------------------------------------------------- | --------: | ------------------ | ------------------------------------------------------- |
| FR-CNT-001 | El sistema debe permitir crear recurso tipo PDF.                                            |        P1 | FR-ADM-CNT         | Archivo subido, metadata completa, preview si aplica.   |
| FR-CNT-002 | El sistema debe permitir crear recurso tipo video.                                          |        P1 | FR-ADM-CNT         | URL/embed/archivo y duración.                           |
| FR-CNT-003 | El sistema debe permitir crear recurso tipo guía/artículo.                                  |        P1 | FR-ADM-CNT         | Editor con contenido, slug y SEO.                       |
| FR-CNT-004 | El sistema debe permitir crear checklist o plantilla descargable.                           |        P2 | FR-ADM-CNT         | Archivo o contenido estructurado.                       |
| FR-CNT-005 | El sistema debe manejar estados: borrador, revisión, publicado, archivado.                  |        P1 | BR-017             | Solo publicado aparece al usuario.                      |
| FR-CNT-006 | El sistema debe marcar recurso como gratuito o premium.                                     |        P1 | FR-ENT-004         | Paywall se aplica correctamente.                        |
| FR-CNT-007 | El sistema debe asociar recurso a dimensión, especialidad, fase, tema y nivel.              |        P1 | FR-MDL-014         | Filtros devuelven resultados correctos.                 |
| FR-CNT-008 | El sistema debe permitir búsqueda por texto.                                                |        P1 | FR-CNT-003         | Busca por título, resumen, tags y tema.                 |
| FR-CNT-009 | El sistema debe permitir filtros combinados.                                                |        P1 | FR-MDL-014         | Dimensión + especialidad + formato + free/premium.      |
| FR-CNT-010 | El sistema debe archivar recursos sin borrar historial.                                     |        P1 | BR-029             | Recurso desaparece de catálogo pero persiste auditoría. |
| FR-CNT-011 | El sistema debe registrar fecha de última revisión académica.                               |        P1 | BR-033             | Visible para usuarios y admin.                          |
| FR-CNT-012 | El sistema debe permitir marcar recurso como “requiere revisión”.                           |        P1 | BR-034             | Badge visible en admin y ocultable al usuario.          |
| FR-CNT-013 | El sistema debe impedir publicación si contiene claims prohibidos configurados.             |        P0 | BR-005             | Validador alerta “reactivos reales”, “oficial”, etc.    |
| FR-CNT-014 | El sistema debe permitir versionar recursos.                                                |        P2 | FR-CNT-011         | Usuario ve versión actual; admin ve historial.          |
| FR-CNT-015 | El sistema debe registrar visualizaciones y descargas.                                      |        P2 | FR-ANA-006         | Evento asociado a usuario/recurso.                      |
| FR-CNT-016 | El sistema debe permitir marcar recurso como favorito.                                      |        P2 | FR-APP-009         | Favoritos aparecen en dashboard.                        |
| FR-CNT-017 | El sistema debe permitir notas privadas del usuario sobre recurso.                          |        P2 | FR-APP-010         | Nota vinculada a usuario y recurso.                     |
| FR-CNT-018 | El sistema debe permitir ordenar recursos por recomendación, fecha, popularidad o duración. |        P2 | FR-CNT-015         | Orden aplicado en biblioteca.                           |

---

## 9.8. Cursos y lecciones

| ID         | Requisito                                                             | Prioridad | Depende / Relación | Criterios de aceptación                                 |
| ---------- | --------------------------------------------------------------------- | --------: | ------------------ | ------------------------------------------------------- |
| FR-CRS-001 | El sistema debe permitir crear curso.                                 |        P1 | FR-CNT             | Curso tiene título, resumen, portada, estado, acceso.   |
| FR-CRS-002 | El sistema debe permitir crear módulos dentro de curso.               |        P1 | FR-CRS-001         | Módulos ordenables.                                     |
| FR-CRS-003 | El sistema debe permitir crear lecciones.                             |        P1 | FR-CRS-002         | Lección puede ser video, lectura, PDF o quiz vinculado. |
| FR-CRS-004 | El sistema debe asociar curso a dimensión/especialidad/fase.          |        P1 | FR-MDL-014         | Curso aparece en filtros correctos.                     |
| FR-CRS-005 | El sistema debe registrar progreso por lección.                       |        P1 | FR-APP-004         | Porcentaje de curso calculado.                          |
| FR-CRS-006 | El sistema debe permitir continuar donde quedó.                       |        P2 | FR-CRS-005         | CTA “Continuar curso”.                                  |
| FR-CRS-007 | El sistema debe emitir constancia privada opcional de participación.  |        P3 | FR-LEG-011         | Debe decir “no oficial”.                                |
| FR-CRS-008 | El sistema debe permitir adjuntar recursos complementarios a lección. |        P2 | FR-CNT-001         | Recursos listados dentro de lección.                    |
| FR-CRS-009 | El sistema debe permitir bloquear lecciones premium.                  |        P1 | FR-ENT-004         | Usuario free ve preview/paywall.                        |
| FR-CRS-010 | El sistema debe registrar finalización de curso.                      |        P2 | FR-ANA-006         | Evento disponible en analytics.                         |

---

## 9.9. Banco de ítems

| ID         | Requisito                                                                            | Prioridad | Depende / Relación | Criterios de aceptación                                |
| ---------- | ------------------------------------------------------------------------------------ | --------: | ------------------ | ------------------------------------------------------ |
| FR-QBK-001 | El sistema debe permitir crear ítem de opción múltiple.                              |        P1 | FR-ADM-QBK         | Enunciado, opciones, respuesta correcta y explicación. |
| FR-QBK-002 | El sistema debe permitir mínimo 2 y máximo N opciones configurables.                 |        P1 | FR-QBK-001         | Validación bloquea opciones incompletas.               |
| FR-QBK-003 | El sistema debe asociar cada ítem a dimensión y tema.                                |        P1 | BR-019             | No se publica sin taxonomía.                           |
| FR-QBK-004 | El sistema debe asociar ítems específicos a especialidad.                            |        P1 | BR-020             | D1 específica requiere especialidad.                   |
| FR-QBK-005 | El sistema debe asignar dificultad: básica, intermedia, avanzada.                    |        P1 | FR-SIM-006         | Simulador puede balancear dificultad.                  |
| FR-QBK-006 | El sistema debe asignar tiempo estimado por ítem.                                    |        P2 | FR-REP-010         | Reporte compara tiempo real vs estimado.               |
| FR-QBK-007 | El sistema debe registrar fuente conceptual/referencia interna.                      |        P1 | FR-CNT-011         | Campo visible solo admin si aplica.                    |
| FR-QBK-008 | El sistema debe requerir explicación pedagógica antes de publicar.                   |        P1 | BR-018             | Estado publicado bloqueado si explicación vacía.       |
| FR-QBK-009 | El sistema debe manejar estados: borrador, revisión, aprobado, publicado, archivado. |        P1 | FR-ADM-QBK         | Solo publicado entra a simuladores públicos.           |
| FR-QBK-010 | El sistema debe permitir revisión académica con comentarios.                         |        P1 | ACT-005            | Revisor aprueba/rechaza y deja observación.            |
| FR-QBK-011 | El sistema debe permitir importar ítems por CSV/XLSX validado.                       |        P2 | FR-QBK-001         | Import muestra errores por fila.                       |
| FR-QBK-012 | El sistema debe permitir clonar ítem.                                                |        P2 | FR-QBK-001         | Crea copia en borrador.                                |
| FR-QBK-013 | El sistema debe impedir metadata o texto que sugiera ítem oficial/filtrado.          |        P0 | BR-024             | Validador de claims bloquea publicación.               |
| FR-QBK-014 | El sistema debe soportar reporte de ítem por usuario.                                |        P2 | FR-SIM-015         | Usuario reporta error, ambigüedad o contenido.         |
| FR-QBK-015 | El sistema debe calcular estadísticas de desempeño por ítem.                         |        P2 | FR-REP-012         | Admin ve tasa de acierto, omisión y tiempo promedio.   |
| FR-QBK-016 | El sistema debe versionar ítems modificados después de publicación.                  |        P1 | BR-030             | Intentos antiguos conservan versión usada.             |
| FR-QBK-017 | El sistema debe permitir etiquetar competencia/indicador interno.                    |        P2 | FR-REP-008         | Reporte puede agrupar por indicador.                   |
| FR-QBK-018 | El sistema debe permitir adjuntar imagen o recurso al enunciado.                     |        P2 | FR-QBK-001         | Imagen accesible con alt text.                         |

---

## 9.10. Constructor y catálogo de simuladores

| ID         | Requisito                                                                               | Prioridad | Depende / Relación | Criterios de aceptación                                           |
| ---------- | --------------------------------------------------------------------------------------- | --------: | ------------------ | ----------------------------------------------------------------- |
| FR-SIM-001 | El sistema debe listar simuladores disponibles.                                         |        P1 | FR-QBK-009         | Catálogo muestra título, dimensión, especialidad, tiempo, acceso. |
| FR-SIM-002 | El sistema debe soportar simuladores demo gratuitos.                                    |        P1 | FR-ENT-001         | Usuario free puede iniciar.                                       |
| FR-SIM-003 | El sistema debe soportar diagnóstico inicial mixto.                                     |        P1 | FR-ONB-009         | 20–30 preguntas configurables.                                    |
| FR-SIM-004 | El sistema debe mostrar pantalla previa al intento.                                     |        P1 | FR-LEG-011         | Incluye alcance, número de preguntas, tiempo, disclaimer.         |
| FR-SIM-005 | El sistema debe permitir modo práctica sin presión de tiempo o con timer flexible.      |        P1 | FR-SIM-004         | Usuario puede iniciar modo práctica si permitido.                 |
| FR-SIM-006 | El sistema debe permitir modo cronometrado.                                             |        P1 | FR-QBK-005         | Timer bloquea/advierte al finalizar.                              |
| FR-SIM-007 | El sistema debe permitir construir simulador manual seleccionando ítems.                |        P1 | FR-QBK-009         | Admin selecciona preguntas y publica versión.                     |
| FR-SIM-008 | El sistema debe permitir construir simulador por reglas.                                |        P2 | FR-QBK-015         | Admin define cantidad por dimensión/tema/dificultad.              |
| FR-SIM-009 | El sistema debe configurar número de intentos permitidos.                               |        P2 | FR-ENT-003         | Bloquea si supera límite.                                         |
| FR-SIM-010 | El sistema debe versionar simuladores publicados.                                       |        P1 | BR-030             | Cambios crean nueva versión.                                      |
| FR-SIM-011 | El sistema debe permitir simuladores por dimensión.                                     |        P1 | FR-MDL-001         | Catálogo filtra D1–D4.                                            |
| FR-SIM-012 | El sistema debe permitir simuladores por especialidad.                                  |        P1 | FR-MDL-010         | Simulador vinculado a especialidad.                               |
| FR-SIM-013 | El sistema debe permitir simulador “tronco común/general”.                              |        P1 | FR-MDL-001         | Incluye dimensiones generales configuradas.                       |
| FR-SIM-014 | El sistema debe permitir simulador de rúbrica D4.                                       |        P2 | FR-MDL-005         | Puede operar como checklist/rúbrica de autoevaluación de clase.   |
| FR-SIM-015 | El sistema debe permitir reportar problema en pregunta durante o después del intento.   |        P2 | FR-QBK-014         | Reporte llega a admin/revisor.                                    |
| FR-SIM-016 | El sistema debe guardar progreso del intento automáticamente.                           |        P1 | FR-ATT-003         | Recarga conserva respuestas.                                      |
| FR-SIM-017 | El sistema debe permitir pausar/reanudar solo si el simulador lo configura.             |        P2 | FR-SIM-006         | Modo cronometrado puede impedir pausa.                            |
| FR-SIM-018 | El sistema debe confirmar antes de finalizar intento.                                   |        P1 | FR-ATT-005         | Modal indica preguntas omitidas.                                  |
| FR-SIM-019 | El sistema debe mostrar estado bloqueado con CTA de upgrade si el simulador es premium. |        P1 | FR-ENT-004         | Free no accede al contenido completo.                             |
| FR-SIM-020 | El sistema debe impedir iniciar simulador si no tiene suficientes ítems publicados.     |        P1 | FR-QBK-009         | Muestra estado “no disponible”.                                   |

---

## 9.11. Ejecución de intentos

| ID         | Requisito                                                                                      | Prioridad | Depende / Relación | Criterios de aceptación                      |
| ---------- | ---------------------------------------------------------------------------------------------- | --------: | ------------------ | -------------------------------------------- |
| FR-ATT-001 | El sistema debe crear intento al iniciar simulador.                                            |        P1 | FR-SIM-004         | Estado inicial: in_progress.                 |
| FR-ATT-002 | El sistema debe registrar versión de simulador e ítems usados.                                 |        P1 | FR-SIM-010         | Reporte conserva contexto histórico.         |
| FR-ATT-003 | El sistema debe guardar respuesta seleccionada por pregunta.                                   |        P1 | FR-SIM-016         | Persistencia automática.                     |
| FR-ATT-004 | El sistema debe permitir marcar pregunta para revisión.                                        |        P1 | FR-SIM-004         | Marcadores visibles en navegación.           |
| FR-ATT-005 | El sistema debe permitir finalizar intento.                                                    |        P1 | FR-SIM-018         | Estado pasa a completed y calcula resultado. |
| FR-ATT-006 | El sistema debe registrar preguntas omitidas.                                                  |        P1 | FR-REP-003         | Omitidas aparecen en reporte.                |
| FR-ATT-007 | El sistema debe registrar tiempo total del intento.                                            |        P1 | FR-REP-010         | Reporte muestra duración.                    |
| FR-ATT-008 | El sistema debe registrar tiempo por pregunta cuando sea posible.                              |        P2 | FR-QBK-006         | Reporte muestra preguntas lentas.            |
| FR-ATT-009 | El sistema debe finalizar automáticamente al expirar tiempo si la configuración lo exige.      |        P1 | FR-SIM-006         | Estado completed/expired.                    |
| FR-ATT-010 | El sistema debe permitir abandonar intento con confirmación.                                   |        P2 | FR-SIM-016         | Estado abandoned si usuario confirma.        |
| FR-ATT-011 | El sistema debe impedir modificar intento finalizado.                                          |        P1 | FR-AUD-001         | Respuestas quedan inmutables.                |
| FR-ATT-012 | El sistema debe permitir reintentar si entitlement y reglas lo permiten.                       |        P1 | FR-SIM-009         | Nuevo intento separado.                      |
| FR-ATT-013 | El sistema debe permitir reintentar solo fallos.                                               |        P2 | FR-REP-011         | Genera simulador temporal de incorrectas.    |
| FR-ATT-014 | El sistema debe aplicar accesibilidad en navegación de preguntas.                              |        P1 | FR-ACC-001         | Uso por teclado y lector básico.             |
| FR-ATT-015 | El sistema debe proteger endpoint de respuestas para que un usuario no acceda intentos ajenos. |        P0 | FR-SEC-002         | Pruebas de autorización pasan.               |

---

## 9.12. Scoring y reportes de práctica

| ID         | Requisito                                                                                  | Prioridad | Depende / Relación | Criterios de aceptación                            |
| ---------- | ------------------------------------------------------------------------------------------ | --------: | ------------------ | -------------------------------------------------- |
| FR-REP-001 | El sistema debe generar reporte al finalizar intento.                                      |        P1 | FR-ATT-005         | Reporte disponible inmediatamente.                 |
| FR-REP-002 | El reporte debe mostrar etiqueta “resultado de práctica no oficial”.                       |        P0 | BR-004             | Texto visible en header del reporte.               |
| FR-REP-003 | El reporte debe mostrar correctas, incorrectas y omitidas.                                 |        P1 | FR-ATT-006         | Totales coinciden con respuestas.                  |
| FR-REP-004 | El reporte no debe usar categorías oficiales de desempeño.                                 |        P0 | BR-031             | No aparecen “Excelente”, “Satisfactorio”, etc.     |
| FR-REP-005 | El reporte debe usar etiquetas internas de preparación.                                    |        P1 | BR-032             | Umbrales configurables por admin.                  |
| FR-REP-006 | El reporte debe mostrar resultado por dimensión.                                           |        P1 | FR-MDL-001         | D1–D4 separadas.                                   |
| FR-REP-007 | El reporte debe mostrar resultado por tema/subtema.                                        |        P1 | FR-MDL-006         | Agrupación por taxonomía.                          |
| FR-REP-008 | El reporte debe mostrar indicadores/competencias internas si existen.                      |        P2 | FR-QBK-017         | Visible solo si metadata completa.                 |
| FR-REP-009 | El reporte debe mostrar dificultad con mayor error.                                        |        P2 | FR-QBK-005         | Tabla o card.                                      |
| FR-REP-010 | El reporte debe mostrar tiempo total y tiempo promedio.                                    |        P1 | FR-ATT-007         | Comparación contra tiempo objetivo si configurado. |
| FR-REP-011 | El reporte debe listar fallos críticos.                                                    |        P1 | FR-QBK-008         | Incorrectas con explicación.                       |
| FR-REP-012 | El reporte debe recomendar recursos según fallos.                                          |        P1 | FR-CNT-007         | Recomendaciones por dimensión/tema.                |
| FR-REP-013 | El reporte debe permitir filtrar revisión por incorrectas/omitidas/marcadas.               |        P2 | FR-ATT-004         | Filtro operativo.                                  |
| FR-REP-014 | El reporte debe permitir guardar o compartir enlace privado.                               |        P3 | FR-SEC-002         | Link requiere sesión.                              |
| FR-REP-015 | El reporte debe alimentar progreso global del usuario.                                     |        P1 | FR-APP-002         | Dashboard actualiza métricas.                      |
| FR-REP-016 | El sistema debe recalcular reportes si se corrige un ítem, sin alterar evidencia original. |        P3 | FR-QBK-016         | Mantiene score original y score recalculado.       |
| FR-REP-017 | El sistema debe permitir exportar reporte en PDF.                                          |        P2 | FR-REP-001         | PDF incluye disclaimer.                            |
| FR-REP-018 | El sistema debe mostrar tendencia de resultados por dimensión.                             |        P2 | FR-ANA-006         | Gráfica por intentos.                              |
| FR-REP-019 | El sistema debe ocultar explicaciones detalladas si el plan no las incluye.                |        P1 | FR-ENT-004         | Paywall parcial.                                   |
| FR-REP-020 | El sistema debe impedir que el reporte sea indexado por buscadores.                        |        P0 | FR-SEC-004         | Header/meta noindex y auth requerida.              |

---

## 9.13. Ruta de estudio y dashboard docente

| ID          | Requisito                                                          | Prioridad | Depende / Relación     | Criterios de aceptación                             |
| ----------- | ------------------------------------------------------------------ | --------: | ---------------------- | --------------------------------------------------- |
| FR-APP-001  | El sistema debe mostrar dashboard docente posterior al onboarding. |        P1 | FR-ONB-010             | Dashboard carga métricas y CTA.                     |
| FR-APP-002  | El dashboard debe mostrar progreso global de preparación.          |        P1 | FR-REP-015             | Porcentaje calculado desde actividad.               |
| FR-APP-003  | El dashboard debe mostrar progreso por dimensión.                  |        P1 | FR-REP-006             | Cards D1–D4 con estado.                             |
| FR-APP-004  | El dashboard debe mostrar cursos en progreso.                      |        P2 | FR-CRS-005             | Lista con continuar.                                |
| FR-APP-005  | El dashboard debe mostrar simuladores recientes.                   |        P1 | FR-ATT-001             | Últimos intentos con score.                         |
| FR-APP-006  | El dashboard debe mostrar recomendación de siguiente acción.       |        P1 | FR-PLAN-001            | Basada en onboarding e intentos.                    |
| FR-APP-007  | El dashboard debe mostrar plan activo y acceso.                    |        P1 | FR-ENT-002             | Badge Free/Especialidad/Pro.                        |
| FR-APP-008  | El dashboard debe mostrar upgrade contextual.                      |        P1 | FR-COM-004             | Solo si usuario no tiene Pro.                       |
| FR-APP-009  | El sistema debe mostrar recursos favoritos.                        |        P2 | FR-CNT-016             | Widget opcional.                                    |
| FR-APP-010  | El sistema debe mostrar notas privadas.                            |        P2 | FR-CNT-017             | Acceso desde recurso/perfil.                        |
| FR-APP-011  | El sistema debe mostrar calendario o agenda de estudio.            |        P3 | FR-PLAN-004            | Actividades fechadas.                               |
| FR-PLAN-001 | El sistema debe generar ruta de estudio inicial.                   |        P1 | FR-ONB-005, FR-REP-012 | Ruta prioriza dimensión/especialidad y debilidades. |
| FR-PLAN-002 | El sistema debe actualizar ruta tras cada intento.                 |        P2 | FR-REP-015             | Recomendaciones cambian según errores.              |
| FR-PLAN-003 | El sistema debe ordenar ruta por preferencia de formato.           |        P2 | FR-ONB-007             | Videos/PDF/simuladores priorizados.                 |
| FR-PLAN-004 | El sistema debe permitir marcar actividades completadas.           |        P2 | FR-APP-011             | Progreso se actualiza.                              |
| FR-PLAN-005 | El sistema debe permitir reiniciar ruta.                           |        P3 | FR-PROF-001            | Usuario puede recalcular desde perfil.              |

---

## 9.14. Pricing, comercio y planes

| ID         | Requisito                                                                                 | Prioridad | Depende / Relación | Criterios de aceptación                 |
| ---------- | ----------------------------------------------------------------------------------------- | --------: | ------------------ | --------------------------------------- |
| FR-COM-001 | El sistema debe soportar planes de pago único.                                            |        P1 | BR-014             | Planes no tienen renovación automática. |
| FR-COM-002 | El sistema debe soportar plan Gratis USD 0.                                               |        P1 | FR-ENT-001         | Visible en pricing.                     |
| FR-COM-003 | El sistema debe soportar plan Especialidad USD 7.99.                                      |        P1 | BR-012             | Requiere elegir especialidad.           |
| FR-COM-004 | El sistema debe soportar plan Pro 2026 USD 19.99.                                         |        P1 | BR-013             | Acceso global según disponibilidad.     |
| FR-COM-005 | El sistema debe permitir cambiar precios desde admin.                                     |        P1 | FR-ADM-COM-001     | Cambios afectan nuevas compras.         |
| FR-COM-006 | El sistema debe mostrar comparación transparente de planes.                               |        P1 | FR-PUB-014         | Tabla indica incluidos/no incluidos.    |
| FR-COM-007 | El sistema debe indicar “pago único, sin renovación automática”.                          |        P1 | BR-014             | Visible en pricing y checkout.          |
| FR-COM-008 | El sistema debe mostrar impuestos, comisiones o aclaración “impuestos según corresponda”. |        P1 | FR-LEG-009         | Texto configurable.                     |
| FR-COM-009 | El sistema debe preservar precio pagado en orden histórica.                               |        P1 | BR-028             | Orden almacena monto y moneda.          |
| FR-COM-010 | El sistema debe mostrar política de reembolso antes de pago.                              |        P1 | FR-LEG-010         | Checkbox o link visible.                |
| FR-COM-011 | El sistema debe permitir cupones.                                                         |        P2 | FR-ADM-COM-004     | Descuento aplicado y auditado.          |
| FR-COM-012 | El sistema debe permitir becas/accesos manuales.                                          |        P2 | FR-ENT-005         | Admin asigna sin pago.                  |
| FR-COM-013 | El sistema debe permitir ocultar planes.                                                  |        P2 | FR-ADM-COM-001     | Plan inactivo no aparece.               |
| FR-COM-014 | El sistema debe permitir definir vigencia por temporada.                                  |        P2 | FR-ENT-006         | Fecha inicio/fin configurable.          |
| FR-COM-015 | El sistema debe mostrar resumen de compra.                                                |        P1 | FR-PAY-001         | Plan, precio, acceso, método y legal.   |

---

## 9.15. Checkout y pagos

| ID         | Requisito                                                                   | Prioridad | Depende / Relación | Criterios de aceptación                             |
| ---------- | --------------------------------------------------------------------------- | --------: | ------------------ | --------------------------------------------------- |
| FR-PAY-001 | El sistema debe crear orden al iniciar checkout.                            |        P1 | FR-COM-015         | Orden tiene estado pending.                         |
| FR-PAY-002 | El sistema debe permitir método transferencia bancaria.                     |        P1 | BR-015             | Muestra instrucciones configurables.                |
| FR-PAY-003 | El sistema debe permitir subir comprobante.                                 |        P1 | FR-PAY-002         | Archivo validado por tipo/tamaño.                   |
| FR-PAY-004 | El sistema debe permitir ingresar referencia de transferencia.              |        P1 | FR-PAY-002         | Campo opcional/configurable.                        |
| FR-PAY-005 | El sistema debe marcar orden como pending_review al subir comprobante.      |        P1 | FR-PAY-003         | Admin ve en cola de revisión.                       |
| FR-PAY-006 | El sistema debe permitir aprobar transferencia manualmente.                 |        P1 | BR-015             | Al aprobar, se crea entitlement.                    |
| FR-PAY-007 | El sistema debe permitir rechazar transferencia con motivo.                 |        P1 | FR-PAY-005         | Usuario recibe estado y motivo.                     |
| FR-PAY-008 | El sistema debe permitir solicitar nuevo comprobante.                       |        P1 | FR-PAY-007         | Orden vuelve a waiting_user_action.                 |
| FR-PAY-009 | El sistema debe registrar datos de facturación si usuario solicita factura. |        P2 | FR-COM-008         | Identificación, razón social, dirección, celular.   |
| FR-PAY-010 | El sistema debe permitir descargar recibo interno no tributario.            |        P2 | FR-PAY-006         | Recibo incluye disclaimer si no es factura oficial. |
| FR-PAY-011 | El sistema debe registrar proveedor externo de pago.                        |        P2 | ACT-010            | Orden almacena provider y transaction id.           |
| FR-PAY-012 | El sistema debe activar acceso automático con webhook verificado.           |        P2 | FR-PAY-011         | Firma/verificación válida.                          |
| FR-PAY-013 | El sistema debe soportar Payphone como proveedor futuro.                    |        P2 | FR-PAY-011         | Configurable, no hardcoded.                         |
| FR-PAY-014 | El sistema debe soportar PayPal como proveedor futuro.                      |        P3 | FR-PAY-011         | Configurable, no hardcoded.                         |
| FR-PAY-015 | El sistema debe mostrar historial de pagos al usuario.                      |        P1 | FR-PROF-003        | Lista estados y plan.                               |
| FR-PAY-016 | El sistema debe impedir doble activación de una misma orden.                |        P0 | FR-AUD-001         | Idempotencia por order id/provider id.              |
| FR-PAY-017 | El sistema debe auditar aprobación/rechazo manual.                          |        P0 | FR-AUD-001         | Actor, fecha, motivo.                               |
| FR-PAY-018 | El sistema debe permitir anular orden pendiente.                            |        P2 | FR-PAY-001         | Usuario/admin puede cancelar si no pagó.            |
| FR-PAY-019 | El sistema debe enviar confirmación de activación.                          |        P1 | FR-NOT-003         | Email o notificación in-app.                        |
| FR-PAY-020 | El sistema debe mostrar estado de pago en dashboard.                        |        P1 | FR-APP-007         | Pendiente/aprobado/rechazado.                       |

---

## 9.16. Panel administrativo

### 9.16.1. Admin dashboard

| ID              | Requisito                                             | Prioridad | Depende / Relación | Criterios de aceptación  |
| --------------- | ----------------------------------------------------- | --------: | ------------------ | ------------------------ |
| FR-ADM-DASH-001 | El admin dashboard debe mostrar usuarios registrados. |        P1 | FR-ANA-001         | KPI con total y periodo. |
| FR-ADM-DASH-002 | Debe mostrar usuarios activos.                        |        P1 | FR-ANA-001         | DAU/WAU básico.          |
| FR-ADM-DASH-003 | Debe mostrar conversión free → pago.                  |        P2 | FR-PAY-006         | Métrica por periodo.     |
| FR-ADM-DASH-004 | Debe mostrar simuladores completados.                 |        P1 | FR-ATT-005         | Conteo total/periodo.    |
| FR-ADM-DASH-005 | Debe mostrar ítems con mayor error.                   |        P2 | FR-QBK-015         | Tabla top.               |
| FR-ADM-DASH-006 | Debe mostrar recursos más vistos.                     |        P2 | FR-CNT-015         | Tabla top.               |
| FR-ADM-DASH-007 | Debe mostrar pagos pendientes.                        |        P1 | FR-PAY-005         | Cola de revisión.        |
| FR-ADM-DASH-008 | Debe mostrar contenido que requiere revisión.         |        P1 | FR-CNT-012         | Lista priorizada.        |

### 9.16.2. Gestión de contenidos

| ID             | Requisito                                                   | Prioridad | Depende / Relación | Criterios de aceptación         |
| -------------- | ----------------------------------------------------------- | --------: | ------------------ | ------------------------------- |
| FR-ADM-CNT-001 | Admin debe crear/editar/eliminar lógico recursos.           |        P1 | FR-CNT             | CRUD con validaciones.          |
| FR-ADM-CNT-002 | Admin debe publicar/archivar recursos.                      |        P1 | FR-CNT-005         | Cambios auditados.              |
| FR-ADM-CNT-003 | Admin debe gestionar cursos, módulos y lecciones.           |        P1 | FR-CRS             | CRUD completo.                  |
| FR-ADM-CNT-004 | Admin debe previsualizar recurso como usuario free/premium. |        P2 | FR-ENT-004         | Preview respeta paywall.        |
| FR-ADM-CNT-005 | Admin debe cargar archivos con validación.                  |        P1 | FR-CNT-001         | Tipos permitidos configurables. |
| FR-ADM-CNT-006 | Admin debe gestionar tags y taxonomía.                      |        P1 | FR-MDL-006         | Tags reutilizables.             |
| FR-ADM-CNT-007 | Admin debe ver historial de versiones.                      |        P2 | FR-CNT-014         | Diff o lista de cambios.        |

### 9.16.3. Banco de ítems y simuladores

| ID             | Requisito                                              | Prioridad | Depende / Relación | Criterios de aceptación             |
| -------------- | ------------------------------------------------------ | --------: | ------------------ | ----------------------------------- |
| FR-ADM-QBK-001 | Admin debe gestionar banco de ítems.                   |        P1 | FR-QBK             | CRUD con filtros.                   |
| FR-ADM-QBK-002 | Revisor debe aprobar/rechazar ítems.                   |        P1 | FR-QBK-010         | Estado cambia con comentario.       |
| FR-ADM-QBK-003 | Admin debe importar ítems por archivo.                 |        P2 | FR-QBK-011         | Resultado de importación detallado. |
| FR-ADM-QBK-004 | Admin debe consultar reportes de errores de ítems.     |        P2 | FR-QBK-014         | Bandeja de reportes.                |
| FR-ADM-SIM-001 | Admin debe crear simuladores.                          |        P1 | FR-SIM-007         | Formulario con configuración.       |
| FR-ADM-SIM-002 | Admin debe publicar/archivar simuladores.              |        P1 | FR-SIM-010         | Versionado obligatorio.             |
| FR-ADM-SIM-003 | Admin debe configurar acceso free/premium.             |        P1 | FR-ENT-004         | Paywall aplicado.                   |
| FR-ADM-SIM-004 | Admin debe configurar timer, modo y reglas de intento. |        P1 | FR-SIM-006         | Validación al iniciar.              |
| FR-ADM-SIM-005 | Admin debe previsualizar simulador.                    |        P1 | FR-SIM-004         | Preview no crea intento real.       |

### 9.16.4. Gestión comercial

| ID             | Requisito                                             | Prioridad | Depende / Relación | Criterios de aceptación            |
| -------------- | ----------------------------------------------------- | --------: | ------------------ | ---------------------------------- |
| FR-ADM-COM-001 | Admin comercial debe gestionar planes y precios.      |        P1 | FR-COM-005         | Crear/editar/desactivar.           |
| FR-ADM-COM-002 | Admin comercial debe gestionar beneficios por plan.   |        P1 | FR-COM-006         | Pricing se actualiza.              |
| FR-ADM-COM-003 | Admin comercial debe gestionar vigencias.             |        P2 | FR-COM-014         | Temporada configurable.            |
| FR-ADM-COM-004 | Admin comercial debe gestionar cupones.               |        P2 | FR-COM-011         | Código, descuento, vigencia, usos. |
| FR-ADM-COM-005 | Admin comercial debe ver órdenes y pagos.             |        P1 | FR-PAY             | Filtros por estado/método/fecha.   |
| FR-ADM-COM-006 | Admin comercial debe aprobar/rechazar transferencias. |        P1 | FR-PAY-006         | Motivo obligatorio en rechazo.     |

### 9.16.5. Usuarios, soporte y roles

| ID             | Requisito                                      | Prioridad | Depende / Relación | Criterios de aceptación       |
| -------------- | ---------------------------------------------- | --------: | ------------------ | ----------------------------- |
| FR-ADM-USR-001 | Admin debe consultar usuarios.                 |        P1 | FR-AUTH            | Tabla con filtros.            |
| FR-ADM-USR-002 | Admin debe ver perfil docente.                 |        P1 | FR-PROF            | Vista lectura.                |
| FR-ADM-USR-003 | Admin debe ver plan/entitlements.              |        P1 | FR-ENT             | Lista accesos.                |
| FR-ADM-USR-004 | Admin debe ver intentos del usuario.           |        P2 | FR-ATT             | Lista reportes.               |
| FR-ADM-USR-005 | Admin debe ver historial de pagos del usuario. |        P1 | FR-PAY             | Tabla por usuario.            |
| FR-ADM-USR-006 | Super Admin debe gestionar roles.              |        P1 | FR-AUTH-013        | Asigna/remueve roles.         |
| FR-ADM-USR-007 | Admin debe suspender cuenta.                   |        P2 | FR-SEC-003         | Usuario suspendido no accede. |
| FR-ADM-USR-008 | Admin debe reactivar cuenta.                   |        P2 | FR-ADM-USR-007     | Acción auditada.              |
| FR-ADM-USR-009 | Admin debe responder solicitudes de soporte.   |        P2 | FR-SUP-001         | Ticket actualizable.          |
| FR-ADM-USR-010 | Admin debe conceder/revocar acceso manual.     |        P1 | FR-ENT-005         | Motivo requerido.             |

### 9.16.6. Legal y auditoría

| ID               | Requisito                                                | Prioridad | Depende / Relación     | Criterios de aceptación             |
| ---------------- | -------------------------------------------------------- | --------: | ---------------------- | ----------------------------------- |
| FR-ADM-LEGAL-001 | Super Admin debe crear versiones de disclaimer.          |        P0 | FR-LEG-002             | Nueva versión puede publicarse.     |
| FR-ADM-LEGAL-002 | Super Admin debe crear versiones de términos.            |        P0 | FR-LEG-009             | Versionado.                         |
| FR-ADM-LEGAL-003 | Super Admin debe crear versiones de privacidad.          |        P0 | FR-LEG-008             | Versionado.                         |
| FR-ADM-LEGAL-004 | Super Admin debe marcar versión legal como obligatoria.  |        P0 | FR-LEG-005             | Usuarios deben reaceptar.           |
| FR-ADM-LEGAL-005 | Admin debe consultar aceptaciones legales por usuario.   |        P0 | FR-LEG-014             | Evidencia disponible.               |
| FR-ADM-LEGAL-006 | Admin debe exportar aceptaciones legales.                |        P1 | FR-LEG-014             | CSV/PDF.                            |
| FR-ADM-LEGAL-007 | Admin debe gestionar lista de claims prohibidos.         |        P0 | BR-005                 | Validador usa esta lista.           |
| FR-ADM-LEGAL-008 | Sistema debe bloquear publicación con claims prohibidos. |        P0 | FR-CNT-013, FR-QBK-013 | Publicación falla con mensaje.      |
| FR-ADM-AUD-001   | Admin debe consultar audit logs.                         |        P0 | FR-AUD-001             | Filtros por actor, entidad, acción. |
| FR-ADM-AUD-002   | Audit logs no deben ser editables desde UI.              |        P0 | FR-AUD-001             | Solo lectura.                       |

---

## 9.17. Notificaciones y soporte

| ID         | Requisito                                                                        | Prioridad | Depende / Relación | Criterios de aceptación                                              |
| ---------- | -------------------------------------------------------------------------------- | --------: | ------------------ | -------------------------------------------------------------------- |
| FR-NOT-001 | El sistema debe enviar email de bienvenida.                                      |        P2 | FR-AUTH-005        | Solo si usuario consiente comunicaciones transaccionales necesarias. |
| FR-NOT-002 | El sistema debe enviar confirmación de pago recibido.                            |        P1 | FR-PAY-003         | Email/in-app al subir comprobante.                                   |
| FR-NOT-003 | El sistema debe enviar confirmación de acceso activado.                          |        P1 | FR-PAY-019         | Usuario recibe plan activo.                                          |
| FR-NOT-004 | El sistema debe enviar notificación de pago rechazado.                           |        P1 | FR-PAY-007         | Incluye motivo y acción siguiente.                                   |
| FR-NOT-005 | El sistema debe enviar recordatorio de contenido pendiente si usuario lo acepta. |        P3 | FR-LEG-006         | Solo marketing/engagement consentido.                                |
| FR-NOT-006 | El sistema debe mostrar centro de notificaciones in-app.                         |        P2 | FR-NOT-002         | Lista eventos relevantes.                                            |
| FR-SUP-001 | El sistema debe permitir crear ticket de soporte.                                |        P2 | ACT-008            | Usuario selecciona categoría y describe problema.                    |
| FR-SUP-002 | El sistema debe permitir adjuntar evidencia a ticket.                            |        P2 | FR-SUP-001         | Archivos validados.                                                  |
| FR-SUP-003 | Soporte debe responder ticket.                                                   |        P2 | FR-ADM-USR-009     | Estado abierto/en proceso/cerrado.                                   |
| FR-SUP-004 | El sistema debe vincular ticket con usuario, pago o recurso.                     |        P2 | FR-SUP-001         | Referencias internas.                                                |

---

## 9.18. Analítica, eventos y auditoría

| ID         | Requisito                                                                                  | Prioridad | Depende / Relación     | Criterios de aceptación                           |
| ---------- | ------------------------------------------------------------------------------------------ | --------: | ---------------------- | ------------------------------------------------- |
| FR-ANA-001 | El sistema debe registrar eventos funcionales de uso.                                      |        P1 | FR-APP                 | Eventos con usuario, timestamp y metadata mínima. |
| FR-ANA-002 | Registrar `landing_cta_clicked`.                                                           |        P2 | FR-PUB-010             | Evento generado.                                  |
| FR-ANA-003 | Registrar `disclaimer_accepted`.                                                           |        P0 | FR-LEG-004             | Evento coincide con consentimiento.               |
| FR-ANA-004 | Registrar `onboarding_completed`.                                                          |        P1 | FR-ONB-010             | Evento generado.                                  |
| FR-ANA-005 | Registrar `simulator_started` y `simulator_completed`.                                     |        P1 | FR-ATT                 | Eventos generados.                                |
| FR-ANA-006 | Registrar `resource_opened`, `course_lesson_completed`, `report_viewed`.                   |        P2 | FR-CNT, FR-CRS, FR-REP | Eventos consultables.                             |
| FR-ANA-007 | Registrar `checkout_started`, `payment_submitted`, `payment_approved`, `payment_rejected`. |        P1 | FR-PAY                 | Métricas comerciales.                             |
| FR-AUD-001 | El sistema debe registrar auditoría de acciones críticas.                                  |        P0 | BR-027                 | Actor, acción, entidad, antes/después, timestamp. |
| FR-AUD-002 | Auditar cambios de contenido publicado.                                                    |        P1 | FR-CNT                 | Logs visibles.                                    |
| FR-AUD-003 | Auditar cambios de ítems y simuladores.                                                    |        P1 | FR-QBK, FR-SIM         | Logs visibles.                                    |
| FR-AUD-004 | Auditar cambios de precios y planes.                                                       |        P1 | FR-COM                 | Logs visibles.                                    |
| FR-AUD-005 | Auditar cambios de roles.                                                                  |        P0 | FR-AUTH-013            | Logs visibles.                                    |
| FR-AUD-006 | Auditar accesos manuales y revocaciones.                                                   |        P0 | FR-ENT-008             | Logs visibles.                                    |
| FR-AUD-007 | Auditar exportaciones de datos personales.                                                 |        P0 | FR-PRI-005             | Logs visibles.                                    |

---

## 9.19. Privacidad y gestión de datos personales

| ID         | Requisito                                                                                | Prioridad | Depende / Relación | Criterios de aceptación                        |
| ---------- | ---------------------------------------------------------------------------------------- | --------: | ------------------ | ---------------------------------------------- |
| FR-PRI-001 | El sistema debe mostrar política de privacidad antes de registro.                        |        P0 | FR-LEG-008         | Link visible en modal legal.                   |
| FR-PRI-002 | El sistema debe registrar finalidades del tratamiento aceptadas.                         |        P0 | FR-LEG-004         | Consentimiento incluye finalidad.              |
| FR-PRI-003 | El sistema debe permitir al usuario ver datos de perfil.                                 |        P0 | FR-PROF            | Perfil visible.                                |
| FR-PRI-004 | El sistema debe permitir rectificar datos de perfil.                                     |        P0 | FR-PROF-001        | Usuario edita campos.                          |
| FR-PRI-005 | El sistema debe permitir exportar datos personales del usuario.                          |        P1 | FR-LEG-014         | Export JSON/CSV/PDF.                           |
| FR-PRI-006 | El sistema debe permitir solicitar eliminación de cuenta.                                |        P0 | BR-025             | Solicitud registrada.                          |
| FR-PRI-007 | El sistema debe ejecutar eliminación/anominización según política.                       |        P1 | FR-PRI-006         | Datos no esenciales eliminados o anonimizados. |
| FR-PRI-008 | El sistema debe permitir retirar consentimiento no esencial.                             |        P0 | BR-026             | Marketing/notificaciones opcionales cesan.     |
| FR-PRI-009 | El sistema debe impedir procesamiento de marketing sin consentimiento.                   |        P0 | FR-LEG-006         | No se envían campañas.                         |
| FR-PRI-010 | El sistema debe registrar proveedores encargados de tratamiento.                         |        P1 | FR-LEG-008         | Política lista proveedores.                    |
| FR-PRI-011 | El sistema debe registrar base legal/finalidad para SSO, pagos, simuladores y analytics. |        P1 | FR-LEG-008         | Matriz de tratamiento disponible.              |
| FR-PRI-012 | El sistema debe permitir configurar retención de datos.                                  |        P2 | FR-PRI-007         | Admin legal configura plazos.                  |
| FR-PRI-013 | El sistema debe bloquear acceso admin innecesario a datos sensibles.                     |        P0 | FR-AUTH-012        | RBAC limita campos.                            |
| FR-PRI-014 | El sistema debe registrar incidentes de privacidad.                                      |        P2 | FR-SUP             | Ticket/caso interno auditable.                 |

---

## 9.20. Seguridad funcional y control de abuso

| ID         | Requisito                                                                             | Prioridad | Depende / Relación     | Criterios de aceptación                              |
| ---------- | ------------------------------------------------------------------------------------- | --------: | ---------------------- | ---------------------------------------------------- |
| FR-SEC-001 | El sistema debe proteger rutas privadas por sesión válida.                            |        P0 | FR-AUTH-009            | Acceso sin sesión redirige a login.                  |
| FR-SEC-002 | El sistema debe aplicar autorización por propietario de recurso.                      |        P0 | FR-ATT-015             | Usuario no ve reportes/intentos ajenos.              |
| FR-SEC-003 | El sistema debe permitir suspender cuenta por abuso/fraude.                           |        P2 | FR-ADM-USR-007         | Usuario suspendido recibe mensaje.                   |
| FR-SEC-004 | El sistema debe impedir indexación de páginas privadas.                               |        P0 | FR-REP-020             | noindex/auth.                                        |
| FR-SEC-005 | El sistema debe validar archivos subidos.                                             |        P0 | FR-PAY-003, FR-CNT-005 | Tamaño/tipo/extensión.                               |
| FR-SEC-006 | El sistema debe registrar intentos fallidos de acceso admin.                          |        P1 | FR-AUD-001             | Evento de seguridad.                                 |
| FR-SEC-007 | El sistema debe aplicar rate limiting a endpoints críticos.                           |        P1 | FR-AUTH, FR-PAY        | Límite configurable.                                 |
| FR-SEC-008 | El sistema debe evitar exposición de respuestas correctas antes de finalizar intento. |        P0 | FR-SIM                 | API no entrega correctas al cliente durante intento. |
| FR-SEC-009 | El sistema debe evitar manipulación client-side de puntajes.                          |        P0 | FR-REP                 | Scoring server-side.                                 |
| FR-SEC-010 | El sistema debe validar server-side todos los permisos premium.                       |        P0 | FR-ENT                 | No depender solo de UI.                              |

---

## 9.21. Accesibilidad y usabilidad funcional

| ID         | Requisito                                                       | Prioridad | Depende / Relación      | Criterios de aceptación                 |
| ---------- | --------------------------------------------------------------- | --------: | ----------------------- | --------------------------------------- |
| FR-ACC-001 | El sistema debe permitir navegación por teclado en simuladores. |        P1 | FR-ATT-014              | Tab/Enter/Escape operativos.            |
| FR-ACC-002 | El sistema debe mostrar labels visibles en formularios.         |        P1 | FR-AUTH, FR-ONB, FR-PAY | Inputs accesibles.                      |
| FR-ACC-003 | El sistema debe indicar errores de formulario con texto claro.  |        P1 | Todos formularios       | Mensajes asociados al campo.            |
| FR-ACC-004 | El sistema no debe depender únicamente del color para estados.  |        P1 | FR-APP, FR-REP          | Usa texto/icono/badge.                  |
| FR-ACC-005 | El sistema debe soportar mobile-first en flujos críticos.       |        P1 | FR-PUB, FR-SIM, FR-PAY  | 390px sin bloqueo funcional.            |
| FR-ACC-006 | El sistema debe ofrecer lectura cómoda en preguntas largas.     |        P1 | FR-SIM                  | Tamaño mínimo, espaciado, scroll claro. |
| FR-ACC-007 | El sistema debe tener alt text para imágenes relevantes.        |        P1 | FR-CNT, FR-QBK          | Campo requerido si imagen.              |
| FR-ACC-008 | El sistema debe mostrar foco visible.                           |        P1 | UI global               | QA accesibilidad pasa.                  |

---

## 10. Casos de uso

### UC-001 — Invitado acepta disclaimer e inicia sesión con SSO

| Campo           | Detalle                                                                                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-001 Invitado                                                                                                                                                                                                                                                              |
| Objetivo        | Crear cuenta o iniciar sesión.                                                                                                                                                                                                                                                |
| Precondición    | Usuario no autenticado.                                                                                                                                                                                                                                                       |
| Flujo principal | 1. Usuario presiona CTA. 2. Sistema muestra disclaimer obligatorio. 3. Usuario marca checkboxes. 4. Sistema habilita Google/Facebook. 5. Usuario selecciona proveedor. 6. Proveedor autentica. 7. Sistema crea/recupera cuenta. 8. Sistema redirige a onboarding o dashboard. |
| Alternos        | A1: Usuario cancela → vuelve a landing. A2: SSO falla → mensaje y reintento. A3: nueva versión legal → reaceptación obligatoria.                                                                                                                                              |
| Postcondición   | Sesión activa y consentimiento registrado.                                                                                                                                                                                                                                    |
| Requisitos      | FR-LEG-003, FR-LEG-004, FR-AUTH-001..015                                                                                                                                                                                                                                      |

---

### UC-002 — Docente completa onboarding

| Campo           | Detalle                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-002 Docente Free                                                                                                                                                   |
| Objetivo        | Configurar perfil inicial.                                                                                                                                             |
| Precondición    | Sesión activa, onboarding incompleto.                                                                                                                                  |
| Flujo principal | 1. Sistema muestra wizard. 2. Usuario selecciona fase. 3. Selecciona especialidad/nivel. 4. Indica disponibilidad y objetivo. 5. Guarda. 6. Sistema crea ruta inicial. |
| Alternos        | A1: Usuario no sabe fase → sistema permite continuar con “No sé”. A2: Especialidad próximamente → sistema permite seguimiento y recursos generales.                    |
| Postcondición   | Perfil mínimo completo, dashboard disponible.                                                                                                                          |
| Requisitos      | FR-ONB-001..010, FR-PLAN-001                                                                                                                                           |

---

### UC-003 — Docente realiza diagnóstico gratuito

| Campo           | Detalle                                                                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-002 Docente Free                                                                                                                                                                                      |
| Objetivo        | Obtener diagnóstico inicial de preparación.                                                                                                                                                               |
| Precondición    | Onboarding completo.                                                                                                                                                                                      |
| Flujo principal | 1. Usuario presiona “Diagnóstico gratuito”. 2. Sistema muestra alcance y disclaimer. 3. Usuario inicia. 4. Responde preguntas. 5. Finaliza. 6. Sistema genera reporte básico. 7. Sistema recomienda ruta. |
| Alternos        | A1: Usuario abandona → intento queda abandonado o en progreso. A2: Tiempo expira → sistema finaliza.                                                                                                      |
| Postcondición   | Reporte no oficial generado.                                                                                                                                                                              |
| Requisitos      | FR-SIM-003, FR-ATT, FR-REP                                                                                                                                                                                |

---

### UC-004 — Docente compra plan Pro 2026

| Campo           | Detalle                                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-002 Docente Free                                                                                                                                                                                                                            |
| Objetivo        | Desbloquear acceso Pro.                                                                                                                                                                                                                         |
| Precondición    | Usuario autenticado.                                                                                                                                                                                                                            |
| Flujo principal | 1. Usuario abre pricing. 2. Selecciona Pro 2026. 3. Sistema muestra resumen, política de reembolso y disclaimer. 4. Usuario selecciona método. 5. Crea orden. 6. Completa pago. 7. Sistema activa acceso automática o manualmente según método. |
| Alternos        | A1: Transferencia → sube comprobante y queda pendiente. A2: Pago rechazado → sistema informa motivo.                                                                                                                                            |
| Postcondición   | Entitlement Pro activo si pago aprobado.                                                                                                                                                                                                        |
| Requisitos      | FR-COM, FR-PAY, FR-ENT                                                                                                                                                                                                                          |

---

### UC-005 — Admin aprueba pago por transferencia

| Campo           | Detalle                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-006 Admin Comercial                                                                                                                             |
| Objetivo        | Validar pago manual y activar acceso.                                                                                                               |
| Precondición    | Orden en estado pending_review.                                                                                                                     |
| Flujo principal | 1. Admin abre cola de pagos. 2. Revisa comprobante. 3. Aprueba. 4. Sistema crea entitlement. 5. Sistema notifica usuario. 6. Sistema audita acción. |
| Alternos        | A1: Rechaza con motivo. A2: Solicita nuevo comprobante.                                                                                             |
| Postcondición   | Orden approved/rejected/waiting_user_action.                                                                                                        |
| Requisitos      | FR-PAY-005..020, FR-AUD-004                                                                                                                         |

---

### UC-006 — Docente premium ejecuta simulador cronometrado

| Campo           | Detalle                                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-003 Docente Premium                                                                                                                                                                            |
| Objetivo        | Practicar en condiciones de tiempo.                                                                                                                                                                |
| Precondición    | Entitlement válido y simulador publicado.                                                                                                                                                          |
| Flujo principal | 1. Usuario abre simulador. 2. Sistema verifica acceso. 3. Muestra pantalla previa. 4. Usuario inicia. 5. Sistema crea intento. 6. Usuario responde. 7. Timer controla tiempo. 8. Usuario finaliza. |
| Alternos        | A1: Timer expira. A2: Usuario pierde conexión y reingresa. A3: Usuario marca preguntas para revisión.                                                                                              |
| Postcondición   | Intento completado y reporte generado.                                                                                                                                                             |
| Requisitos      | FR-ENT, FR-SIM, FR-ATT, FR-REP                                                                                                                                                                     |

---

### UC-007 — Docente revisa reporte y refuerza fallos

| Campo           | Detalle                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-002/ACT-003                                                                                                                                                                                                           |
| Objetivo        | Entender errores y continuar preparación.                                                                                                                                                                                 |
| Precondición    | Intento completado.                                                                                                                                                                                                       |
| Flujo principal | 1. Usuario abre reporte. 2. Sistema muestra score no oficial. 3. Muestra dimensiones/temas débiles. 4. Lista fallos. 5. Muestra explicaciones según plan. 6. Recomienda recursos. 7. Usuario inicia refuerzo o reintento. |
| Alternos        | A1: Usuario free intenta ver explicación premium → paywall contextual.                                                                                                                                                    |
| Postcondición   | Ruta/progreso actualizados.                                                                                                                                                                                               |
| Requisitos      | FR-REP, FR-PLAN, FR-CNT, FR-ENT                                                                                                                                                                                           |

---

### UC-008 — Admin crea y publica recurso

| Campo           | Detalle                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-004 Admin Contenido                                                                                                                                                                       |
| Objetivo        | Publicar guía, PDF, video o artículo.                                                                                                                                                         |
| Precondición    | Admin autenticado.                                                                                                                                                                            |
| Flujo principal | 1. Admin crea recurso. 2. Completa metadata. 3. Asocia dimensión/especialidad. 4. Define free/premium. 5. Envía a revisión o publica. 6. Sistema valida claims prohibidos. 7. Sistema audita. |
| Alternos        | A1: Validador detecta claim prohibido → bloquea publicación.                                                                                                                                  |
| Postcondición   | Recurso publicado o en revisión.                                                                                                                                                              |
| Requisitos      | FR-CNT, FR-ADM-CNT, FR-ADM-LEGAL-008                                                                                                                                                          |

---

### UC-009 — Revisor aprueba ítem

| Campo           | Detalle                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-005 Revisor Académico                                                                                                                   |
| Objetivo        | Validar pregunta de práctica.                                                                                                               |
| Precondición    | Ítem en revisión.                                                                                                                           |
| Flujo principal | 1. Revisor abre ítem. 2. Verifica enunciado, opciones, respuesta, explicación y taxonomía. 3. Aprueba. 4. Sistema cambia estado a aprobado. |
| Alternos        | A1: Rechaza con comentario. A2: Solicita corrección.                                                                                        |
| Postcondición   | Ítem queda listo para publicación.                                                                                                          |
| Requisitos      | FR-QBK-008..010, FR-ADM-QBK-002                                                                                                             |

---

### UC-010 — Admin construye simulador

| Campo           | Detalle                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-004 / ACT-005                                                                                                                                           |
| Objetivo        | Crear simulador desde banco de ítems.                                                                                                                       |
| Precondición    | Ítems publicados disponibles.                                                                                                                               |
| Flujo principal | 1. Admin crea simulador. 2. Define dimensión/especialidad. 3. Selecciona ítems o reglas. 4. Configura timer, acceso, intentos. 5. Previsualiza. 6. Publica. |
| Alternos        | A1: No hay ítems suficientes → sistema impide publicar.                                                                                                     |
| Postcondición   | Simulador publicado con versión.                                                                                                                            |
| Requisitos      | FR-SIM, FR-ADM-SIM                                                                                                                                          |

---

### UC-011 — Usuario solicita eliminación de cuenta

| Campo           | Detalle                                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-002/ACT-003                                                                                                                                                                  |
| Objetivo        | Ejercer derecho de eliminación.                                                                                                                                                  |
| Precondición    | Sesión activa.                                                                                                                                                                   |
| Flujo principal | 1. Usuario abre perfil. 2. Solicita eliminación. 3. Sistema confirma consecuencias. 4. Usuario confirma. 5. Sistema registra solicitud. 6. Admin/sistema procesa según política. |
| Alternos        | A1: Usuario cancela. A2: Existen obligaciones legales de conservación → sistema anonimiza o retiene mínimo necesario.                                                            |
| Postcondición   | Solicitud registrada/procesada.                                                                                                                                                  |
| Requisitos      | FR-PRI-006, FR-PRI-007, FR-AUD-007                                                                                                                                               |

---

### UC-012 — Super Admin actualiza disclaimer

| Campo           | Detalle                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Actor principal | ACT-007 Super Admin                                                                                                       |
| Objetivo        | Publicar nueva versión legal.                                                                                             |
| Precondición    | Super Admin autenticado.                                                                                                  |
| Flujo principal | 1. Crea nueva versión. 2. Define si es obligatoria. 3. Publica. 4. Sistema audita. 5. Usuarios deben reaceptar al entrar. |
| Alternos        | A1: Guarda borrador.                                                                                                      |
| Postcondición   | Versión vigente.                                                                                                          |
| Requisitos      | FR-ADM-LEGAL, FR-LEG-005                                                                                                  |

---

## 11. Matriz de trazabilidad

| Objetivo                         | Requisitos clave                               | Casos de uso           |
| -------------------------------- | ---------------------------------------------- | ---------------------- |
| OBJ-001 Preparación estructurada | FR-MDL, FR-CNT, FR-CRS, FR-SIM                 | UC-002, UC-006, UC-007 |
| OBJ-002 Diagnóstico no oficial   | FR-SIM, FR-ATT, FR-REP                         | UC-003, UC-006, UC-007 |
| OBJ-003 Monetización ética       | FR-COM, FR-PAY, FR-ENT, FR-LEG                 | UC-004, UC-005         |
| OBJ-004 Gestión admin            | FR-ADM-CNT, FR-ADM-QBK, FR-ADM-SIM, FR-ADM-COM | UC-008, UC-009, UC-010 |
| OBJ-005 Legal y privacidad       | FR-LEG, FR-PRI, FR-AUD                         | UC-001, UC-011, UC-012 |
| OBJ-006 MVP escalable            | FR-ANA, FR-SEC, FR-ACC                         | Todos                  |

---

## 12. Dependencias críticas entre requisitos

| Dependencia                      | Descripción                                                     |
| -------------------------------- | --------------------------------------------------------------- |
| FR-AUTH depende de FR-LEG        | No puede existir login efectivo sin aceptación legal previa.    |
| FR-ONB depende de FR-AUTH        | Onboarding solo aplica a usuario autenticado.                   |
| FR-SIM depende de FR-QBK         | No se puede publicar simulador sin ítems publicados.            |
| FR-REP depende de FR-ATT         | No hay reporte sin intento completado o expirado.               |
| FR-ENT depende de FR-COM/FR-PAY  | Accesos premium nacen de plan aprobado o concesión manual.      |
| FR-CNT/FR-QBK dependen de FR-MDL | Recursos e ítems requieren taxonomía de dimensión/especialidad. |
| FR-PAY depende de FR-COM         | Orden requiere plan/precio vigente.                             |
| FR-ADM depende de FR-AUTH/RBAC   | Panel admin requiere sesión y rol.                              |
| FR-PRI depende de FR-AUD         | Exportaciones, eliminaciones y consentimientos deben auditarse. |
| FR-PUB depende de FR-LEG         | Páginas públicas deben mostrar disclaimers y fuentes oficiales. |

---

## 13. Requisitos de datos funcionales

| Entidad         | Campos mínimos                                                                        | Relaciones                                          |
| --------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| User            | id, email, name, avatar, provider, provider_subject, status, created_at               | Profile, Consents, Entitlements, Attempts, Payments |
| UserProfile     | user_id, phase_id, specialty_id, level, weekly_hours, goal, study_preference          | User, Specialty                                     |
| LegalDocument   | id, type, version, body, hash, status, mandatory, published_at                        | LegalAcceptance                                     |
| LegalAcceptance | user_id, document_id, accepted_at, ip, user_agent, consent_scope                      | User, LegalDocument                                 |
| Dimension       | id, code, name, description, instrument, duration, modality, status                   | Topics, Items, Resources                            |
| Specialty       | id, phase_id, name, level, status                                                     | Items, Simulators, Resources, Entitlements          |
| Topic           | id, dimension_id, parent_id, name                                                     | Items, Resources                                    |
| Resource        | id, title, type, access_level, status, version, reviewed_at, metadata                 | Dimension, Specialty, Topic                         |
| Course          | id, title, access_level, status                                                       | Modules, Lessons                                    |
| Item            | id, stem, options, correct_answer, explanation, difficulty, status, version           | Dimension, Specialty, Topic                         |
| Simulator       | id, title, type, access_level, status, version, time_limit, rules                     | Items, Attempts                                     |
| Attempt         | id, user_id, simulator_id, simulator_version, status, started_at, completed_at, score | AttemptAnswers, Report                              |
| AttemptAnswer   | attempt_id, item_id, item_version, selected_option, is_correct, time_spent, marked    | Attempt, Item                                       |
| Report          | id, attempt_id, summary, recommendations, generated_at                                | Attempt                                             |
| Plan            | id, name, price, currency, access_scope, active, valid_until                          | Orders, Entitlements                                |
| Order           | id, user_id, plan_id, amount, status, payment_method                                  | Payment                                             |
| Payment         | id, order_id, provider, status, proof_file, approved_by, approved_at                  | Order                                               |
| Entitlement     | id, user_id, scope_type, scope_id, source, valid_from, valid_until, status            | User                                                |
| AuditLog        | id, actor_id, action, entity, entity_id, before, after, created_at                    | User                                                |
| SupportTicket   | id, user_id, category, status, subject, description                                   | User, Payment/Resource optional                     |

---

## 14. Estados funcionales obligatorios

| Área        | Estados                                                                                |
| ----------- | -------------------------------------------------------------------------------------- |
| Usuario     | invited, active, onboarding_pending, suspended, deletion_requested, deleted/anonymized |
| Plan        | active, inactive, archived                                                             |
| Entitlement | active, expired, revoked, pending                                                      |
| Pago        | pending, pending_review, waiting_user_action, approved, rejected, cancelled, refunded  |
| Recurso     | draft, review, published, archived, requires_review                                    |
| Ítem        | draft, review, approved, published, archived, flagged                                  |
| Simulador   | draft, review, published, archived, insufficient_items                                 |
| Intento     | in_progress, completed, expired, abandoned                                             |
| Legal       | draft, published, active, archived                                                     |
| Ticket      | open, in_progress, waiting_user, resolved, closed                                      |

---

## 15. Reglas de validación funcional

| ID      | Validación                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------ |
| VAL-001 | No publicar recurso sin título, tipo, acceso, estado, dimensión/tema si aplica.                        |
| VAL-002 | No publicar ítem sin enunciado, opciones completas, respuesta correcta, explicación, dimensión y tema. |
| VAL-003 | No publicar simulador sin ítems suficientes.                                                           |
| VAL-004 | No iniciar simulador premium sin entitlement activo.                                                   |
| VAL-005 | No crear orden sin plan activo y precio congelado.                                                     |
| VAL-006 | No aprobar pago sin rol autorizado.                                                                    |
| VAL-007 | No activar plan Especialidad sin especialidad seleccionada.                                            |
| VAL-008 | No permitir SSO si no hay aceptación legal obligatoria.                                                |
| VAL-009 | No permitir acceso admin sin rol.                                                                      |
| VAL-010 | No permitir edición de intento finalizado.                                                             |
| VAL-011 | No permitir publicación de contenido con claims prohibidos.                                            |
| VAL-012 | No permitir envío de marketing sin consentimiento explícito.                                           |

---

## 16. Requisitos mínimos de calidad asociados al alcance funcional

| ID     | Requisito                                                           | Prioridad | Criterio                                                  |
| ------ | ------------------------------------------------------------------- | --------: | --------------------------------------------------------- |
| QR-001 | Mobile-first en landing, onboarding, checkout, simulador y reporte. |        P1 | Operativo en 390px.                                       |
| QR-002 | Accesibilidad WCAG 2.2 AA como objetivo funcional.                  |        P1 | Navegación por teclado, contraste, labels, foco.          |
| QR-003 | Server-side authorization para intentos, reportes, pagos y admin.   |        P0 | Pruebas de autorización.                                  |
| QR-004 | Scoring calculado en backend/base de datos, no confiado al cliente. |        P0 | Cliente no recibe respuestas antes de cierre.             |
| QR-005 | Auditoría inmutable para acciones críticas.                         |        P0 | Logs no editables por UI.                                 |
| QR-006 | Trazabilidad de contenido académico.                                |        P1 | Autor, revisor, versión, fecha revisión.                  |
| QR-007 | Bajo ancho de banda.                                                |        P2 | Lazy loading, PDFs optimizados, video externo/adaptativo. |
| QR-008 | Observabilidad básica.                                              |        P1 | Eventos funcionales y errores críticos.                   |
| QR-009 | Respaldo/exportación de datos críticos.                             |        P2 | Export admin o backup operativo.                          |
| QR-010 | Separación de datos públicos y privados.                            |        P0 | Noindex/auth en `/app` y reportes.                        |

---

## 17. Criterios de aceptación global del MVP

El MVP se considera funcionalmente aceptado cuando:

1. Un invitado puede leer la landing, entender que la plataforma no es oficial y acceder al flujo de registro.
2. Ningún usuario puede autenticarse sin aceptar disclaimer, términos y privacidad vigentes.
3. El registro funciona solo con Google/Facebook SSO.
4. El docente completa onboarding y obtiene un dashboard personalizado.
5. El docente free puede realizar diagnóstico limitado y acceder a recursos gratuitos.
6. El docente puede comprar plan Especialidad o Pro 2026 mediante transferencia manual.
7. Admin puede aprobar/rechazar pagos y el sistema activa/rechaza acceso correctamente.
8. Admin puede crear recursos, cursos, ítems y simuladores con estados y validaciones.
9. El docente premium puede iniciar simuladores completos y recibir reportes no oficiales.
10. El reporte muestra dimensiones, temas, fallos, explicaciones y recursos recomendados según acceso.
11. El sistema no usa lenguaje de afiliación oficial, garantía, reactivos reales o preguntas filtradas.
12. Las páginas legales están disponibles y versionadas.
13. Las acciones críticas quedan auditadas.
14. Los datos personales pueden consultarse, exportarse y eliminarse/anonimizarse según política.
15. Las páginas públicas incluyen fuentes oficiales y fecha de actualización.
16. El sistema funciona correctamente en móvil para onboarding, checkout, simulador y reporte.

---

## 18. Riesgos funcionales y mitigaciones

| Riesgo                             | Impacto                 | Mitigación funcional                                                              |
| ---------------------------------- | ----------------------- | --------------------------------------------------------------------------------- |
| Confusión con sitio oficial        | Alto/legal              | Disclaimer persistente, fuentes oficiales, prohibición de logos/claims.           |
| Uso de contenido no autorizado     | Alto/legal              | Workflow de revisión, claims prohibidos, trazabilidad de autor/fuente conceptual. |
| Promesas comerciales engañosas     | Alto/legal/reputacional | Copy aprobado, prohibición de “garantiza”, “oficial”, “reactivos reales”.         |
| Pagos manuales lentos              | Medio/conversión        | Cola admin, estados claros, notificaciones, SLA visible.                          |
| Ítems ambiguos o erróneos          | Medio/confianza         | Revisión académica, reporte de errores, métricas de dificultad/anomalías.         |
| Cambios en lineamientos INEVAL     | Alto/producto           | Taxonomía editable, cronograma editable, contenido con “requiere revisión”.       |
| Tratamiento inadecuado de datos    | Alto/legal              | Consentimiento explícito, exportación/eliminación, auditoría, minimización.       |
| Filtración de respuestas correctas | Alto/integridad         | Respuestas correctas solo backend hasta finalizar intento.                        |
| Escalabilidad de contenido         | Medio/operativo         | Estados, versionado, importación masiva, filtros admin.                           |
| Baja conversión                    | Medio/negocio           | Diagnóstico gratuito, paywall contextual, pricing claro pago único.               |

---

## 19. Backlog MVP recomendado

### Sprint funcional 1 — Base pública/legal/auth

* FR-PUB-001..015
* FR-LEG-001..015
* FR-AUTH-001..015
* FR-PRI-001..004

### Sprint funcional 2 — Modelo, onboarding y dashboard

* FR-MDL-001..014
* FR-ONB-001..010
* FR-PROF-001..005
* FR-APP-001..008
* FR-PLAN-001

### Sprint funcional 3 — Contenido y cursos

* FR-CNT-001..013
* FR-CRS-001..005
* FR-ADM-CNT-001..007

### Sprint funcional 4 — Banco de ítems y simuladores

* FR-QBK-001..010, FR-QBK-013, FR-QBK-016
* FR-SIM-001..020
* FR-ADM-QBK-001..004
* FR-ADM-SIM-001..005

### Sprint funcional 5 — Intentos, scoring y reportes

* FR-ATT-001..015
* FR-REP-001..012, FR-REP-015, FR-REP-019..020
* FR-SEC-008..010

### Sprint funcional 6 — Comercio y pagos manuales

* FR-COM-001..010, FR-COM-015
* FR-PAY-001..010, FR-PAY-015..020
* FR-ENT-001..008
* FR-ADM-COM-001..006

### Sprint funcional 7 — Admin, auditoría y analítica básica

* FR-ADM-DASH-001..008
* FR-ADM-USR-001..010
* FR-ADM-LEGAL-001..008
* FR-AUD-001..007
* FR-ANA-001..007

---

## 20. Checklist de definición de listo para desarrollo

| Categoría | Condición                                                                           |
| --------- | ----------------------------------------------------------------------------------- |
| Legal     | Disclaimer, términos, privacidad, reembolso y claims prohibidos aprobados.          |
| Dominio   | Dimensiones, fases, especialidades y cronograma cargados como datos administrables. |
| Contenido | Plantilla de metadatos para recursos, cursos, ítems y simuladores definida.         |
| UX        | Flujos landing → disclaimer → SSO → onboarding → dashboard → diagnóstico aprobados. |
| Comercial | Planes, precios, métodos de pago, estados y política de activación definidos.       |
| Admin     | Roles, permisos y acciones auditables definidos.                                    |
| Seguridad | Reglas de autorización, paywall server-side y scoring backend definidos.            |
| Datos     | Entidades mínimas, relaciones y retención de datos definidas.                       |
| QA        | Casos de uso UC-001 a UC-012 convertidos en pruebas funcionales.                    |
| Analytics | Eventos mínimos instrumentados.                                                     |

[1]: https://www.evaluacion.gob.ec/ "Instituto Nacional de Evaluación Educativa | Página oficial del Instituto Nacional de Evaluación Educativa"
[2]: https://www.evaluacion.gob.ec/ineval-desarrollo-el-piloto-de-la-evaluacion-de-desempeno-docente/ "Ineval desarrolló el piloto de la evaluación de desempeño docente | Instituto Nacional de Evaluación Educativa"
[3]: https://www.evaluacion.gob.ec/factores-asociados/ "Factores asociados | Instituto Nacional de Evaluación Educativa"
[4]: https://www.evaluacion.gob.ec/ineval-evalua-a-todos-los-docentes-del-pais/ "Ineval evalúa a todos los docentes del país | Instituto Nacional de Evaluación Educativa"
[5]: https://www.gob.ec/regulaciones/ley-organica-proteccion-datos-personales "LEY ORGÁNICA DE PROTECCIÓN DE DATOS PERSONALES | Ecuador - Guía Oficial de Trámites y Servicios"
[6]: https://evaluaciondocente.lat/ec/ "Simulador INEVAL Ecuador 2026 - Evaluación de Desempeño Docente | Entrenamiento Oficial"
