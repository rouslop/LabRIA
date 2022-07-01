import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { MateriaComponent} from './materia/materia.component'
import { AltaMateriaComponent} from './alta-materia/alta-materia.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'materia', component: MateriaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'altaMateria', component: AltaMateriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
