import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer formulario con Git y Angular';
  registrado=false;
  mensaje="";
  nombre:string="";
  apellido:string="";

  registrarUsuario(){
    this.registrado =true;
    this.mensaje = "usuario registrado correctamente";
  }

}
