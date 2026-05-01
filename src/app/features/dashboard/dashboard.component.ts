import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-surface-container-lowest text-on-surface font-body-md text-body-md min-h-screen flex">
      <!-- SideNavBar -->
      <aside class="hidden xl:flex bg-surface-container-low/30 backdrop-blur-xl border-r border-outline-variant/30 h-screen w-[280px] fixed left-0 top-0 flex-col justify-between z-40 transition-all">
        <div class="p-6">
          <!-- Header -->
          <div class="flex items-center gap-3 mb-8 cursor-pointer" routerLink="/">
            <div class="bg-primary-container text-on-primary w-10 h-10 rounded-xl flex items-center justify-center font-bold font-h3 shadow-sm">P</div>
            <div>
              <h2 class="font-h3 text-[16px] leading-tight font-extrabold tracking-tight text-on-surface">PrepDocente<span class="text-primary-container">EC</span></h2>
              <span class="font-label-caps text-[10px] text-on-surface-variant">Plataforma Eval</span>
            </div>
          </div>
          
          <button class="w-full bg-on-surface text-surface hover:bg-on-surface/90 font-label-caps py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 mb-8" routerLink="/simulator">
            <span class="material-symbols-outlined icon-fill text-[18px]">play_arrow</span>
            Nuevo Simulacro
          </button>
          
          <!-- Navigation Links -->
          <nav class="flex flex-col gap-1.5">
            <span class="font-label-caps text-[10px] text-outline ml-2 mb-2">Menú Principal</span>
            
            <a routerLink="/dashboard" routerLinkActive="bg-white shadow-sm border-outline-variant/30 text-primary-container" [routerLinkActiveOptions]="{exact: true}" class="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant border border-transparent font-h3 text-[14px] font-semibold rounded-xl hover:bg-white/60 transition-all group">
              <span class="material-symbols-outlined text-[20px] group-[.bg-white]:icon-fill">dashboard</span>
              Panel de Control
            </a>
            <a routerLink="/simulator" routerLinkActive="bg-white shadow-sm border-outline-variant/30 text-primary-container" class="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant border border-transparent font-h3 text-[14px] font-semibold rounded-xl hover:bg-white/60 transition-all group">
              <span class="material-symbols-outlined text-[20px] group-[.bg-white]:icon-fill">quiz</span>
              Simulador
            </a>
            <a class="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant border border-transparent font-h3 text-[14px] font-semibold rounded-xl hover:bg-white/60 transition-all group">
              <span class="material-symbols-outlined text-[20px] group-[.bg-white]:icon-fill">school</span>
              Mis Cursos
            </a>
            <a class="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant border border-transparent font-h3 text-[14px] font-semibold rounded-xl hover:bg-white/60 transition-all group">
              <span class="material-symbols-outlined text-[20px] group-[.bg-white]:icon-fill">folder_open</span>
              Recursos
            </a>
            <a class="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant border border-transparent font-h3 text-[14px] font-semibold rounded-xl hover:bg-white/60 transition-all group">
              <span class="material-symbols-outlined text-[20px] group-[.bg-white]:icon-fill">settings</span>
              Configuración
            </a>
          </nav>
        </div>

        <!-- Footer User Profile -->
        <div class="p-6 border-t border-outline-variant/30">
          <div class="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-lowest transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
            <div class="flex items-center gap-3">
              <img alt="Usuario" class="w-9 h-9 rounded-full object-cover border border-outline-variant/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAceRzTTySJ8wIvDm_lSpi3cCPSAflKbGAQlMwGoRey6xggEATd029_v7LmPxZ3KR0-EO7THYhSUJtV-9o3EsFC2VAqRhM3zlOcPlmLAQOJPW6j5DsiUUtDTvqkSB79t4L3d3PCG3K4zvfKHNfwldhT2BkNhKPUeuSzkn7sBtGA-bHfUt-DG-vx-SUvF2aqZUhRiTnCNBN44lpneIII-9C9W00HZ5d6C1-dRVVE3Qcn-p3UozpFYAyBq1ly4OvsDvL0-brzARwFbw"/>
              <div class="flex flex-col">
                 <span class="font-h3 text-[13px] font-bold text-on-surface leading-tight">Juan Pérez</span>
                 <span class="font-body-md text-[11px] text-on-surface-variant">Postulante D1</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-outline text-[18px]">more_vert</span>
          </div>
        </div>
      </aside>

      <!-- BottomNavBar (Mobile Only) -->
      <nav class="xl:hidden fixed bottom-0 left-0 w-full h-[72px] flex justify-around items-center px-2 bg-surface-container-lowest/95 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 pb-safe">
        <a class="flex flex-col items-center justify-center w-16 h-full text-primary-container" routerLink="/dashboard">
          <span class="material-symbols-outlined icon-fill mb-1">dashboard</span>
          <span class="font-label-caps text-[9px]">Panel</span>
        </a>
        <a class="flex flex-col items-center justify-center w-16 h-full text-on-surface-variant hover:text-on-surface transition-colors" routerLink="/simulator">
          <span class="material-symbols-outlined mb-1">quiz</span>
          <span class="font-label-caps text-[9px]">Simular</span>
        </a>
        <a class="flex flex-col items-center justify-center w-16 h-full text-on-surface-variant hover:text-on-surface transition-colors">
          <span class="material-symbols-outlined mb-1">school</span>
          <span class="font-label-caps text-[9px]">Cursos</span>
        </a>
        <a class="flex flex-col items-center justify-center w-16 h-full text-on-surface-variant hover:text-on-surface transition-colors">
          <span class="material-symbols-outlined mb-1">person</span>
          <span class="font-label-caps text-[9px]">Perfil</span>
        </a>
      </nav>

      <!-- Main Content Canvas -->
      <main class="flex-1 xl:ml-[280px] p-6 md:p-8 xl:px-12 pb-24 xl:pb-12 max-w-[1440px] mx-auto w-full">
        <!-- Header Section -->
        <header class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 class="font-h1 text-[32px] font-extrabold text-on-surface tracking-tight mb-2">Resumen de Rendimiento</h1>
            <p class="font-body-md text-[16px] text-on-surface-variant">Sigue tu progreso y preparate para el éxito.</p>
          </div>
          <div class="flex items-center gap-3">
             <div class="hidden sm:flex bg-white border border-outline-variant/30 rounded-xl px-4 py-2 text-sm items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500"></span>
                <span class="font-bold text-on-surface">Plan Pro</span> Activo
             </div>
             <button class="bg-white border border-outline-variant/30 w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-low transition-colors badge-indicator relative">
               <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
               <span class="material-symbols-outlined text-on-surface">notifications</span>
             </button>
          </div>
        </header>

        <!-- Top Stats Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <!-- Stat 1 -->
          <div class="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
            <div class="relative z-10 flex items-center justify-between mb-6">
              <div class="w-10 h-10 rounded-xl bg-primary-fixed text-primary-container flex items-center justify-center">
                <span class="material-symbols-outlined icon-fill">analytics</span>
              </div>
              <span class="font-label-caps text-[10px] text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-md">General</span>
            </div>
            <div class="relative z-10">
              <span class="font-label-caps text-[12px] text-on-surface-variant block mb-1">Puntaje Estimado</span>
              <div class="flex items-baseline gap-2 mb-3">
                <span class="font-h1 text-[36px] font-extrabold text-on-surface leading-none tracking-tight">850</span>
                <span class="font-body-md text-on-surface-variant">/ 1000</span>
              </div>
            </div>
            <div class="relative z-10 w-full bg-surface-variant rounded-full h-1.5 mt-2">
              <div class="bg-primary-container h-1.5 rounded-full relative" style="width: 85%"></div>
            </div>
          </div>
          
          <!-- Stat 2 -->
          <div class="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-secondary-container/5 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
            <div class="relative z-10 flex items-center justify-between mb-6">
              <div class="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary-container flex items-center justify-center">
                 <span class="material-symbols-outlined icon-fill">schedule</span>
              </div>
              <span class="font-label-caps text-[10px] text-green-700 bg-green-100 flex items-center gap-1 px-2 py-1 rounded-md">
                <span class="material-symbols-outlined text-[12px]">trending_up</span> +2.5h
              </span>
            </div>
            <div class="relative z-10">
              <span class="font-label-caps text-[12px] text-on-surface-variant block mb-1">Horas de Práctica</span>
              <div class="flex items-baseline gap-2">
                <span class="font-h1 text-[36px] font-extrabold text-on-surface leading-none tracking-tight">24.5</span>
                <span class="font-body-md text-on-surface-variant">hrs</span>
              </div>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed-dim/5 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
            <div class="relative z-10 flex items-center justify-between mb-6">
              <div class="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary-fixed-dim flex items-center justify-center">
                 <span class="material-symbols-outlined icon-fill">assignment_turned_in</span>
              </div>
              <span class="font-label-caps text-[10px] text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-md">Reciente</span>
            </div>
            <div class="relative z-10">
              <span class="font-label-caps text-[12px] text-on-surface-variant block mb-1">Último Intento</span>
              <div class="flex items-baseline gap-2">
                <span class="font-h1 text-[32px] font-extrabold text-green-600 leading-none tracking-tight">Aprobado</span>
              </div>
              <div class="mt-3 flex gap-2">
                <span class="font-label-caps text-[10px] text-outline bg-surface-container-low px-2 py-1 rounded">D1: 90%</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Bento Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          <!-- Left Column: Mi Ruta & Dimensiones (Span 3) -->
          <div class="lg:col-span-3 flex flex-col gap-8">
            
            <section>
              <div class="flex items-center justify-between mb-4">
                <h2 class="font-h3 text-[20px] font-bold text-on-surface">Mi Ruta de Estudio</h2>
                <a class="font-label-caps text-[12px] text-primary-container hover:underline cursor-pointer">Ver calendario</a>
              </div>
              
              <div class="bg-white border border-outline-variant/30 rounded-2xl shadow-sm overflow-hidden">
                <div class="p-4 border-b border-outline-variant/20 bg-surface-container-lowest flex justify-between items-center">
                  <div class="flex items-center gap-2">
                     <span class="material-symbols-outlined text-outline text-[18px]">calendar_month</span>
                     <h3 class="font-h3 text-[14px] font-bold text-on-surface">Actividades de la Semana 3</h3>
                  </div>
                </div>
                <div class="divide-y divide-outline-variant/20">
                  <div class="p-5 flex items-start gap-4 hover:bg-surface-container-lowest/50 transition-colors">
                    <div class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm">
                      <span class="material-symbols-outlined text-[12px] icon-fill">check</span>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                         <h4 class="font-h3 text-[15px] font-semibold text-outline line-through">Leer Guía Metodológica</h4>
                         <span class="font-label-caps text-[9px] text-green-700 bg-green-100 px-2 py-0.5 rounded-sm">Hecho</span>
                      </div>
                      <p class="font-body-md text-[13px] text-outline">Módulo 1: Fundamentos de Pedagogía</p>
                    </div>
                  </div>

                  <div class="p-5 flex items-start gap-4 bg-primary-fixed/5 border-l-4 border-primary-container">
                    <div class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-primary-container flex items-center justify-center">
                      <div class="w-1.5 h-1.5 rounded-full bg-primary-container"></div>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                         <h4 class="font-h3 text-[15px] font-bold text-primary-container">Ver Video Clase: Dimensión 1</h4>
                         <span class="font-label-caps text-[9px] text-primary-container bg-primary-fixed/30 border border-primary-container/20 px-2 py-0.5 rounded-sm">En curso</span>
                      </div>
                      <p class="font-body-md text-[13px] text-on-surface-variant mb-4">Conocimientos Específicos del área dictados por expertos.</p>
                      <button class="bg-primary-container text-on-primary font-label-caps px-5 py-2 rounded-lg text-[11px] hover:bg-primary transition-colors shadow-sm transform hover:-translate-y-0.5">
                        Continuar
                      </button>
                    </div>
                  </div>

                  <div class="p-5 flex items-start gap-4 opacity-60">
                    <div class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-outline flex items-center justify-center text-outline">
                       <span class="material-symbols-outlined text-[12px]">lock</span>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-1">
                         <h4 class="font-h3 text-[15px] font-semibold text-on-surface">Práctica D1: Cuestionario</h4>
                      </div>
                      <p class="font-body-md text-[13px] text-on-surface-variant">30 preguntas, tiempo estimado 45 min.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Dimensiones Grid -->
            <section>
              <h2 class="font-h3 text-[20px] font-bold text-on-surface mb-4">Progreso por Dimensiones</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-white border border-outline-variant/30 rounded-2xl p-5 shadow-sm">
                  <div class="flex justify-between items-center mb-3">
                    <h4 class="font-h3 text-[14px] font-bold text-on-surface">D1: Saber disciplinar</h4>
                    <span class="font-h3 font-extrabold text-[16px] text-primary-container">65%</span>
                  </div>
                  <div class="w-full bg-surface-variant rounded-full h-2 mb-3">
                    <div class="bg-primary-container h-2 rounded-full" style="width: 65%"></div>
                  </div>
                  <p class="font-body-md text-[12px] text-on-surface-variant">Requiere más práctica en temas específicos.</p>
                </div>

                <div class="bg-white border border-outline-variant/30 rounded-2xl p-5 shadow-sm">
                  <div class="flex justify-between items-center mb-3">
                    <h4 class="font-h3 text-[14px] font-bold text-on-surface">D2: Gestión de aprendizaje</h4>
                    <span class="font-h3 font-extrabold text-[16px] text-tertiary-fixed-dim">80%</span>
                  </div>
                  <div class="w-full bg-surface-variant rounded-full h-2 mb-3">
                    <div class="bg-tertiary-fixed-dim h-2 rounded-full" style="width: 80%"></div>
                  </div>
                  <p class="font-body-md text-[12px] text-on-surface-variant">Buen nivel, mantener consistencia.</p>
                </div>
              </div>
            </section>
          </div>

          <!-- Right Column (Span 2) -->
          <div class="lg:col-span-2 flex flex-col gap-8">
            <div class="bg-on-surface text-background rounded-2xl p-6 shadow-lg relative overflow-hidden">
               <!-- Decorative blops -->
               <div class="absolute top-[-20%] right-[-10%] w-32 h-32 rounded-full bg-secondary-container/20 blur-2xl"></div>
               <div class="absolute bottom-[-10%] left-[-10%] w-24 h-24 rounded-full bg-primary-container/30 blur-2xl"></div>
               
               <div class="relative z-10">
                 <h2 class="font-h3 text-[18px] font-extrabold mb-2 text-white">Desbloquea Todo</h2>
                 <p class="font-body-md text-[13px] text-surface-variant mb-6 leading-relaxed">Accede a la base de datos completa de preguntas y evaluaciones ilimitadas.</p>
                 <button class="w-full bg-white text-on-surface font-label-caps py-3 rounded-xl hover:bg-surface-container-lowest transition-all shadow-md">
                   Mejorar Plan
                 </button>
               </div>
            </div>

            <div class="bg-white border border-outline-variant/30 rounded-2xl p-6 shadow-sm">
              <h2 class="font-h3 text-[18px] font-bold text-on-surface mb-5">Actividad Reciente</h2>
              <div class="flex flex-col gap-4">
                
                <div class="flex items-start gap-4">
                  <div class="w-2.5 h-2.5 rounded-full bg-outline/40 mt-1.5 shrink-0 relative after:content-[''] after:absolute after:top-3 after:left-1/2 after:-translate-x-1/2 after:w-px after:h-12 after:bg-outline-variant/30"></div>
                  <div class="flex-1">
                    <div class="flex justify-between items-start mb-1">
                      <h4 class="font-h3 text-[14px] font-bold text-on-surface leading-tight">Simulacro General #4</h4>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700">75%</span>
                    </div>
                    <span class="font-body-md text-[11px] text-outline block mb-2">Ayer, 10:30 AM</span>
                    <a class="text-primary-container font-h3 text-[12px] font-semibold hover:underline cursor-pointer" routerLink="/simulator">Revisar Informe</a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-2.5 h-2.5 rounded-full bg-outline/40 mt-1.5 shrink-0 relative after:content-[''] after:absolute after:top-3 after:left-1/2 after:-translate-x-1/2 after:w-px after:h-12 after:bg-outline-variant/30"></div>
                  <div class="flex-1">
                    <div class="flex justify-between items-start mb-1">
                      <h4 class="font-h3 text-[14px] font-bold text-on-surface leading-tight">Módulo 2 Completado</h4>
                    </div>
                    <span class="font-body-md text-[11px] text-outline block mb-2">Mar 14, 04:15 PM</span>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-2.5 h-2.5 rounded-full bg-outline/40 mt-1.5 shrink-0"></div>
                  <div class="flex-1">
                    <div class="flex justify-between items-start mb-1">
                      <h4 class="font-h3 text-[14px] font-bold text-on-surface leading-tight">Login Sistema</h4>
                    </div>
                    <span class="font-body-md text-[11px] text-outline block mb-2">Mar 12, 08:00 AM</span>
                  </div>
                </div>

              </div>
              <button class="w-full mt-6 py-2 text-center border-t border-outline-variant/20 text-on-surface-variant text-[12px] font-semibold hover:text-on-surface hover:bg-surface-container-lowest transition-colors -mx-6 px-6 -mb-6 rounded-b-2xl h-12">
                 Ver historial completo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class DashboardComponent {}
