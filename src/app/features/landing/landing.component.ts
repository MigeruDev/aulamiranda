import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-surface-container-lowest text-on-surface font-body-md min-h-screen flex flex-col">
      <!-- TopNavBar -->
      <nav class="bg-surface-container-lowest/95 backdrop-blur-xl sticky top-0 z-50 border-b border-outline-variant/30 flex justify-between items-center w-full px-6 py-4 transition-all duration-300">
        <div class="flex items-center gap-12 w-full max-w-[1200px] mx-auto justify-between">
          <div class="flex items-center gap-2 cursor-pointer" routerLink="/">
            <div class="bg-primary text-on-primary w-8 h-8 rounded-lg flex items-center justify-center font-bold font-h3 shadow-sm">
              P
            </div>
            <div class="text-xl font-h3 font-extrabold text-on-surface tracking-tight">Miranda<span class="text-primary">Lab</span></div>
          </div>
          <div class="hidden md:flex gap-8 items-center bg-surface-container-low/80 px-6 py-2.5 rounded-full border border-outline-variant/30 shadow-sm">
            <a class="font-h3 text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#especialidades">Especialidades</a>
            <a class="font-h3 text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#recursos">Recursos</a>
            <a class="font-h3 text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#precios">Precios</a>
            <a class="font-h3 text-sm font-semibold tracking-tight text-primary flex items-center gap-1.5" routerLink="/simulator">
              <span class="material-symbols-outlined text-[18px]">quiz</span> Simulador
            </a>
          </div>
          <div class="hidden md:flex gap-3">
            <a class="font-label-caps text-xs px-5 py-2.5 rounded-full text-on-surface-variant bg-surface-container-low hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer border border-outline-variant/50 shadow-sm" routerLink="/dashboard">Iniciar Sesión</a>
            <a class="font-label-caps text-xs px-5 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-all cursor-pointer shadow-md transform hover:-translate-y-0.5 active:translate-y-0" routerLink="/dashboard">Comenzar Ahora</a>
          </div>
          <!-- Mobile Menu Button -->
          <button class="md:hidden text-on-surface p-2">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-grow flex flex-col items-center">
        <!-- Hero Section -->
        <section class="relative w-full pt-20 pb-24 px-6 overflow-hidden flex justify-center">
          <!-- Background decoration -->
          <div class="absolute inset-0 bg-gradient-to-b from-surface-container to-surface-container-lowest z-[-1] opacity-70"></div>
          <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-container/5 blur-3xl z-[-1]"></div>
          <div class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary-container/10 blur-3xl z-[-1]"></div>

          <div class="grid md:grid-cols-2 gap-16 items-center max-w-[1200px] w-full">
            <div class="flex flex-col items-start">
              <div class="inline-flex bg-white border border-outline-variant/30 shadow-sm text-on-surface-variant px-4 py-1.5 rounded-full text-xs font-label-caps mb-8 items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Actualizado al nuevo modelo 2026</span>
              </div>
              <h1 class="font-h1 text-[48px] md:text-[64px] leading-[1.1] tracking-tight text-on-surface mb-6 font-extrabold">
                Asegura tu plaza en el <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">Magisterio</span>.
              </h1>
              <p class="font-body-lg text-[18px] md:text-[20px] text-on-surface-variant mb-10 leading-relaxed max-w-lg">
                Plataforma de preparación intensiva con simuladores estructurados por dimensiones, y retroalimentación inmediata para la evaluación docente.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button class="bg-primary-container text-on-primary font-label-caps text-[14px] px-8 py-4 rounded-full hover:bg-primary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer" routerLink="/simulator">
                  Ir al Simulador
                  <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button class="bg-surface-container-lowest border border-outline-variant text-on-surface font-label-caps text-[14px] px-8 py-4 rounded-full hover:bg-surface-container-low transition-colors flex items-center justify-center cursor-pointer" routerLink="/dashboard">
                  Ver mi Dashboard
                </button>
              </div>
              <div class="mt-8 flex items-center gap-4 text-sm text-on-surface-variant">
                <div class="flex -space-x-3">
                  <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="Docente"/>
                  <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5" alt="Docente"/>
                  <img class="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=8" alt="Docente"/>
                </div>
                <p>Únete a más de <span class="font-bold text-on-surface">5,000</span> docentes</p>
              </div>
            </div>
            
            <div class="relative w-full h-full flex items-center justify-center perspective-[1000px]">
              <div class="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                <img alt="Platform Dashboard Interface" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <!-- Floating Card 1 -->
              <div class="absolute -bottom-8 -left-4 md:-left-12 bg-surface-container-lowest backdrop-blur-xl border border-outline-variant/30 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[bounce_6s_ease-in-out_infinite]">
                <div class="bg-green-100 text-green-700 rounded-full p-3 flex-shrink-0">
                  <span class="material-symbols-outlined icon-fill">analytics</span>
                </div>
                <div class="pr-4">
                  <p class="font-body-md text-[12px] text-on-surface-variant mb-0.5">Rendimiento Promedio</p>
                  <p class="font-h3 text-[18px] font-bold text-on-surface">850 / 1000</p>
                </div>
              </div>

               <!-- Floating Card 2 -->
               <div class="absolute -top-6 -right-4 md:-right-8 bg-surface-container-lowest backdrop-blur-xl border border-outline-variant/30 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-[bounce_5s_ease-in-out_infinite_reverse]">
                <div class="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">D1</div>
                <div class="pr-2">
                  <p class="font-label-caps text-[10px] text-on-surface-variant">Saber Disciplinar</p>
                  <div class="w-24 h-1.5 bg-surface-variant rounded-full mt-1.5">
                    <div class="h-1.5 bg-primary-container rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Trust Block -->
        <section class="py-24 w-full bg-surface">
          <div class="max-w-[1200px] mx-auto px-6">
            <div class="text-center mb-16">
              <h2 class="font-h2 text-[32px] text-on-surface mb-4">Por qué elegir MirandaLab</h2>
              <p class="font-body-md text-on-surface-variant max-w-2xl mx-auto">Nuestra metodología está diseñada específicamente para las rúbricas de evaluación del Mineduc 2026.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
               <!-- Feature 1 -->
              <div class="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group">
                <div class="w-14 h-14 rounded-2xl bg-primary-fixed/20 text-primary-container flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span class="material-symbols-outlined text-[28px]">library_books</span>
                </div>
                <h3 class="font-h3 text-[20px] font-bold text-on-surface mb-3">Banco de Preguntas Actualizado</h3>
                <p class="font-body-md text-on-surface-variant leading-relaxed">Más de 2000 reactivos estructurados según las cuatro dimensiones de la evaluación docente técnica y pedagógica.</p>
              </div>
              <!-- Feature 2 -->
              <div class="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group">
                <div class="w-14 h-14 rounded-2xl bg-secondary-fixed/30 text-on-secondary-container flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
                  <span class="material-symbols-outlined text-[28px]">insights</span>
                </div>
                <h3 class="font-h3 text-[20px] font-bold text-on-surface mb-3">Estadísticas de Precisión</h3>
                <p class="font-body-md text-on-surface-variant leading-relaxed">Identifica tus puntos débiles al instante. Nuestro dashboard te indica en qué dimensión debes enfocar tu estudio.</p>
              </div>
              <!-- Feature 3 -->
              <div class="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group">
                <div class="w-14 h-14 rounded-2xl bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant flex items-center justify-center mb-6 group-hover:bg-tertiary-fixed-dim transition-colors">
                  <span class="material-symbols-outlined text-[28px]">timer</span>
                </div>
                <h3 class="font-h3 text-[20px] font-bold text-on-surface mb-3">Simulacro con Tiempo Real</h3>
                <p class="font-body-md text-on-surface-variant leading-relaxed">Acostúmbrate a la presión del examen real con nuestro motor de simulación con cuenta regresiva oficial.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Pricing Section -->
        <section id="precios" class="py-24 w-full bg-surface-container-lowest overflow-hidden relative">
          <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] z-0"></div>
          <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[80px] z-0"></div>
          
          <div class="max-w-[1200px] mx-auto px-6 relative z-10">
            <div class="text-center mb-16 max-w-3xl mx-auto">
              <span class="inline-block py-1 px-3 rounded-full bg-primary-container text-on-primary font-label-caps text-[12px] mb-4">INVERSIÓN ÚNICA</span>
              <h2 class="font-h2 text-[36px] font-extrabold text-on-surface mb-4 tracking-tight">Preparación sin presiones</h2>
              <p class="font-body-lg text-[18px] text-on-surface-variant">Pago único para toda la temporada de evaluación 2026. Sin suscripciones, ni cobros ocultos.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 items-stretch">
              
              <!-- Free Plan -->
              <div class="bg-white border border-outline-variant/40 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-h3 text-[24px] font-bold text-on-surface mb-2">Gratis</h3>
                <p class="font-body-md text-[14px] text-on-surface-variant mb-6 h-10">Explora la plataforma y mide tu nivel base.</p>
                <div class="flex items-baseline gap-1 mb-8">
                  <span class="font-h1 text-[48px] font-extrabold text-on-surface leading-none tracking-tight">USD $0</span>
                </div>
                <ul class="flex flex-col gap-4 mb-8 flex-1">
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-green-600 text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">Cuenta SSO</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-green-600 text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">Diagnóstico inicial limitado</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-green-600 text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">Acceso a guías introductorias</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-green-600 text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">Simuladores demo</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-green-600 text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">Progreso básico</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-green-600 text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">Links a fuentes oficiales</span>
                  </li>
                </ul>
                <button class="w-full py-4 rounded-xl border border-outline-variant font-label-caps text-[14px] font-bold text-on-surface hover:bg-surface-container-low transition-colors" routerLink="/dashboard">
                  EMPEZAR GRATIS
                </button>
              </div>

              <!-- Especialidad Plan -->
              <div class="bg-white border border-outline-variant/40 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <h3 class="font-h3 text-[24px] font-bold text-primary mb-2">Especialidad</h3>
                <p class="font-body-md text-[14px] text-on-surface-variant mb-6 h-10">Enfócate en los conocimientos de tu área.</p>
                <div class="flex items-baseline gap-1 mb-2">
                  <span class="font-h1 text-[48px] font-extrabold text-on-surface leading-none tracking-tight">USD $7.99</span>
                </div>
                <p class="font-label-caps text-[11px] text-on-surface-variant mb-6">PAGO ÚNICO • TEMPORADA 2026</p>
                
                <ul class="flex flex-col gap-4 mb-8 flex-1">
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">Simuladores de una especialidad</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">D1 específica (Saber Disciplinar)</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">Reporte de fallos</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px] text-on-surface">PDFs de apoyo de esa especialidad</span>
                  </li>
                </ul>
                <button class="w-full py-4 rounded-xl bg-surface-container-low border border-transparent font-label-caps text-[14px] font-bold text-primary hover:bg-surface-container transition-colors" routerLink="/dashboard">
                  PREPARAR MI ESPECIALIDAD
                </button>
              </div>

              <!-- Pro Plan -->
              <div class="bg-primary text-on-primary rounded-3xl p-8 flex flex-col shadow-xl transform md:-translate-y-4 relative overflow-hidden border border-primary-container">
                <div class="absolute top-0 right-0 py-1.5 px-6 bg-tertiary font-label-caps text-[11px] text-on-tertiary rounded-bl-xl font-bold tracking-wider">RECOMENDADO</div>
                <h3 class="font-h3 text-[24px] font-bold mb-2">Pro 2026</h3>
                <p class="font-body-md text-[14px] text-primary-fixed-dim/90 mb-6 h-10">La preparación más completa para asegurar tu plaza.</p>
                <div class="flex items-baseline gap-1 mb-2">
                  <span class="font-h1 text-[48px] font-extrabold leading-none tracking-tight">USD $19.99</span>
                </div>
                <p class="font-label-caps text-[11px] text-primary-fixed-dim/80 mb-6 font-bold">PAGO ÚNICO • TEMPORADA 2026</p>
                
                <ul class="flex flex-col gap-4 mb-8 flex-1">
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px]">Todas las dimensiones cubiertas</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px]">Todas las especialidades disponibles</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px]">Simuladores cronometrados oficiales</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px]">Revisión de fallos críticos</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px]">PDFs descargables y ampliados</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px]">Videos / cursos metodológicos</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px]">Ruta de estudio personalizada</span>
                  </li>
                  <li class="flex gap-3 items-start">
                     <span class="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">check_circle</span>
                     <span class="font-body-md text-[14px]">Reportes analíticos avanzados</span>
                  </li>
                </ul>
                <button class="w-full py-4 rounded-xl bg-white text-primary font-label-caps text-[14px] font-bold hover:bg-surface-container-lowest transition-colors shadow-sm" routerLink="/dashboard">
                  DESBLOQUEAR PRO 2026
                </button>
              </div>

            </div>
            
            <div class="mt-16 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center mx-auto max-w-4xl shadow-sm">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full mb-8 opacity-80">
                  <div class="flex flex-col items-center gap-2">
                    <span class="material-symbols-outlined text-[32px] text-outline">credit_card</span>
                    <span class="font-label-caps text-[11px] text-on-surface-variant">Tarjeta Crédito/Débito</span>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <span class="material-symbols-outlined text-[32px] text-outline">account_balance</span>
                    <span class="font-label-caps text-[11px] text-on-surface-variant">Transferencia Bancaria</span>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <span class="material-symbols-outlined text-[32px] text-outline">smartphone</span>
                    <span class="font-label-caps text-[11px] text-on-surface-variant">Payphone / DeUna</span>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <span class="material-symbols-outlined text-[32px] text-outline">receipt_long</span>
                    <span class="font-label-caps text-[11px] text-on-surface-variant">Emisión de Factura</span>
                  </div>
                </div>
                
                <p class="font-body-md text-[12px] text-on-surface-variant max-w-2xl text-center leading-relaxed">
                  Todos los pagos incluyen acceso inmediato (sujeto a validación en caso de transferencia). Sin renovación automática. Precios incluyen impuestos locales. La política de reembolso o anulaciones está sujeta a nuestros <a href="#" class="text-primary hover:underline">términos de servicio validados legalmente</a>.
                </p>
            </div>

          </div>
        </section>
      </main>

      <!-- BottomNavBar (Mobile Only) -->
      <nav class="bg-surface-container-lowest/95 backdrop-blur-xl fixed bottom-0 w-full z-50 border-t border-outline-variant/30 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] h-[72px] flex justify-around items-center px-2 md:hidden pb-safe">
        <a class="flex flex-col items-center justify-center w-16 h-full text-primary-container" routerLink="/">
          <span class="material-symbols-outlined icon-fill mb-1">home</span>
          <span class="font-label-caps text-[9px]">Inicio</span>
        </a>
        <a class="flex flex-col items-center justify-center w-16 h-full text-on-surface-variant hover:text-on-surface" routerLink="/simulator">
          <span class="material-symbols-outlined mb-1">quiz</span>
          <span class="font-label-caps text-[9px]">Simulador</span>
        </a>
        <a class="flex flex-col items-center justify-center w-16 h-full text-on-surface-variant hover:text-on-surface" routerLink="/dashboard">
          <span class="material-symbols-outlined mb-1">dashboard</span>
          <span class="font-label-caps text-[9px]">Panel</span>
        </a>
      </nav>

      <!-- Footer -->
      <footer class="bg-on-surface text-surface w-full py-16 mt-auto">
        <div class="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div class="max-w-sm">
            <div class="flex items-center gap-2 mb-6">
              <div class="bg-primary-container text-on-primary w-8 h-8 rounded-lg flex items-center justify-center font-bold font-h3">P</div>
              <div class="text-xl font-h3 font-bold text-white tracking-tight">MirandaLab</div>
            </div>
            <p class="font-body-md text-sm text-outline-variant mb-2">© 2026 MirandaLab - Plataforma de Capacitación Profesional Docente.</p>
            <p class="font-body-md text-[11px] text-outline opacity-70">Disclaimer: Este sitio no es gubernamental ni tiene vinculación oficial con el Ministerio de Educación o INEVAL.</p>
          </div>
          <div class="grid grid-cols-2 gap-8 md:gap-16">
             <div class="flex flex-col gap-3">
               <span class="font-label-caps text-white mb-2">Plataforma</span>
               <a class="font-body-md text-sm text-outline-variant hover:text-white transition-colors" routerLink="/dashboard">Dashboard</a>
               <a class="font-body-md text-sm text-outline-variant hover:text-white transition-colors" routerLink="/simulator">Simulador</a>
               <a class="font-body-md text-sm text-outline-variant hover:text-white transition-colors" href="#">Precios</a>
             </div>
             <div class="flex flex-col gap-3">
               <span class="font-label-caps text-white mb-2">Legal</span>
               <a class="font-body-md text-sm text-outline-variant hover:text-white transition-colors" href="#">Términos</a>
               <a class="font-body-md text-sm text-outline-variant hover:text-white transition-colors" href="#">Privacidad</a>
               <a class="font-body-md text-sm text-outline-variant hover:text-white transition-colors" href="#">Soporte</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class LandingComponent {}

