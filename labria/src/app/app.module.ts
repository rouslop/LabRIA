import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
