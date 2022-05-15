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
  empresa="Markarian & Co.";
  /*cambiaEmpresa( event : Event){
    this.empresa=(<HTMLInputElement> event.target).value;
  }*/

  //getEdad(){
    //return this.edad;
  //}
  habilitacionCuadro=false;

  usuarioRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuarioRegistrado=false;
  }

  setUsuarioRegistrado(event : Event){
    //alert("El usuario se acaba de registrar");
    //this.textoDeRegistro="El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value =="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    } else{
      this.textoDeRegistro="No hay nadie registrado";
    }


  }

  constructor() { }

  ngOnInit(): void {
  }

}
