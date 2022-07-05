import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Materia } from 'src/app/models/materia';
import { Unidades } from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';
import { MateriaService } from 'src/app/services/materia.service';

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
    this.u.previas =this.previascargadas;
    this.u.documento =this.documento ? this.documento : " ";
    this.service.editarUnidad(this.u).subscribe({
      next: value => console.log(value),
      error: err => { alert('Error al agregar las noticias: ' + err) }
    });
    this.router.navigate(['/unidades']);
  }

  
  getListPrevias() {
    this.service.getUnidades().subscribe({
      next: value => this.previas = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

  selecsionarPrevia(i:any) {
    this.service.getUnidad().subscribe({
      next: value => this.UP = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
    console.log(this.UP);
    this.previascargadas.push(this.UP);
  }

  getUnidad(){
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

}
