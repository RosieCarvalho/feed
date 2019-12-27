import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Feed } from "../../modelos/feed";
import { HttpClient    } from '@angular/common/http';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { DomSanitizer } from "@angular/platform-browser";
import { Session } from '../../providers/sessao-service/sessao-service';
import { Usuario } from '../../modelos/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the AdicionarfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-adicionarfeed",
  templateUrl: "adicionarfeed.html"
})
export class AdicionarfeedPage {
  public feed: Feed;
  public usuarioLogado : Usuario;
  public titulo: string     = "";
  public legenda: string    = "";
  public url_imagem: string = "";
  public base64Image: string;

  feedForm: FormGroup;

  constructor(
    public navCtrl      : NavController,
    public navParams    : NavParams,
    public _http        : HttpClient,
    private _alertCtrl  : AlertController,
    private camera      : Camera,
    public _DomSanitizer: DomSanitizer,
    public session      : Session,
    private formBuilder : FormBuilder,
  ) {
    this.feed = this.navParams.get("feed");

    this.feedForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      legenda: ["", Validators.required],
    });


  }

  openImageCamera() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }

  openImageGaleria() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }

  publicar() {

    var user : Usuario;
    this.session.get().then(res => {
      user = res;

    let feed = {
      titulo: this.titulo,
      legenda: this.legenda,
      url_imagem: this.url_imagem,
      usuarios_id: user['id']
    };

    this._http.post("http://localhost:8080/feed/create", feed).subscribe(
      () => {
        this._alertCtrl
          .create({
            title: "Aviso",
            buttons: [
              {
                text: "ok",
                handler: () => {
                  this.navCtrl.setRoot(HomePage);
                }
              }
            ]
          })
          .setSubTitle("Publicado")
          .present();
      },
      () => alert("deu errado")
    );
  });

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdicionarfeedPage");
  }
}
