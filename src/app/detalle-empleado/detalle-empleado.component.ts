import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  @Input() detalleEmp: Empleado;


  constructor() { }

  ngOnInit(): void {
  }

}
