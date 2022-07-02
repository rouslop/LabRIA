import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Unidades } from 'src/app/models/unidades';

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

  constructor() { }

  ngOnInit(): void {
  }

  agregarUnidad(){
    let U = new Unidades();
    U.nombre =  this.formUnidades.controls["nombre"].value;
    U.nombre =  this.formUnidades.controls["destination"].value;
    U.nombre =  this.formUnidades.controls["creditos"].value;
  }

}
