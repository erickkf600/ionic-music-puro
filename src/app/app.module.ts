import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicAudioModule, AudioProvider, WebAudioProvider, defaultAudioProviderFactory } from 'ionic-audio';
import { CUSTOM_ELEMENTS_SCHEMA } from '../../node_modules/@angular/compiler/src/core';

export function myCustomAudioProviderFactory() {
  return new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot({ provide: AudioProvider, useFactory: defaultAudioProviderFactory }), 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
