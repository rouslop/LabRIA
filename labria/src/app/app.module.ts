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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NavComponent } from './components/nav/nav.component';
import { UnidadesComponent } from './components/ComponentesUnidades/unidades/unidades.component';
import { AltaUnidadesComponent } from './components/ComponentesUnidades/alta-unidades/alta-unidades.component';
import { UnidadComponent } from './components/ComponentesUnidades/unidad/unidad.component';
import { DocumentosComponent } from './components/ComponentesDocumento/documentos/documentos.component';
import { AltaDocumentosComponent } from './components/ComponentesDocumento/alta-documentos/alta-documentos.component';
import { ModificarDocumentosComponent } from './components/ComponentesDocumento/modificar-documentos/modificar-documentos.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import { EditarUnidadComponent } from './components/ComponentesUnidades/editar-unidad/editar-unidad.component';
import {Spinerinterceptor} from './interceptors/spinerinterceptor';
import { InfocarreraComponent } from './components/ComponentesDocumento/infocarrera/infocarrera.component';
import { OplaboralesComponent } from './components/ComponentesDocumento/oplaborales/oplaborales.component';
import { DatosinteresComponent } from './components/ComponentesDocumento/datosinteres/datosinteres.component';
import { AgregarPreviaComponent } from './components/ComponentesUnidades/agregar-previa/agregar-previa.component';
import { NgbdModalConfirm } from'./components/ngbd-modal/ngbd-modal.component';
import { NgbdModalConfirmAutofocus } from './components/ngbd-modal/ngbd-modal.component';
import { NgbdModalFocus } from './components/ngbd-modal/ngbd-modal.component';

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
    DocumentosComponent,
    AltaDocumentosComponent,
    ModificarDocumentosComponent,
    SpinnerComponent,
    EditarUnidadComponent,
    InfocarreraComponent,
    OplaboralesComponent,
    DatosinteresComponent,
    AgregarPreviaComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: Spinerinterceptor ,multi: true },
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
