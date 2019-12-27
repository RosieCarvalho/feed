import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheAvisoPage } from './detalhe-aviso';

@NgModule({
  declarations: [
    DetalheAvisoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheAvisoPage),
  ],
})
export class DetalheAvisoPageModule {}
