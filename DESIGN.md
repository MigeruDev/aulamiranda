---
name: PrepDocenteEC
colors:
  primary: "#172A6A"
  secondary: "#00A7B5"
  tertiary: "#FFB81C"
  neutral: "#F7F8FC"
  surface: "#FFFFFF"
  success: "#16A34A"
  warning: "#F59E0B"
  danger: "#DC2626"
  text-primary: "#111827"
  text-secondary: "#4B5563"
  border-soft: "#E5E7EB"
typography:
  h1:
    fontFamily: Manrope
    fontSize: 3rem
  h2:
    fontFamily: Manrope
    fontSize: 2.25rem
  h3:
    fontFamily: Manrope
    fontSize: 1.5rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
---

# PrepDocente EC - Design System & UI Constraints

## 1. System Role & Instructions
Act as a Lead Product Designer, UX Researcher, and Frontend Architect specialized in EdTech, ethical conversion, accessibility, and SaaS products. The goal is to design the entire web experience for an independent, private platform where Ecuadorian teachers prepare for the **Evaluación de Desempeño Docente 2026**.

## 2. Overview & Theme
Professional, sober, and academic. The UI evokes a reliable, educational, and Ecuadorian identity without copying official brands. It should communicate rigor and clarity.

The palette is rooted in a deep blue foundation, with clear semantic accents:
- **Primary (`#172A6A`):** Deep Blue for trust, academia, headlines, and core structure.
- **Secondary (`#00A7B5`):** Turquoise for informative states and secondary actions.
- **Tertiary (`#FFB81C`):** Learning Yellow for calls to action, highlights, and engagement.
- **Neutral (`#F7F8FC`):** Soft, non-distracting global background.

## 3. Context & Non-goals
PrepDocente EC is a private, independent, and non-official platform. 
- **It does NOT represent INEVAL**, the Ministry of Education, or any public entity. 
- **It does NOT** manage official inscriptions, certifications, or official results.
- **Do NOT** use logos, seals, institutional iconography, or any visual element that could confuse users into thinking this is a government portal.
- **Do NOT** use marketing claims like "official training", "real exam questions", or "guaranteed passing score". 

## 4. UI Principles & Constraints
1. **Clarity before spectacle:** Teachers must understand the platform's offer and its non-official nature within 10 seconds.
2. **Dimension-based preparation:** The navigation and study paths must map directly to the evaluation model:
   - D1: Conocimientos para la enseñanza efectiva
   - D2: Competencias socioemocionales
   - D3: Responsabilidad profesional
   - D4: Habilidades de gestión del aprendizaje
3. **Visible Progress:** Always display progress, attempts, weaknesses, and next recommended actions without categorizing them as official scores (e.g., use labels like "Needs reinforcement" or "Ready for timed practice").
4. **Mobile-First:** Core flows (diagnostics, simulators, study path) must be fully usable at `390px` width.
5. **WCAG 2.2 AA Accessibility:** Ensure sufficient color contrast, keyboard navigation support, clear focus states, and scalable typography.

## 5. UI Components & Layouts
### Global
- **Sticky Navbar:** Clean, primary CTA (Start free diagnosis), subtle shadow on scroll.
- **Legal Footer:** MUST include a persistent disclaimer stating non-affiliation with INEVAL.

### Public Landing
- **Hero Section:** Clear H1, secondary text, and double CTA ("Hacer diagnóstico gratuito" / "Ver mi especialidad"). Includes a prominent but short disclaimer.
- **Trust Block:** Ethical guarantees (Original resources, pedagogical alignment, no real official questions).
- **Pricing Cards:** Three tiers (Gratis, Especialidad, Pro 2026). Clear layout emphasizing one-time payment for the season.

### Dashboard App
- **Summary Cards:** Display unofficial practice score, global progress, and next recommended action.
- **Dimension Cards:** Cards for D1-D4 showing practice status and detected weaknesses.
- **Study Path Timeline:** Visual timeline of the current week's activities (Read guide, Watch video, Practice).

### Simulator Engine
- **Pre-flight Screen:** Name, Dimension/Specialty, Number of items, Estimated time, Scope, and Disclaimer.
- **Execution Mode:** One question per screen on mobile, question map navigation on desktop. Non-invasive timer.
- **Post-flight Report:** Practice score, distribution by dimension, critical failures, pedagogical explanation, and recommended resources. NEVER label as an official performance grade.
