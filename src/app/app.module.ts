import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { dbURL } from "../shared/dburl";
import { DishProvider } from "../providers/dish/dish";
import { LeaderProvider } from "../providers/leader/leader";
import { PromotionProvider } from "../providers/promotion/promotions";
import { dbURL } from '../shared/dburl';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    MenuPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    MenuPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DishProvider,
    PromotionProvider,
    LeaderProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: "DbURL", useValue: dbURL}
  ]
})
export class AppModule {}
