import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Materia } from 'src/app/models/materia';
import { Unidades } from 'src/app/models/unidades';
import { MateriaService } from 'src/app/services/materia.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-unidades',
  templateUrl: './alta-unidades.component.html',
  styleUrls: ['./alta-unidades.component.css']
})
export class AltaUnidadesComponent implements OnInit {
  materia = new Materia();
  materias: Materia[] = [];
  u = new Unidades();
  documento:any;
  selectedFile: string="";

  formUnidades = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    creditos: new FormControl('', [Validators.required,Validators.min(0)]),
    semestre: new FormControl('', [Validators.required,Validators.min(1),Validators.max(6)]),
    });

  constructor( public service: UnidadesService,public MateriaService:MateriaService,private router:Router ) { }

  ngOnInit(): void {
    this.getListMaterias();
  }

  agregarUnidad(){
    this.u.nombre =  this.formUnidades.controls["nombre"].value;
    this.u.descripcion =  this.formUnidades.controls["descripcion"].value;
    this.u.creditos =  this.formUnidades.controls["creditos"].value;
    this.u.materia = this.materia;
    this.u.previas = [];
    this.u.semestre = this.formUnidades.controls["semestre"].value;
    this.u.documento =this.documento ? this.documento : " ";
    this.service.addUnidades(this.u).subscribe({
      next: value => console.log(value),
      error: err => { this.alert('Error al agregar las unidades: ') }
    });
    this.router.navigate(['/unidades']);
  }

  getListMaterias() {
    this.MateriaService.getMaterias().subscribe({
      next: value => this.materias = value,
      error: err => { this.alert('Error al cargar la Unidades: ') }
    }
    );
  }

  selecsionarMateria(i:any,n:any,d:any,c: any) {
    this.materia.id=i;
    this.materia.nombre=n;
    this.materia.descripcion=d;
    this.materia.creditosMinimos=c;
  }

  onFileSelected(event: any): void {
    this.convertToBase64(event.target.files[0]);
  }

  convertToBase64(file: File) {
    console.log(file);
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
