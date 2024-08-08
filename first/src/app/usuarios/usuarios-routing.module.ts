import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditarComponent} from "./pages/editar/editar.component";
import {RegistrarComponent} from "./pages/registrar/registrar.component";
import {GestionComponent} from "./pages/gestion/gestion.component";

const routes: Routes = [
  {
    path: 'editar',
    component: EditarComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'gestion',
    component: GestionComponent
  },
  {
    path: '**',
    redirectTo: 'gestion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {
}
