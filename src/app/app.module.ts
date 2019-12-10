import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ChatComponent } from './components/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRouting } from './app.route';
import { AngularFireModule } from '@angular/fire'
import {AngularFirestoreModule } from '@angular/fire/firestore'
import { from } from 'rxjs';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    appRouting, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
