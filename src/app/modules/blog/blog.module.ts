import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { CoreComponent } from './core/core.component';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [CoreComponent]
})
export class BlogModule { }
