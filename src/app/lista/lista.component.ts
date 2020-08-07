import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() arrEmpleados: Empleado[];

  constructor() {
    this.arrEmpleados = [];
  }

  ngOnInit(): void {

  }
}
