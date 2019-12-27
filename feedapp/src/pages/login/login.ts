import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { HomePage } from '../home/home';
import { Login } from '../../modelos/login';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuario } from "../../modelos/usuario";
import { Session } from "../../providers/sessao-service/sessao-service";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public acesso   : Login[];
  public nome     : string = "";
  public senha    : string = "";
  public status   : string = "";
  public perfil   : string= "";
  public usuario  : Usuario;
  credentialsForm : FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loginService: LoginServiceProvider,
    private loginApi: LoginServiceProvider,
    private _alertCtrl: AlertController,
    public session: Session
  ) {
    this.credentialsForm = this.formBuilder.group({
      nome: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.session.remove();
  }

  login() {
    this.loginApi.login(this.nome, this.senha).subscribe(
      dados => {
        this.acesso = dados;
        this.criaSession();
      if (this.credentialsForm.valid) {
          this.navCtrl.setRoot(HomePage);
      }

      },
      (err: HttpErrorResponse) => {
        this._alertCtrl
          .create({
            title: "Aviso",
            buttons: [
              {
                text: "ok"
                /*   handler: () => {
                this.navCtrl.setRoot(HomePage);
              } */
              }
            ]
          })
          .setSubTitle("Usuário ou Senha erradas, tente novamente!")
          .present();
/*
        this._alertCtrl.create({
          title: "Falha na conexão",
          subTitle: "Erro. Tente novamente mais tarde.",
          buttons: [{ text: "Ok" }]
        }); */
      }
    );


  }

  criaSession() {
    this.session.create(this.nome,this.acesso['perfil'], this.acesso['id']);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
}


