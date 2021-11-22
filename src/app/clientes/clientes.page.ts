import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  albumes: any[] = []

  constructor() { }

  ngOnInit() { }

}
