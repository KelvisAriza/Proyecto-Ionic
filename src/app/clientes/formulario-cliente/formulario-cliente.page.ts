import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.page.html',
  styleUrls: ['./formulario-cliente.page.scss'],
})
export class FormularioClientePage implements OnInit {

  id: any = null;
  usuario: Usuario = null;

  constructor(private activateRoute: ActivatedRoute, private dataService: ClientesService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("id");
    if (this.id != null) {
      // this.dataService.buscarClienteId(this.id).subscribe(usuario => {
      //   this.usuario = usuario
      // })
    }
  }

}
