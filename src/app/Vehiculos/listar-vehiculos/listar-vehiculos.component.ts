import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from 'src/app/api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {

  lista_vehiculos: any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ApiConnectionService.listar_vehiculos().subscribe(res => { this.convert_global_vehiculos(res) });
  }

  convert_global_vehiculos(dato: object){
    this.lista_vehiculos = dato;
  }

}
