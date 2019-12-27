import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Aviso } from '../../modelos/aviso';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { DomSanitizer } from "@angular/platform-browser";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Session } from '../../providers/sessao-service/sessao-service';
import { Usuario } from '../../modelos/usuario';
/**
 * Generated class for the AdicionarAvisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-adicionar-aviso",
  templateUrl: "adicionar-aviso.html"
})
export class AdicionarAvisoPage {
  public aviso: Aviso;
  public titulo: string = "";
  public legenda: string = "";
  public url_imagem: string = "";
  private _alerta;
  public base64Image: string;
  public usuarioLogado: Usuario;
  avisoForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _http: HttpClient,
    private _alertCtrl: AlertController,
    private camera: Camera,
    public session: Session,
    private formBuilder: FormBuilder
  ) {
    this.aviso = this.navParams.get("aviso");
    this.avisoForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      legenda: [""],
      url_imagem:[""]
    });
  }

  publicar() {
    this.session.get().then(res => {
      this.usuarioLogado = res;
      let aviso = {
        legenda: this.avisoForm.value.legenda,
        url_imagem: this.avisoForm.value.url_imagem,
        titulo: this.avisoForm.value.titulo,
        usuarios_id: this.usuarioLogado["id"]
      };

      this._http.post("http://localhost:8080/avisos/create", aviso).subscribe(
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

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdicionarAvisoPage");
  }
}
