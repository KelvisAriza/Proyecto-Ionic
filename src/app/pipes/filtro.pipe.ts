import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: Usuario[], texto: string = ''): Usuario[] {
    
    if(texto.length === 0){return usuarios;}
    
    texto = texto.toLocaleLowerCase()

    const nuevosUsuarios = usuarios.filter(usuario => {
       return usuario.nombre_completo.toLocaleLowerCase().includes(texto) || usuario.email.toLocaleLowerCase().includes(texto);
    })

    return nuevosUsuarios
  }

}
