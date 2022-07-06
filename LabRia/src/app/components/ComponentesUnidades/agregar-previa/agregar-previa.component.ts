import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Previa } from 'src/app/models/previa';
import { Unidades } from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-agregar-previa',
  templateUrl: './agregar-previa.component.html',
  styleUrls: ['./agregar-previa.component.css']
})
export class AgregarPreviaComponent implements OnInit {
  previas: Unidades[] = [];
  previascargadas: Unidades[] = [];
  previa:Previa[] =[];
  u = new Unidades();
  p = new Previa();
  formUnidades = new FormGroup ({
    tipo: new FormControl('',Validators.required),
  })

  constructor(public service: UnidadesService, private router: Router) { }

  ngOnInit(): void {
    this.getUnidad();
    this.getListPrevias();
  }

  getUnidad() {
    this.service.getUnidad().subscribe({
      next: value => this.u = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

  getListPrevias() {
    this.service.getUnidades().subscribe({
      next: value => this.cargarltsa(value),
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

  cargarltsa(previas:Unidades[]){
    let p: Unidades[] = [];
    let bool :boolean = false;
    for (let i = 0; i < previas.length; i++) {
      const e = previas[i];
      if(e.id != this.u.id){
        for (let j = 0; j <this.u.previas.length; j) {
          const f = this.u.previas[j];
          if(f.previa.id == e.id){
            bool = true;
          }
        }
        if(bool== false){
          p.push(e);
        }else{
          bool = false;}
      }
    }
    this.previas = p;
  }

  agregarPrevia() {
    for (let i = 0; i < this.previa.length; i++) {
      const element :Previa = this.previa[i];
        this.service.agregarPrevia(element).subscribe({
        next: value => console.log(value),
        error: err => { alert('Error al cargar las materias: ' + err),console.log(err) }
      }
      );
    }
    console.log(this.previa);
    this.router.navigate(['/unidades']);
  }


  

  selecsionarPrevia(i: any) {
    this.service.getunaUnidad(i).subscribe({
      next: value => this.cargarunidad(value),
      error: err => { alert('Error al cargar las materias: ' + err) }
    });
  }

  cargarunidad(x:Unidades) {
    let esta: boolean = false;
    let auxP: Previa= new Previa;
    if (x.id != this.u.id) {
      for (let i = 0; i < this.u.previas.length; i++) {
        const element = this.u.previas[i];
        if(element.previa.id == x.id){
          esta = true;
        }
      }if(esta==false){
      for (let i = 0; i < this.previascargadas.length; i++) {
        const element = this.previascargadas[i];
        if (element.id == x.id) {
          esta = true;
        }}}
      } else {
      esta = true;
    }
    if ((esta == false && x.id != undefined && this.u.id != undefined)) {
      this.previascargadas.push(x);
      auxP.previa=x.id;
      auxP.unidadCurricular=this.u.id;
      auxP.tipo=this.formUnidades.controls["tipo"].value;
      this.previa.push(auxP);
    }
  }

 


}
