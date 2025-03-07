import { Component, OnInit } from '@angular/core';
import { Empleado } from './models/empleado.model'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empleados: Empleado[];

  constructor() {
    this.empleados = [];
  }

  onEmpleadoCreado($event) {
    this.empleados.push($event);
    console.log(this.empleados);
  }
}

