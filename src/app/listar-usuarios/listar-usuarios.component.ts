import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  lista_usuarios: any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ApiConnectionService.lista_usuarios().subscribe(res => { this.convert_global_usuarios(res) });
  }


  convert_global_usuarios(dato: object){
    this.lista_usuarios = dato;
  }
}
