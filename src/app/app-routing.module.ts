import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { UsuarioIndividualComponent } from './usuario-individual/usuario-individual.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearVehiculoComponent } from './Vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculosComponent } from './Vehiculos/editar-vehiculos/editar-vehiculos.component';
import { ListarVehiculosComponent } from './Vehiculos/listar-vehiculos/listar-vehiculos.component';
import { VehiculoIndividualComponent } from './Vehiculos/vehiculo-individual/vehiculo-individual.component';

const routes: Routes = [
  {
    path: 'crear-usuarios',
    component: UsuariosComponent
  },
  {
    path: 'lista-usuarios',
    component: ListarUsuariosComponent
  },
  {
    path: 'usuario/:id',
    component: UsuarioIndividualComponent
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'crear-vehiculos',
    component: CrearVehiculoComponent
  },
  {
    path: 'editar-vehiculo/:id',
    component: EditarVehiculosComponent
  },
  {
    path: 'lista-vehiculos',
    component: ListarVehiculosComponent
  },
  {
    path: 'vehiculo/:id',
    component: VehiculoIndividualComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
