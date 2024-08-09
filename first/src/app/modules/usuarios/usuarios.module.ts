import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuariosRoutingModule} from './usuarios-routing.module';
import {EditarComponent} from "./pages/editar/editar.component";
import {RegistrarComponent} from "./pages/registrar/registrar.component";
import {GestionComponent} from "./pages/gestion/gestion.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule {
}
