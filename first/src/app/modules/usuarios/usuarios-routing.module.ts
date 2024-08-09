import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'editar',
    loadComponent: () => import('./pages/editar/editar.component').then(m => m.EditarComponent)
  },
  {
    path: 'registrar',
    loadComponent: () => import('./pages/registrar/registrar.component').then(m => m.RegistrarComponent)
  },
  {
    path: 'gestion',
    loadComponent: () => import('./pages/gestion/gestion.component').then(m => m.GestionComponent)
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
