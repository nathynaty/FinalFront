import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-usuario-individual',
  templateUrl: './usuario-individual.component.html',
  styleUrls: ['./usuario-individual.component.css']
})
export class UsuarioIndividualComponent implements OnInit {
  usuario: any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let num_id = this.route.snapshot.params.id;
    console.log(num_id);
    this.ApiConnectionService.usuario_individual(num_id).subscribe(res => { this.convert_global_usuario(res) });
  }

  convert_global_usuario(datos: object){
    this.usuario = datos;
  }

  eliminar_usuario(){
    let num_id = this.route.snapshot.params.id;
    console.log(num_id);
    this.ApiConnectionService.eliminar_usuario(num_id).subscribe(res => { (res) });
  }

  
  
}
