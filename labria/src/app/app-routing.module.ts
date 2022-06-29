import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component'
import { MateriaComponent} from './components/materia/materia.component'
import { AltaMateriaComponent} from './components/alta-materia/alta-materia.component'
import { NoticiaComponent } from './components/noticia/noticia.component';
import { LoginComponent } from './components/login/login.component'
import { AltaNoticiaComponent } from './components/alta-noticia/alta-noticia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'materia', component: MateriaComponent },
  { path: 'altaMateria', component: AltaMateriaComponent },
  { path: 'noticia', component: NoticiaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'altaNoticia', component: AltaNoticiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
