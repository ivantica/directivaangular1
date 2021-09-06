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
  //titulo:string="";
  mispasiones: any[];
  misemprendimientos:any[];
  misamores:any=[{"nombre":"Luz"},{"nombre":"Hernan"},{"nombre":"silverio"},{"nombre":"Liliana"}];
  constructor(){
    this.mispasiones=[
     {"titulo":"Java SPring Framework"},
     {"titulo":"ASP.NET Core"},
     {"titulo":"Angular JS"},
     {"titulo":"AWS Devops"},
     {"titulo":"Requerimientos de Software"},   
    ];
    this.misemprendimientos=[{titulo:"Empresa Experta en Desarrollo de Software con Java y ASP Net Core"},{titulo:"Empresa inmobiliaria experta en Inversiones en Zonas Rurales"},{titulo:"Plataforma de intermediación entre Productores y Clientes finales"}];
  }

  registrarUsuario(){
    this.registrado =true;
    this.mensaje = "usuario registrado correctamente";
  }

}
