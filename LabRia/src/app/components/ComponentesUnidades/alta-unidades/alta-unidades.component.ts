import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Unidades } from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-alta-unidades',
  templateUrl: './alta-unidades.component.html',
  styleUrls: ['./alta-unidades.component.css']
})
export class AltaUnidadesComponent implements OnInit {

  formUnidades = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    creditos: new FormControl('', Validators.required),
    });

  constructor( public service: UnidadesService) { }

  ngOnInit(): void {
  }

  agregarUnidad(){
    let u = new Unidades();
    u.nombre =  this.formUnidades.controls["nombre"].value;
    u.descripcion =  this.formUnidades.controls["destination"].value;
    u.creditos =  this.formUnidades.controls["creditos"].value;
    u.previas = [];
    u.materia = [];
    u.semestre = "";
    u.documento = "";
    this.service.addUnidades(u).subscribe({
      next: value => console.log(value),
      error: err => { alert('Error al agregar las noticias: ' + err) }
    });
  }

}
