import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";
  apellido="Díaz";
  edad=25;
  //private edad=18;
  //empresa="Píldoras informáticas";

  //getEdad(){
    //return this.edad;
  //}
  habilitacionCuadro=false;
  usuarioRegistrado=false;

  getRegistroUsuario(){
    this.usuarioRegistrado=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
