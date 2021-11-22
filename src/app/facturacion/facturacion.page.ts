import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from '../models/facturas.model';
import { Usuario } from '../models/usuario.model';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.page.html',
  styleUrls: ['./facturacion.page.scss'],
})
export class FacturacionPage implements OnInit {

  constructor(private dataService: ClientesService, private router: Router) { }

  facturas: Factura[] = []
  textoBuscar = ''
  usuarioUpdate: Usuario = null
  nombre = ''
  id: number;

  ngOnInit() {
    this.dataService.obtenerTodosLosPagos().subscribe(facturas =>{
       this.facturas = facturas
    });
  }

  buscarUsuario(event){
    const texto = event.target.value
    this.textoBuscar = texto
  }

}
