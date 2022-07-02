import { Component, OnInit } from '@angular/core';
import {Unidades} from 'src/app/models/unidades';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  Unidades: Unidades[] = [];
  token = localStorage.getItem('token');

  constructor() { }

  ngOnInit(): void {
  }

}
