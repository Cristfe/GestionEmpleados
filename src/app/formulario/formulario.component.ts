import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  @Output() empleadoCreado: EventEmitter<Empleado>;

  nuevoEmpleado: Empleado;


  constructor() {
    this.nuevoEmpleado = new Empleado();
    this.empleadoCreado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.nuevoEmpleado);
    this.empleadoCreado.emit(this.nuevoEmpleado);
    this.nuevoEmpleado = new Empleado();
  }

}
