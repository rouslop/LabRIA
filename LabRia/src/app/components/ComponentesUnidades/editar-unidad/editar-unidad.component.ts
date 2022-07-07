import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Materia } from 'src/app/models/materia';
import { Unidades } from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';
import { MateriaService } from 'src/app/services/materia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-unidad',
  templateUrl: './editar-unidad.component.html',
  styleUrls: ['./editar-unidad.component.css']
})
export class EditarUnidadComponent implements OnInit {
  previa = new Unidades();
  previas: Unidades[] = [];
  previascargadas: Unidades[] = [];
  u = new Unidades();
  documento:any;
  selectedFile: string="";
  UP = new Unidades();

  formUnidades = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    creditos: new FormControl('', Validators.required),
    semestre: new FormControl('', Validators.required),
    });
  constructor(public service: UnidadesService,private router:Router) { }

  editarUnidad(){
    this.u.nombre =  this.formUnidades.controls["nombre"].value;
    this.u.descripcion =  this.formUnidades.controls["descripcion"].value;
    this.u.creditos =  this.formUnidades.controls["creditos"].value;
    this.u.documento = this.documento ? this.documento : " ";
    this.service.editarUnidad(this.u).subscribe({
      next: value => console.log(value),
      error: err => { this.alert('Error al agregar las unidad: ') }
    });
    this.router.navigate(['/unidades']);
  }

  
  getListPrevias() {
    this.service.getUnidades().subscribe({
      next: value => this.previas = value,
      error: err => { this.alert('Error al cargar las previas: ') }
    }
    );
  }

  selecsionarPrevia(i:any) {
    this.service.getunaUnidad(i).subscribe({
      next: value => this.UP = value,
      error: err => { this.alert('Error al cargar las previas: ') }
    });
    this.cargarunidad();
  }
  cargarunidad(){
    let esta : boolean = false;
    let aux : Unidades = new Unidades;
    if (this.UP.id != this.u.id){
     for (let i = 0; i < this.previascargadas.length; i++) {
      aux = this.previascargadas[i];
      console.log(aux.id);
      if (aux.id== this.UP.id) {
          esta=true;
      }
    }
    }else{
      esta=true;
    }
    if((esta == false && this.UP.id != undefined && this.u.id != undefined)){
        this.previascargadas.push(this.UP);
      }
      console.log(this.UP.id);
      console.log(this.previascargadas);
  }

  getUnidad(){
    this.service.getUnidad().subscribe({
      next: value => {this.u = value,this.documento=value.documento},
      error: err => { this.alert('Error al cargar las unidades: ') }
    }
    );
  }

  ngOnInit(): void {
    this.getUnidad();
    this.getListPrevias();
  }

  onFileSelected(event: any): void {
    this.convertToBase64(event.target.files[0]);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })

    observable.subscribe((d) => {
      this.documento = d;
      this.selectedFile = d.name;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      subscriber.next(fileReader.result)
      subscriber.complete()
    }
    fileReader.onerror = () => {
      subscriber.error()
    }
  }

  alert(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }
}
