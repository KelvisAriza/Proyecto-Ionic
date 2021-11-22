import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPrestamoPageRoutingModule } from './formulario-prestamo-routing.module';

import { FormularioPrestamoPage } from './formulario-prestamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPrestamoPageRoutingModule
  ],
  declarations: [FormularioPrestamoPage]
})
export class FormularioPrestamoPageModule {}
