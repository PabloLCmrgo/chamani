import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'materia_prima',
        loadChildren: () => import('./component/materia-prima/materia-prima.module').then(m => m.MateriaPrimaModule)
      },
      {
        path: 'flujo_efectivo',
        loadChildren: () => import('./component/flujo-efectivo/flujo-efectivo.module').then(m => m.FlujoEfectivoModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./component/productos/productos.module').then(m => m.ProductosModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
