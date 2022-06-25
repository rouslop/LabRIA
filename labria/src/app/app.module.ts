import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MateriaComponent } from './materia/materia.component';
import { AltaMateriaComponent } from './alta-materia/alta-materia.component';
import { ModificarMateriaComponent } from './modificar-materia/modificar-materia.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ModificarNoticiaComponent } from './modificar-noticia/modificar-noticia.component';
import { AltaNoticiaComponent } from './alta-noticia/alta-noticia.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/httpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MateriaComponent,
    AltaMateriaComponent,
    ModificarMateriaComponent,
    NoticiaComponent,
    ModificarNoticiaComponent,
    AltaNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
