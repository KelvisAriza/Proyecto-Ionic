import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestamosPage } from './prestamos.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamosPage
  },
  {
    path: 'formulario-prestamo',
    loadChildren: () => import('./formulario-prestamo/formulario-prestamo.module').then( m => m.FormularioPrestamoPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then( m => m.ConsultasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamosPageRoutingModule {}
