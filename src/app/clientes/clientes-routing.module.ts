import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPage } from './clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage
  },
  {
    path: 'formulario-cliente',
    loadChildren: () => import('./formulario-cliente/formulario-cliente.module').then( m => m.FormularioClientePageModule)
  },
  {
    path: 'consultar-cliente',
    loadChildren: () => import('./consultar-cliente/consultar-cliente.module').then( m => m.ConsultarClientePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
