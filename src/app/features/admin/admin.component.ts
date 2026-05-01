import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background text-on-surface font-body-md text-body-md flex h-screen overflow-hidden antialiased">
      <aside class="w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col flex-shrink-0 z-10">
        <div class="h-16 flex items-center px-6 border-b border-outline-variant">
          <span class="font-h3 text-h3 text-primary-container tracking-tight">MirandaLab</span>
        </div>
        <div class="px-6 py-3">
          <span class="font-label-caps text-label-caps text-outline uppercase tracking-wider">Admin</span>
        </div>
        <nav class="flex-1 overflow-y-auto py-3 flex flex-col gap-1">
          <a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200">
            <span class="material-symbols-outlined">dashboard</span>
            <span class="font-body-md text-body-md font-semibold">Dashboard</span>
          </a>
          <a class="flex items-center gap-3 px-6 py-3 bg-surface-container text-primary-container border-r-4 border-primary-container font-bold transition-colors duration-200">
            <span class="material-symbols-outlined icon-fill">database</span>
            <span class="font-body-md text-body-md">Banco de Ítems</span>
          </a>
          <a class="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200">
            <span class="material-symbols-outlined">group</span>
            <span class="font-body-md text-body-md font-semibold">Usuarios</span>
          </a>
        </nav>
        <div class="p-6 border-t border-outline-variant">
          <div class="flex items-center gap-3 cursor-pointer hover:bg-surface-container-low p-1 rounded-sm">
            <div class="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-caps text-label-caps">
              AD
            </div>
            <div class="flex flex-col">
              <span class="font-body-md text-body-md text-on-surface leading-tight">Admin Principal</span>
              <span class="font-label-caps text-label-caps text-outline leading-tight">Cerrar Sesión</span>
            </div>
          </div>
        </div>
      </aside>

      <main class="flex-1 flex flex-col overflow-hidden relative">
        <header class="h-16 flex items-center justify-between px-8 border-b border-outline-variant bg-surface-container-lowest z-10 flex-shrink-0">
          <h1 class="font-h3 text-h3 text-on-surface">Gestión de Banco de Ítems</h1>
          <div class="flex items-center gap-6">
            <button class="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-colors">notifications</button>
          </div>
        </header>

        <div class="flex-1 overflow-y-auto p-8 flex flex-col gap-10">
          <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 ambient-shadow flex flex-col gap-3">
              <div class="flex justify-between items-center text-on-surface-variant">
                <span class="font-label-caps text-label-caps uppercase">Total Usuarios</span>
                <span class="material-symbols-outlined">group</span>
              </div>
              <div class="flex items-baseline gap-3">
                <span class="font-h2 text-h2 text-on-surface">12,450</span>
                <span class="font-label-caps text-label-caps text-secondary">+5.2%</span>
              </div>
            </div>
            <div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 ambient-shadow flex flex-col gap-3">
              <div class="flex justify-between items-center text-on-surface-variant">
                <span class="font-label-caps text-label-caps uppercase">Tasa Completación</span>
                <span class="material-symbols-outlined">task_alt</span>
              </div>
              <div class="flex items-baseline gap-3">
                <span class="font-h2 text-h2 text-on-surface">85%</span>
              </div>
            </div>
          </section>

          <section class="bg-surface-container-lowest border border-outline-variant rounded-xl ambient-shadow flex flex-col overflow-hidden">
            <div class="p-6 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-surface-bright">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary-container">filter_list</span>
                <span class="font-body-md text-body-md text-on-surface-variant">Filtros activos: Ninguno</span>
              </div>
              <div class="flex gap-3 w-full sm:w-auto">
                <button class="flex-1 sm:flex-none px-6 py-2 border border-outline text-primary-container rounded-md font-label-caps text-label-caps uppercase hover:bg-surface-container-low transition-colors">
                  Exportar CSV
                </button>
                <button class="flex-1 sm:flex-none px-6 py-2 bg-secondary-container text-on-secondary-container rounded-md font-label-caps text-label-caps uppercase hover:brightness-95 transition-all">
                  Publicar Selección
                </button>
              </div>
            </div>
            
            <div class="overflow-x-auto w-full">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-outline-variant bg-surface-container-low">
                    <th class="p-3 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase">ID</th>
                    <th class="p-3 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase">Dimensión</th>
                    <th class="p-3 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase">Dificultad</th>
                    <th class="p-3 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase">Estado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-surface-container-highest">
                  <tr class="hover:bg-surface-container-lowest transition-colors">
                    <td class="p-3 px-6 font-body-md text-body-md text-on-surface">Q-1042</td>
                    <td class="p-3 px-6 font-body-md text-body-md text-on-surface">Didáctica</td>
                    <td class="p-3 px-6">
                      <span class="inline-flex items-center px-1 py-1 rounded-full bg-error-container text-on-error-container font-label-caps text-label-caps">Alta</span>
                    </td>
                    <td class="p-3 px-6">
                      <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label-caps text-label-caps">
                        <span class="w-2 h-2 rounded-full bg-on-tertiary-container"></span> Publicado
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  `
})
export class AdminComponent {}
