import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { UsuarioIndividualComponent } from './usuario-individual/usuario-individual.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearVehiculoComponent } from './Vehiculos/crear-vehiculo/crear-vehiculo.component';
import { ListarVehiculosComponent } from './Vehiculos/listar-vehiculos/listar-vehiculos.component';
import { EditarVehiculosComponent } from './Vehiculos/editar-vehiculos/editar-vehiculos.component';
import { VehiculoIndividualComponent } from './Vehiculos/vehiculo-individual/vehiculo-individual.component';
import { CrearPropietariosComponent } from './Propietarios/crear-propietarios/crear-propietarios.component';
import { EditarPropietariosComponent } from './Propietarios/editar-propietarios/editar-propietarios.component';
import { ListarPropietariosComponent } from './Propietarios/listar-propietarios/listar-propietarios.component';
import { PropietarioIndividualComponent } from './Propietarios/propietario-individual/propietario-individual.component';
import { CrearReparacionComponent } from './Reparaciones/crear-reparacion/crear-reparacion.component';
import { EditarReparacionComponent } from './Reparaciones/editar-reparacion/editar-reparacion.component';
import { ListarReparacionesComponent } from './Reparaciones/listar-reparaciones/listar-reparaciones.component';
import { ReparacionIndividualComponent } from './Reparaciones/reparacion-individual/reparacion-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    UsuarioIndividualComponent,
    EditarUsuarioComponent,
    UsuariosComponent,
    CrearVehiculoComponent,
    ListarVehiculosComponent,
    EditarVehiculosComponent,
    VehiculoIndividualComponent,
    CrearPropietariosComponent,
    EditarPropietariosComponent,
    ListarPropietariosComponent,
    PropietarioIndividualComponent,
    CrearReparacionComponent,
    EditarReparacionComponent,
    ListarReparacionesComponent,
    ReparacionIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
