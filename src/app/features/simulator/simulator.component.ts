import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simulator',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col font-body-md overflow-hidden">
      <!-- Header: Dedicated Simulator Context -->
      <header class="bg-white/80 backdrop-blur-xl border-b border-outline-variant/30 px-6 py-4 flex items-center justify-between shrink-0 z-40 relative shadow-sm">
        <div class="flex items-center gap-4 w-1/3">
          <button class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group" routerLink="/dashboard">
            <span class="material-symbols-outlined text-[20px] group-hover:-translate-x-0.5 transition-transform">close</span>
            <span class="font-label-caps text-label-caps uppercase hidden sm:block">Salir al Panel</span>
          </button>
        </div>
        <div class="flex flex-col items-center justify-center w-1/3">
          <h1 class="font-h3 text-[16px] font-extrabold text-on-surface text-center truncate w-full tracking-tight mb-0.5">Simulador D1: Conocimientos Pedagógicos</h1>
          <div class="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">
            <span class="material-symbols-outlined text-[14px]">schedule</span>
            <span class="font-body-md text-[13px] font-bold tracking-widest text-primary-container">01:45:22</span>
          </div>
        </div>
        <div class="flex justify-end w-1/3">
          <button class="bg-primary-container text-on-primary px-5 py-2.5 rounded-full hover:bg-primary transition-all flex items-center gap-2 font-label-caps text-[11px] shadow-sm transform hover:-translate-y-0.5" routerLink="/dashboard">
            <span class="material-symbols-outlined text-[16px]">task_alt</span>
            <span class="hidden sm:inline">Finalizar Prueba</span>
            <span class="sm:hidden">Finalizar</span>
          </button>
        </div>
      </header>

      <!-- Main Workspace -->
      <main class="flex-1 flex overflow-hidden relative">
        <!-- Background decoration -->
        <div class="absolute inset-0 bg-gradient-to-b from-surface-container/30 to-surface-container-lowest z-0 pointer-events-none"></div>
        
        <!-- Center Canvas: Question View -->
        <section class="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 relative flex flex-col items-center z-10">
          <div class="max-w-[800px] w-full flex flex-col gap-8 h-full pb-24">
            
            <!-- Progress for mobile -->
            <div class="lg:hidden w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mb-2">
               <div class="bg-primary-container h-full" style="width: 22%"></div>
            </div>

            <!-- Question Meta & Review Flag -->
            <div class="flex justify-between items-center bg-white border border-outline-variant/30 px-6 py-4 rounded-2xl shadow-sm">
              <div>
                <span class="font-label-caps text-[11px] text-primary-container bg-primary-fixed/30 px-2 py-1 rounded uppercase tracking-wider font-bold">Pregunta 12 de 50</span>
                <div class="font-body-md text-[13px] text-on-surface-variant mt-1.5 font-medium flex items-center gap-1.5">
                   <div class="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></div>
                   Dimensión: Gestión del Aprendizaje
                </div>
              </div>
              <label class="flex items-center gap-2 cursor-pointer group p-2 hover:bg-surface-container-low rounded-xl transition-colors">
                <input class="form-checkbox text-secondary-container border-outline-variant/30 focus:ring-secondary-container rounded w-5 h-5 transition-colors cursor-pointer" type="checkbox"/>
                <span class="font-body-md text-[13px] font-medium text-on-surface-variant group-hover:text-on-surface transition-colors hidden sm:block">Marcar revisión</span>
                <span class="material-symbols-outlined text-outline group-hover:text-secondary-container transition-colors text-[20px]">flag</span>
              </label>
            </div>
            
            <!-- Question Text -->
            <div class="font-body-lg text-[18px] md:text-[20px] font-medium text-on-surface leading-loose tracking-tight px-2">
              Un docente de Educación General Básica observa que sus estudiantes muestran dificultades para comprender el concepto de fracciones equivalentes utilizando únicamente representaciones numéricas. Según los principios del constructivismo y el enfoque metodológico del currículo ecuatoriano, ¿cuál de las siguientes estrategias pedagógicas sería la <span class="font-bold underline decoration-primary-container/30 decoration-4 underline-offset-4">más efectiva</span> para abordar esta dificultad inicial?
            </div>
            
            <!-- Options -->
            <div class="flex flex-col gap-4 mt-4">
              <label class="relative flex p-6 bg-white border border-outline-variant/30 rounded-2xl cursor-pointer hover:border-primary-container/30 hover:shadow-md transition-all group">
                <input class="peer sr-only" name="q12" type="radio"/>
                <div class="w-6 h-6 rounded-full border-2 border-outline-variant/50 peer-checked:border-primary-container peer-checked:border-[6px] transition-all shrink-0 mt-0.5"></div>
                <div class="ml-4 font-body-md text-[16px] text-on-surface-variant group-hover:text-on-surface peer-checked:text-on-surface leading-relaxed transition-colors">
                  <span class="font-bold mr-2 text-on-surface bg-surface-container-low px-2 py-0.5 rounded">A</span> Asignar una hoja de ejercicios con 50 problemas de simplificación de fracciones para garantizar la memorización del algoritmo procedimental.
                </div>
                <div class="absolute inset-0 border-2 border-transparent peer-checked:border-primary-container rounded-2xl pointer-events-none transition-colors"></div>
                <div class="absolute inset-0 bg-primary-fixed/5 opacity-0 peer-checked:opacity-100 rounded-2xl pointer-events-none transition-opacity"></div>
              </label>
              
              <label class="relative flex p-6 bg-white border border-primary-container/30 rounded-2xl cursor-pointer hover:shadow-md transition-all group shadow-sm">
                <input checked class="peer sr-only" name="q12" type="radio"/>
                <div class="w-6 h-6 rounded-full border-[6px] border-primary-container transition-all shrink-0 mt-0.5"></div>
                <div class="ml-4 font-body-md text-[16px] text-on-surface leading-relaxed transition-colors">
                  <span class="font-bold mr-2 text-white bg-primary-container px-2 py-0.5 rounded">B</span> Utilizar material concreto manipulativo, como regletas o círculos fraccionarios, permitiendo a los estudiantes superponer piezas para descubrir visual y físicamente la equivalencia.
                </div>
                <div class="absolute inset-0 border-2 border-primary-container rounded-2xl pointer-events-none transition-colors"></div>
                <div class="absolute inset-0 bg-primary-fixed/5 rounded-2xl pointer-events-none transition-opacity"></div>
              </label>
              
              <label class="relative flex p-6 bg-white border border-outline-variant/30 rounded-2xl cursor-pointer hover:border-primary-container/30 hover:shadow-md transition-all group">
                <input class="peer sr-only" name="q12" type="radio"/>
                <div class="w-6 h-6 rounded-full border-2 border-outline-variant/50 peer-checked:border-primary-container peer-checked:border-[6px] transition-all shrink-0 mt-0.5"></div>
                <div class="ml-4 font-body-md text-[16px] text-on-surface-variant group-hover:text-on-surface peer-checked:text-on-surface leading-relaxed transition-colors">
                  <span class="font-bold mr-2 text-on-surface bg-surface-container-low px-2 py-0.5 rounded">C</span> Dibujar diagramas de pastel en la pizarra mientras se explica teóricamente la regla de multiplicar el numerador y el denominador.
                </div>
                <div class="absolute inset-0 border-2 border-transparent peer-checked:border-primary-container rounded-2xl pointer-events-none transition-colors"></div>
                <div class="absolute inset-0 bg-primary-fixed/5 opacity-0 peer-checked:opacity-100 rounded-2xl pointer-events-none transition-opacity"></div>
              </label>
            </div>
            
            <div class="flex-1"></div>
            
            <!-- Footer Navigation Controls -->
            <div class="fixed bottom-0 left-0 right-0 lg:right-80 bg-white/90 backdrop-blur-xl border-t border-outline-variant/30 p-4 px-6 md:px-12 flex justify-between items-center z-40 pb-safe">
              <button class="flex items-center gap-2 px-6 py-3 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-caps text-[11px] group">
                <span class="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                ANTERIOR
              </button>
              <button class="flex items-center gap-2 px-8 py-3 rounded-full bg-on-surface text-surface font-label-caps text-[11px] shadow-md hover:bg-on-surface/90 transition-all transform hover:-translate-y-0.5 group">
                SIGUIENTE
                <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Right Side Panel: Question Map -->
        <aside class="w-80 bg-white/50 backdrop-blur-lg border-l border-outline-variant/30 flex-col hidden lg:flex shrink-0 relative z-20">
          <div class="p-6 border-b border-outline-variant/20">
            <h2 class="font-h3 text-[16px] font-extrabold text-on-surface tracking-tight mb-4">Mapa de Preguntas</h2>
            
            <!-- Progress Bar -->
            <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 mb-5 shadow-sm">
              <div class="flex justify-between items-end mb-2">
                <span class="font-label-caps text-[10px] text-on-surface-variant">Progreso Actual</span>
                <span class="font-h3 text-[14px] font-bold text-primary-container">11 <span class="text-on-surface-variant font-medium text-[12px]">/ 50</span></span>
              </div>
              <div class="w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
                <div class="bg-primary-container h-full rounded-full" style="width: 22%"></div>
              </div>
            </div>

            <!-- Legend -->
            <div class="flex flex-wrap gap-x-4 gap-y-3 pb-2 border-b border-outline-variant/20">
               <div class="flex items-center gap-2">
                 <div class="w-2.5 h-2.5 rounded-full bg-primary-fixed/50 border border-primary-container/30"></div>
                 <span class="text-[11px] text-on-surface font-medium">Respondida</span>
               </div>
               <div class="flex items-center gap-2">
                 <div class="w-2.5 h-2.5 rounded-full border-2 border-primary-container bg-white"></div>
                 <span class="text-[11px] text-on-surface font-medium">Actual</span>
               </div>
               <div class="flex items-center gap-2">
                 <div class="w-2.5 h-2.5 rounded-full bg-secondary-container"></div>
                 <span class="text-[11px] text-on-surface font-medium">Revisión</span>
               </div>
            </div>
          </div>
          <!-- Grid -->
          <div class="flex-1 overflow-y-auto p-6 scrollbar-hide">
            <div class="grid grid-cols-5 gap-2.5">
              <button class="w-full aspect-square rounded-xl flex items-center justify-center font-body-md text-sm font-semibold bg-primary-fixed/50 border border-primary-container/20 text-primary-container hover:bg-primary-fixed transition-colors">1</button>
              <button class="w-full aspect-square rounded-xl flex items-center justify-center font-body-md text-sm font-semibold bg-primary-fixed/50 border border-primary-container/20 text-primary-container hover:bg-primary-fixed transition-colors">2</button>
              <button class="w-full aspect-square rounded-xl flex items-center justify-center font-body-md text-sm font-semibold bg-primary-fixed/50 border border-primary-container/20 text-primary-container hover:bg-primary-fixed transition-colors relative overflow-hidden">
                 3
                 <div class="absolute top-0 right-0 w-3 h-3 bg-secondary-container rounded-bl-full"></div>
              </button>
              <button class="w-full aspect-square rounded-xl flex items-center justify-center font-body-md text-[14px] font-extrabold bg-white text-primary-container border-[2.5px] border-primary-container shadow-sm transform scale-110">12</button>
              <button class="w-full aspect-square rounded-xl flex items-center justify-center font-body-md text-sm text-on-surface-variant bg-surface-container-lowest border border-outline-variant/30 hover:border-outline-variant hover:bg-surface-container-low transition-colors">13</button>
              <button class="w-full aspect-square rounded-xl flex items-center justify-center font-body-md text-sm text-on-surface-variant bg-surface-container-lowest border border-outline-variant/30 hover:border-outline-variant hover:bg-surface-container-low transition-colors">14</button>
              <button class="w-full aspect-square rounded-xl flex items-center justify-center font-body-md text-sm text-on-surface-variant bg-surface-container-lowest border border-outline-variant/30 hover:border-outline-variant hover:bg-surface-container-low transition-colors relative overflow-hidden">
                 15
                 <div class="absolute top-0 right-0 w-3 h-3 bg-secondary-container rounded-bl-full"></div>
              </button>
               <button class="w-full aspect-square rounded-xl flex items-center justify-center font-body-md text-sm text-on-surface-variant bg-surface-container-lowest border border-outline-variant/30 hover:border-outline-variant hover:bg-surface-container-low transition-colors">16</button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  `
})
export class SimulatorComponent {}
