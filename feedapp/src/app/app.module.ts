import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from "@ionic-native/camera";
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { AdicionarfeedPage } from '../pages/adicionarfeed/adicionarfeed';
import { AdicionarParceriasPage } from "../pages/adicionar-parcerias/adicionar-parcerias";
import { AdicionarAvisoPage } from '../pages/adicionar-aviso/adicionar-aviso';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { Session } from '../providers/sessao-service/sessao-service';
import { DetalheAvisoPage } from '../pages/detalhe-aviso/detalhe-aviso';


class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    });
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhesPage,
    AdicionarfeedPage,
    AdicionarAvisoPage,
    LoginPage,
    AdicionarParceriasPage,
    DetalheAvisoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhesPage,
    AdicionarfeedPage,
    AdicionarAvisoPage,
    LoginPage,
    AdicionarParceriasPage,
    DetalheAvisoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Camera, useClass: CameraMock },
    LoginServiceProvider,
    Session
  ]
})
export class AppModule {}
