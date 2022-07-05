import { Component, OnInit } from '@angular/core';
import {Unidades} from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  unidades: Unidades[] = [];
  token = localStorage.getItem('token');

  constructor(public UnidadesSvc:UnidadesService) { }

  ngOnInit(): void {
  }

  editarUnidad(x:any){

  }
  verUnidad(x:any){
    
  }
  getListMaterias() {
    this.UnidadesSvc.getUnidades().subscribe({
      next: value => this.unidades = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

}
