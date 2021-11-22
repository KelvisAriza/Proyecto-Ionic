import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  valor_prestamo = 0
  intereses = 0
  numero_cuotas = 0
  valor_prestamo_porcentaje = 0
  porcentaje = 0
  total = 0

  constructor( public alertController: AlertController) { }

  ngOnInit() {
  }

  calcularValor(){
    var texto = ''
    if(this.valor_prestamo  == 0 || this.numero_cuotas == 0){
       texto = 'Valores invalidos'
    }else{
      this.total = this.valor_prestamo / this.numero_cuotas
      texto = `El valor es  : ${Math.round(this.total).toString()}`
    }
    this.alertController.create({
      header: `${texto}`,
      buttons: ['Entendido']
    }).then(res =>{
      res.present()
    })

    this.valor_prestamo = 0
    this.numero_cuotas = 0
  }

  calcularPorcentaje(){  
  var texto = ''
  if(this.valor_prestamo_porcentaje == 0 || this.porcentaje == 0){
     texto = 'Valores invalidos'
  }else{
    const value = this.porcentaje  * this.valor_prestamo_porcentaje
    this.total = value  / 100
    texto = `El valor es  : ${Math.round(this.total).toString()}`
  }
  this.alertController.create({
    header: `${texto}`,
    buttons: ['Entendido']
  }).then(res =>{
    res.present()
  })
  this.valor_prestamo_porcentaje = 0
  this.porcentaje = 0

  }

}
