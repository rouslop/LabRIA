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
      next: value => this.cargarlitsa(value),
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

  cargarlitsa(x:Unidades[]){
    let p: Unidades[] = [];
    for (let i = 0; i < x.length; i++) {
      if (!this.u.estaEnPrevias(x[i])){
          p.push(x[i]);
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
    let error:string = "";
    let esta: boolean = false;
    let auxP: Previa= new Previa;
    if (x.id != this.u.id) {
      for (let i = 0; i < this.u.previas.length; i++) {
        const element = this.u.previas[i];
        if(element.previa.id == x.id){
          esta = true;
          error="esta unidad ya tiene esta previa";
        }
      }if(esta==false){
      for (let i = 0; i < this.previascargadas.length; i++) {
        const element = this.previascargadas[i];
        if (element.id == x.id) {
          esta = true;
          error="ya agregaste esta unidad"
        }}}
      } else {
      esta = true;
      error="Estas intentando agregar la misma unidad como previa";
    }
    if ((esta == false && x.id != undefined && this.u.id != undefined)) {
      this.previascargadas.push(x);
      auxP.previa=x.id;
      auxP.unidadCurricular=this.u.id;
      auxP.tipo=this.formUnidades.controls["tipo"].value;
      this.previa.push(auxP);
    }else{
      alert(error);
    }
  }

 


}
