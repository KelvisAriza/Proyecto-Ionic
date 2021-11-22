import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {

  nombre = ''
  email = ''
  mensaje = ''


  constructor( private alert: AlertController) { }

  ngOnInit() {

  }


  enviarMensaje(){  
    var texto = ''
    if(this.nombre == '' || this.email == '', this.mensaje === ''){
       texto = 'Complete los campos!'
    }else{
      texto = 'Gracias por su commentario!'
    }
    this.alert.create({
      header: `${texto}`,
      buttons: ['Entendido']
    }).then(res =>{
      res.present()
    })
  
    }

}
