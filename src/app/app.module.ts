import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PerfilAsistenciaComponent } from './perfil-asistencia/perfil-asistencia.component';
import {AsistenciaService} from './asistencia.service';
import {HttpModule} from '@angular/http';
import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    PerfilAsistenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    QRCodeModule,
],
providers:[AsistenciaService],
bootstrap: [AppComponent]
})
export class AppModule { }
