import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarAvisoPage } from './adicionar-aviso';

@NgModule({
  declarations: [
    AdicionarAvisoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarAvisoPage),
  ],
})
export class AdicionarAvisoPageModule {}
