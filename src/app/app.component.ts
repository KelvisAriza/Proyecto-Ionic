import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'paper-plane' },
    { title: 'Portal de Clientes', url: 'clientes', icon: 'people' },
    { title: 'Prestamos', url: 'prestamos', icon: 'cash' },
    { title: 'Facturación', url: 'facturacion', icon: 'clipboard' },
    { title: 'Soporte', url: 'soporte', icon: 'settings' },
  ];

}
