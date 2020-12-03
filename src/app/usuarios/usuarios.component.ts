import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  public email: any; nombre: any; password: any; telefono:any;

  usuarios: any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) {}

  ngOnInit(): void {}

  crear_usuario (){

    let data = {
      "email": this.email,
      "nombre": this.nombre,
      "password": this.password,
      "telefono": this.telefono
    }

    console.log(data);
    this.ApiConnectionService.crear_usuarios(data).subscribe(resp => {this.save_variable_usuarios(resp)});
    
  }
  save_variable_usuarios(dato: object){
    this.usuarios = dato;
  }
}
