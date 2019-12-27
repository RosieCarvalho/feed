import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aviso } from '../../modelos/aviso';

/**
 * Generated class for the DetalheAvisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-aviso',
  templateUrl: 'detalhe-aviso.html',
})
export class DetalheAvisoPage {
  public av: Aviso;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.av = this.navParams.get('av');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheAvisoPage');
  }

}
