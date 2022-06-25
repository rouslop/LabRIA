import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { MateriaComponent } from './materia/materia.component';
import { AltaMateriaComponent } from './alta-materia/alta-materia.component';
import { ModificarMateriaComponent } from './modificar-materia/modificar-materia.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ModificarNoticiaComponent } from './modificar-noticia/modificar-noticia.component';
import { AltaNoticiaComponent } from './alta-noticia/alta-noticia.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/httpInterceptor';
=======
import { HomeComponent } from './components/home/home.component';
import { MateriaComponent } from './components/materia/materia.component';
import { AltaMateriaComponent } from './components/alta-materia/alta-materia.component';
import { ModificarMateriaComponent } from './components/modificar-materia/modificar-materia.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { ModificarNoticiaComponent } from './components/modificar-noticia/modificar-noticia.component';
import { AltaNoticiaComponent } from './components/alta-noticia/alta-noticia.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> d1ded6c9adb3e629ad4be883e1d91daf7b97699b

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MateriaComponent,
    AltaMateriaComponent,
    ModificarMateriaComponent,
    NoticiaComponent,
    ModificarNoticiaComponent,
    AltaNoticiaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
=======
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
>>>>>>> d1ded6c9adb3e629ad4be883e1d91daf7b97699b
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
