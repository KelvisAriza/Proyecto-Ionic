import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'prestamos',
    loadChildren: () => import('./prestamos/prestamos.module').then( m => m.PrestamosPageModule)
  },
  {
    path: 'facturacion',
    loadChildren: () => import('./facturacion/facturacion.module').then( m => m.FacturacionPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./soporte/soporte.module').then( m => m.SoportePageModule)
  },

  {
    path: 'formulario/:id',
    loadChildren: () => import('./clientes/formulario-cliente/formulario-cliente.module').then( m => m.FormularioClientePageModule)
  },

  {
    path: 'consultas',
    loadChildren: () => import('./prestamos/consultas/consultas.module').then( m => m.ConsultasPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
