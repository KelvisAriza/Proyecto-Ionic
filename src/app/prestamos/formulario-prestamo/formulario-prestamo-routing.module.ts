import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioPrestamoPage } from './formulario-prestamo.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioPrestamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioPrestamoPageRoutingModule {}
