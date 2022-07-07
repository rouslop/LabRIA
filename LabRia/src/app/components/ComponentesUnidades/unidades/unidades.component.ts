import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Unidades} from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {
  
  Lunidades: Unidades[] = [];
  unidades: Unidades[] = [];
  token = localStorage.getItem('token');

  formUnidades = new FormGroup ({
    semestre: new FormControl('', [Validators.required,Validators.min(1),Validators.max(6)]),
    });

  constructor(public UnidadesSvc:UnidadesService,private router:Router) { }

  ngOnInit(): void {
    this.getListUnidades();
  }

  editarUnidad(x:any){
    this.UnidadesSvc.guardarUnidad(x);
    this.router.navigate(['/editarUnidad']);
  }
  verUnidad(x:any){
    this.UnidadesSvc.guardarUnidad(x);
    this.router.navigate(['/verunidad']);
  }
  getListUnidades() {
    this.UnidadesSvc.getUnidades().subscribe({
      next: value => {this.unidades = value,this.Lunidades=value},
      error: err => { this.alert('Error al cargar las materias: ' ) }
    }
    );
  }
  
  agregarPrevia(x: any){
    this.UnidadesSvc.guardarUnidad(x);
    this.router.navigate(['/agregarPrevia']);
  }

  selecsionarSemestre(){
    let p: Unidades[] = [];
    for (let i = 0; i < this.Lunidades.length; i++) {
      const e: Unidades = this.Lunidades[i];
      if(e.semestre ==  this.formUnidades.controls["semestre"].value){
        p.push(e);
      } }
      this.unidades=p;   
  }

  alert(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }
}
