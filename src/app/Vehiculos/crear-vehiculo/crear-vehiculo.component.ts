import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from 'src/app/api-connection.service';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  public marca: any; modelo: any; usuario_id: any; usuario_actualiza: any; color: any; placa: any;

  vehiculo: any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  crear_vehiculo(){

    let datos = {

      "marca": this.marca,
      "modelo": this.modelo,
      "usuario_id": this.usuario_id,
      "usuario_actualiza": this.usuario_actualiza,
      "color": this.color,
      "placa": this.placa
    }

    console.log(datos);
    this.ApiConnectionService.crear_vehiculo(datos).subscribe(resp => {this.save_variable_vehiculos(resp)});

  }

  save_variable_vehiculos(dato: object){
    this.vehiculo = dato;
  }


}
