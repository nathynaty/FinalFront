import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(public http: HttpClient) { }

  url = "https://frozen-chamber-04694.herokuapp.com/";

  crear_usuarios(data_user: any) { 
    return this.http.post(this.url+"usuarios",(data_user));
  }

  lista_usuarios(){
    return this.http.get(this.url+'usuarios');
  }

  usuario_individual(num_id: any){
    return this.http.get(this.url+'usuarios/' + num_id);
  }

  editar_usuario(usuario_id: any, data:any){
    return this.http.put(this.url+"usuarios/" + usuario_id, (data));
  }

  eliminar_usuario(user_id: any){
    return this.http.delete(this.url+"usuarios/" + user_id);
  }

  crear_vehiculo(datos_vehiculo: any){
    return this.http.post(this.url+"vehiculos",(datos_vehiculo));
  }

  listar_vehiculos(){
    return this.http.get(this.url+'vehiculos');
  }

  vehiculo_individual(num_id: any){
    return this.http.get(this.url+'vehiculos/' + num_id);
  }

  eliminar_vehiculo(user_id: any){
    return this.http.delete(this.url+"vehiculos/" + user_id);
  }

  editar_vehiculo(usuario_id: any, data:any){
    return this.http.put(this.url+"vehiculos/" + usuario_id, (data));
  }
}
