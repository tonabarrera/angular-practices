import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GestionRoutingModule} from './gestion-routing.module';
import {PrincipalComponent} from './pages/principal/principal.component';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
