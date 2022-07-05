import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component'
import { MateriaComponent} from './components/ComponentesMateria/materia/materia.component'
import { AltaMateriaComponent} from './components/ComponentesMateria/alta-materia/alta-materia.component'
import { NoticiaComponent } from './components/ComponentesNoticia/noticia/noticia.component';
import { LoginComponent } from './components/login/login.component'
import { AltaNoticiaComponent } from './components/ComponentesNoticia/alta-noticia/alta-noticia.component';
import{InformacionComponent} from './components/informacion/informacion.component';
import {UnidadComponent}from './components/ComponentesUnidades/unidad/unidad.component';
import {UnidadesComponent}from './components/ComponentesUnidades/unidades/unidades.component';
import { AltaUnidadesComponent } from './components/ComponentesUnidades/alta-unidades/alta-unidades.component';
import {ModificarMateriaComponent} from './components/ComponentesMateria/modificar-materia/modificar-materia.component';
import{ModificarNoticiaComponent} from'./components/ComponentesNoticia/modificar-noticia/modificar-noticia.component';
import { DocumentosComponent } from './components/ComponentesDocumento/documentos/documentos.component';
import { AltaDocumentosComponent } from './components/ComponentesDocumento/alta-documentos/alta-documentos.component';
import {EditarUnidadComponent} from'./components/ComponentesUnidades/editar-unidad/editar-unidad.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'materia', component: MateriaComponent },
  { path: 'altaMateria', component: AltaMateriaComponent },
  { path: 'noticia', component: NoticiaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'altaNoticia', component: AltaNoticiaComponent},
  { path: 'informacion', component: InformacionComponent},
  { path: 'editarMateria', component:ModificarMateriaComponent},
  { path: 'unidades', component: UnidadesComponent},
  { path: 'verunidad', component: UnidadComponent},
  { path: 'AltaUnidades', component: AltaUnidadesComponent},
  { path: 'modificarNoticia' , component: ModificarNoticiaComponent},
  { path: 'documentos' , component: DocumentosComponent},
  { path: 'altaDocumentos', component: AltaDocumentosComponent},
  { path:'editarunidad' , component: EditarUnidadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
