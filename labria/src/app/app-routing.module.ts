import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component'
import { MateriaComponent} from './components/ComponentesMateria/materia/materia.component'
import { AltaMateriaComponent} from './components/ComponentesMateria/alta-materia/alta-materia.component'
import { NoticiaComponent } from './components/ComponentesNoticia/noticia/noticia.component';
import { LoginComponent } from './components/login/login.component'
import { AltaNoticiaComponent } from './components/ComponentesNoticia/alta-noticia/alta-noticia.component';
import{InformacionComponent} from './components/informacion/informacion.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'materia', component: MateriaComponent },
  { path: 'altaMateria', component: AltaMateriaComponent },
  { path: 'noticia', component: NoticiaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'altaNoticia', component: AltaNoticiaComponent},
  { path: 'informacion', component: InformacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
