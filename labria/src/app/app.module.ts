import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/httpInterceptor';
import { HomeComponent } from './components/home/home.component';
import { MateriaComponent } from './components/ComponentesMateria/materia/materia.component';
import { AltaMateriaComponent } from './components/ComponentesMateria/alta-materia/alta-materia.component';
import { ModificarMateriaComponent } from './components/ComponentesMateria/materia/modificar-materia/modificar-materia.component';
import { NoticiaComponent } from './components/ComponentesNoticia/noticia/noticia.component';
import { ModificarNoticiaComponent } from './components/ComponentesNoticia/modificar-noticia/modificar-noticia.component';
import { AltaNoticiaComponent } from './components/ComponentesNoticia/alta-noticia/alta-noticia.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NavComponent } from './components/nav/nav.component';
import { UnidadesComponent } from './components/unidades-curiculares/unidades/unidades.component';
import { AltaUnidadesComponent } from './components/unidades-curiculares/alta-unidades/alta-unidades.component';
import { UnidadComponent } from './components/unidades-curiculares/unidad/unidad.component';

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
    UnidadesComponent,
    AltaUnidadesComponent,
    UnidadComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
