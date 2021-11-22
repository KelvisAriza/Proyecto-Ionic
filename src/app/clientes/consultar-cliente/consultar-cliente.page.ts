import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { NavController, NavParams } from '@ionic/angular';
import { FormularioClientePage } from '../formulario-cliente/formulario-cliente.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.page.html',
  styleUrls: ['./consultar-cliente.page.scss'],
})
export class ConsultarClientePage implements OnInit {

  constructor(private dataService: ClientesService, private router: Router) { }

  usuarios: Usuario[] = []
  textoBuscar = ''
  usuarioUpdate: Usuario = null
  nombre = ''
  id: number;

  ngOnInit() {
    this.dataService.obtenerTodosLosClientes().subscribe(usuarios =>{
       this.usuarios = usuarios
    });
  }

  buscarUsuario(event){
    const texto = event.target.value
    this.textoBuscar = texto
  }
}
