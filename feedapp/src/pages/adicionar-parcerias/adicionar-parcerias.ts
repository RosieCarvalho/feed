import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Session } from '../../providers/sessao-service/sessao-service';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { Usuario } from '../../modelos/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HomePage } from '../home/home';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Categoria } from '../../modelos/categoria';

/**
 * Generated class for the AdicionarParceriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-adicionar-parcerias",
  templateUrl: "adicionar-parcerias.html"
})
export class AdicionarParceriasPage {
  public titulo: string = "";
  public legenda: string = "";
  public url_imagem: string = "";
  public telefone: string = "";
  public endereco: string = "";
  public base64Image: string;
  public usuarioLogado: Usuario;
  parceriaForm: FormGroup;
  public categorias;
  public catSelect ;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public session: Session,
    private camera: Camera,
    private _alertCtrl: AlertController,
    public _http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.parceriaForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      legenda: ["", Validators.required],
      telefone: ["", Validators.required],
      endereco : [""]
    });
  }

  ngOnInit(){
    this.listCategorias()
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

    this.session.get().then(res => {
      this.usuarioLogado = res;
      console.log(this.catSelect)
      let ben = {
        legenda: this.parceriaForm.value.legenda,
        url_imagem: this.parceriaForm.value.url_imagem,
        telefone: this.parceriaForm.value.telefone,
        endereco: this.parceriaForm.value.endereco,
        usuarios_id: this.usuarioLogado["id"],
        parceiros_id: this.catSelect
      };

      this._http.post("http://localhost:8080/parceiro/create", ben).subscribe(
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

  listCategorias(){
     this._http.get("http://localhost:8080/categorias").subscribe(
       dados => {
         this.categorias = dados;
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





  ionViewDidLoad() {
    console.log("ionViewDidLoad AdicionarParceriasPage");
  }
}
