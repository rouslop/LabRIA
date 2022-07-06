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
  UP = new Unidades();
  p = new Previa();
  formUnidades = new FormGroup ({
    tipo: new FormControl('',Validators.required),
  })

  constructor(public service: UnidadesService, private router: Router) { }

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
    //this.router.navigate(['/unidades']);
  }


  getListPrevias() {
    this.service.getUnidades().subscribe({
      next: value => this.previas = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

  selecsionarPrevia(i: any) {
    this.service.getunaUnidad(i).subscribe({
      next: value => this.UP = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    });
    this.cargarunidad();
  }

  cargarunidad() {
    let esta: boolean = false;
    let aux: Unidades = new Unidades;
    let auxP: Previa= new Previa;
    if (this.UP.id != this.u.id) {
      for (let i = 0; i < this.previascargadas.length; i++) {
        aux = this.previascargadas[i];
        console.log(aux.id);
        if (aux.id == this.UP.id) {
          esta = true;
        }
      }
    } else {
      esta = true;
    }
    if ((esta == false && this.UP.id != undefined && this.u.id != undefined)) {
      this.previascargadas.push(this.UP);
      auxP.previa=this.UP.id;
      auxP.unidadCurricular=this.u.id;
      auxP.tipo=this.formUnidades.controls["tipo"].value;
      this.previa.push(auxP);
      
    }
    console.log(this.UP.id);
    console.log(auxP);
    console.log(this.previascargadas);
  }

  getUnidad() {
    this.service.getUnidad().subscribe({
      next: value => this.u = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

  ngOnInit(): void {
    this.getUnidad();
    this.getListPrevias();
  }


}
