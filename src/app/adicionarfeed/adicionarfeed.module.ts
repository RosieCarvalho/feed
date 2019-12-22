import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarfeedPage } from './adicionarfeed';

@NgModule({
  declarations: [
    AdicionarfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarfeedPage),
  ],
})
export class AdicionarfeedPageModule {}
