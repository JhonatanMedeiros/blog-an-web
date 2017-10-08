import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { AdmRoutingModule } from './adm-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdmRoutingModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class AdmModule { }
