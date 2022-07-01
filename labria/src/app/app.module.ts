import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/httpInterceptor';
import { HomeComponent } from './components/home/home.component';
import { MateriaComponent } from './components/ComponentesMateria/materia/materia.component';
import { AltaMateriaComponent } from './components/ComponentesMateria/alta-materia/alta-materia.component';
import { ModificarMateriaComponent } from './components/ComponentesMateria/modificar-materia/modificar-materia.component';
import { NoticiaComponent } from './components/ComponentesNoticia/noticia/noticia.component';
import { ModificarNoticiaComponent } from './components/ComponentesNoticia/modificar-noticia/modificar-noticia.component';
import { AltaNoticiaComponent } from './components/ComponentesNoticia/alta-noticia/alta-noticia.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NavComponent } from './components/nav/nav.component';

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
    InformacionComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
