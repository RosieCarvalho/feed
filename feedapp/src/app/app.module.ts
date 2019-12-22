import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { AdicionarfeedPage } from '../pages/adicionarfeed/adicionarfeed';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FeedServiceProvider } from '../providers/feed-service/feed-service';

@NgModule({
  declarations: [MyApp, HomePage, DetalhesPage, AdicionarfeedPage],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, DetalhesPage, AdicionarfeedPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FeedServiceProvider
  ]
})
export class AppModule {}
