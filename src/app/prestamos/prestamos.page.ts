import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credito } from '../models/credito.model';
import { Usuario } from '../models/usuario.model';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.page.html',
  styleUrls: ['./prestamos.page.scss'],
})
export class PrestamosPage implements OnInit {

  constructor(private dataService: ClientesService, private router: Router) { }

  creditos: Credito[] = []
  textoBuscar = ''
  usuarioUpdate: Usuario = null
  nombre = ''
  id: any = null;
  credito: Credito = null;

  ngOnInit() {
    this.dataService.obtenerTodosLosPrestamos().subscribe(creditos =>{
       this.creditos = creditos
    });
  }

}
