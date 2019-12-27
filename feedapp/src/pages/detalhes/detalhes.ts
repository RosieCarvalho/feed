import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feed } from "../../modelos/feed";
/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  public feed: Feed;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feed = this.navParams.get('feedEscolha');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
