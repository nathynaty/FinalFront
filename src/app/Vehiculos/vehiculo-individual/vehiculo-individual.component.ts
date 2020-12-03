import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from 'src/app/api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-vehiculo-individual',
  templateUrl: './vehiculo-individual.component.html',
  styleUrls: ['./vehiculo-individual.component.css']
})
export class VehiculoIndividualComponent implements OnInit {

  vehiculo: any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let num_id = this.route.snapshot.params.id;
    console.log(num_id);
    this.ApiConnectionService.vehiculo_individual(num_id).subscribe(res => { this.convert_global_vehiculo(res) });
  }

  convert_global_vehiculo(datos: object){
    this.vehiculo = datos;
  }

  eliminar_vehiculo(){
    let num_id = this.route.snapshot.params.id;
    console.log(num_id);
    this.ApiConnectionService.eliminar_vehiculo(num_id).subscribe(res => { (res) });
  }

}
