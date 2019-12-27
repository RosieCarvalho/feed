import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarParceriasPage } from './adicionar-parcerias';

@NgModule({
  declarations: [
    AdicionarParceriasPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarParceriasPage),
  ],
})
export class AdicionarParceriasPageModule {}
