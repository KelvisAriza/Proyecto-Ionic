import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Credito } from '../models/credito.model';

import { delay } from 'rxjs/operators';
import { Factura } from '../models/facturas.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url ='http://127.0.0.1:3000/'

  constructor(private http: HttpClient) { }

  
  obtenerTodosLosClientes() {
    return this.http.get<Usuario[]>(`${this.url}getAll_clientes`);
  }

  obtenerTodosLosPrestamos() {
    return this.http.get<Credito[]>(`${this.url}getAll_creditos`);
  }

  obtenerTodosLosPagos() {
    return this.http.get<Factura[]>(`${this.url}getAll_pagos`);
  }
  
}
