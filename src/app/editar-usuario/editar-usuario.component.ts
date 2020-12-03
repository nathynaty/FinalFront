import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  email: any; nombre: any; password: any; telefono:any;
  usuario_id : any
  edit_user: any;
  num_id : any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.num_id = this.route.snapshot.params.id;
    this.ApiConnectionService.usuario_individual(this.num_id).subscribe(resp => {this.save_variable_data_usuarios(resp)});
  }

  save_variable_data_usuarios(resp_user: object){
    let u = JSON.stringify(resp_user);
    let a = JSON.parse(u);
    this.email = a.email;
    this.nombre = a.nombre;
    this.password = a.password;
    this.telefono = a.telefono;
  }

  editar_usuario(){
    let data = {
      "email": this.email,
      "nombre": this.nombre,
      "password": this.password,
      "telefono": this.telefono
    }

    console.log(data);
    this.ApiConnectionService.editar_usuario(this.num_id, data).subscribe(resp => {this.save_variable_editar_usuarios(resp)});

  }

  save_variable_editar_usuarios(dato: object){
    this.edit_user = dato;
  }

}
