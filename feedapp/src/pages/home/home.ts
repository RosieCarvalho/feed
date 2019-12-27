import { Component, ViewChild } from "@angular/core";
import { NavController, Slides, LoadingController, AlertController,ActionSheetController  } from "ionic-angular";
import { DetalhesPage } from "../detalhes/detalhes";
import { AdicionarfeedPage } from "../adicionarfeed/adicionarfeed";
import { AdicionarAvisoPage } from "../adicionar-aviso/adicionar-aviso";
import { Feed } from "../../modelos/feed";
import { Aviso} from "../../modelos/aviso";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Parceria } from "../../modelos/parcerias";
import { Session } from "../../providers/sessao-service/sessao-service";
import { Usuario } from "../../modelos/usuario";
import { AdicionarParceriasPage } from "../adicionar-parcerias/adicionar-parcerias";
import { DetalheAvisoPage } from "../detalhe-aviso/detalhe-aviso";




@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("slider") slider: Slides;
  page = "0";

  public feeds: Feed[];
  public avisos: Aviso[];
  public parcerias: Parceria[];
  public usuarioLogado: Usuario[];
  public permissao;
  public perfil: string = "";
  public cat;
  public catSelect;
  public filter = false;

  constructor(
    public navCtrl: NavController,
    private _http: HttpClient,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    public session: Session,
    public actionSheetCtrl: ActionSheetController
  ) {
    /* Chamada Api feeds */
    this.feedsApi();

    /* Chamada Api avisos */
    this.avisosApi();

    /* Chamada Api parcerias */
    this.parceriasApi();
  }

  //assim que o component existir capture a sseão do usuário
  ngOnInit() {
    this.session.get().then(res => {
      this.usuarioLogado = res;
      this.perfil = this.usuarioLogado["perfil"];

      if (this.perfil == "func") {
        console.log("funcionario logado");
        this.permissao = false;

        console.log(this.permissao);
      } else if (this.perfil == "admin") {
        this.permissao = true;

        console.log("admin logado");
        console.log(this.permissao);
      } else {
        console.log("capturou ninguem");
      }
    });
  }

  feedsApi() {
    let loading = this._loadingCtrl.create({
      content: "Aguarde o carregamento..."
    });

    loading.present();

    this._http.get<Feed[]>("http://localhost:8080/feeds").subscribe(
      dados => {
        this.feeds = dados;
        console.log(this.feeds["feeds"]);
        loading.dismiss();
      },
      (err: HttpErrorResponse) => {
        this._alertCtrl.create({
          title: "Falha na conexão",
          subTitle:
            "Não foi possível carregar a lista de carros. Tente novamente mais tarde.",
          buttons: [{ text: "Ok" }]
        });
      }
    );
  }

  avisosApi() {
    this._http.get<Aviso[]>("http://localhost:8080/avisos").subscribe(
      dados => {
        this.avisos = dados;
      },
      (err: HttpErrorResponse) => {
        console.log(err);

        this._alertCtrl.create({
          title: "Falha na conexão",
          subTitle:
            "Não foi possível carregar a lista de carros. Tente novamente mais tarde.",
          buttons: [{ text: "Ok" }]
        });
      }
    );
  }

  parceriasApi() {
    this._http.get<Parceria[]>("http://localhost:8080/parceiros").subscribe(
      dados => {
        this.parcerias = dados;
        console.log(this.parcerias);
      },
      (err: HttpErrorResponse) => {
        console.log(err);

        this._alertCtrl.create({
          title: "Falha na conexão",
          subTitle:
            "Não foi possível carregar a lista de carros. Tente novamente mais tarde.",
          buttons: [{ text: "Ok" }]
        });
      }
    );
  }

  /* FUNCOES DE FEEDS */
  openNavDetailsPage(feed: Feed) {
    this.navCtrl.push(DetalhesPage, { feedEscolha: feed });
  }

  openNavAddFeed(feed: Feed) {
    this.navCtrl.push(AdicionarfeedPage, { feed: feed });
  }

  /* FUNCOES DE AVISOS */

  openNavAddAviso() {

    this.navCtrl.push(AdicionarAvisoPage);
  }
  openNavAddParceria() {
    this.navCtrl.push(AdicionarParceriasPage);
  }
  openNavDetailsPageAviso(aviso: Aviso) {
    console.log(aviso)
    this.navCtrl.push(DetalheAvisoPage, { av: aviso });
  }

  /* FUNCOES DE Parcerias*/
  openNavCat() {
    this.filter = true;
    this._http.get("http://localhost:8080/categorias").subscribe(
      dados => {
        this.cat = dados;
      },
      (err: HttpErrorResponse) => {
        console.log(err);

        this._alertCtrl.create({
          title: "Falha na conexão",
          subTitle:
            "Não foi possível carregar a lista de carros. Tente novamente mais tarde.",
          buttons: [{ text: "Ok" }]
        });
      }
    );
  }

  OnfilterParceiros(){
    console.log('chamou');
    console.log(this.catSelect)
    this._http.get<Parceria[]>("http://localhost:8080/parceiros/filter/" + this.catSelect).subscribe(
      dados => {
        this.parcerias = dados["parceiros"];

        console.log(dados)
      },
      (err: HttpErrorResponse) => {
        console.log(err);

        this._alertCtrl.create({
          title: "Falha na conexão",
          subTitle:
            "Não foi possível carregar a lista de carros. Tente novamente mais tarde.",
          buttons: [{ text: "Ok" }]
        });
      }
    );
  }

}
