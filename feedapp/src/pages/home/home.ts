import { Component, ViewChild } from "@angular/core";
import { NavController, Slides, LoadingController, AlertController } from "ionic-angular";
import { DetalhesPage } from "../detalhes/detalhes";
import { AdicionarfeedPage } from "../adicionarfeed/adicionarfeed";
import { Feed } from "../../modelos/feed";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("slider") slider: Slides;
  page = "0";

  public feeds : Feed[];
  constructor(public navCtrl: NavController, private _http: HttpClient,
    private _loadingCtrl: LoadingController, private _alertCtrl: AlertController) {

    let loading = this._loadingCtrl.create({
      content: 'Aguarde o carregamento...'
    });

    loading.present();



    this._http.get<Feed[]>('http://localhost:8080/feeds').subscribe(
      (dados)=>{
          this.feeds = dados
          loading.dismiss();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        loading.dismiss();

        this._alertCtrl.create({
          title: 'Falha na conexão',
          subTitle: 'Não foi possível carregar a lista de carros. Tente novamente mais tarde.',
          buttons: [
            { text: 'Ok' }
          ]
        })
      }
      );

  }

  selectedTab(index) {
    this.slider.slideTo(index);
  }

  moveButton($event) {
    this.page = $event._snapIndex.toString();
  }

  openNavDetailsPage() {
    this.navCtrl.push(DetalhesPage);
  }

  openNavAddFeed() {
    this.navCtrl.push(AdicionarfeedPage);
  }
}
