import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from 'src/app/api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar-vehiculos',
  templateUrl: './editar-vehiculos.component.html',
  styleUrls: ['./editar-vehiculos.component.css']
})
export class EditarVehiculosComponent implements OnInit {

  marca: any; modelo: any; usuario_id: any; usuario_actualiza: any; color: any; placa: any;
  num_id : any;
  edit_vehiculo: any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.num_id = this.route.snapshot.params.id;
    this.ApiConnectionService.vehiculo_individual(this.num_id).subscribe(resp => {this.save_variable_data_vehiculos(resp)});
  }

  save_variable_data_vehiculos(resp_vehiculo: object){
    let u = JSON.stringify(resp_vehiculo);
    let a = JSON.parse(u);
    this.marca = a.marca;
    this.modelo = a.modelo;
    this.usuario_id = a.usuario_id;
    this.usuario_actualiza = a.usuario_actualiza;
    this.color = a.color;
    this.placa = a.placa;
  }

  editar_vehiculo(){
    let data = {
      "marca": this.marca,
      "modelo": this.modelo,
      "usuario_id": this.usuario_id,
      "usuario_actualiza": this.usuario_actualiza,
      "color": this.color,
      "placa": this.placa
    }

    console.log(data);
    this.ApiConnectionService.editar_vehiculo(this.num_id, data).subscribe(resp => {this.save_variable_editar_vehiculos(resp)});

  }

  save_variable_editar_vehiculos(dato: object){
    this.edit_vehiculo = dato;
  }

}
