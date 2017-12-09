import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { BlogRoutingModule } from './blog-routing.module';

import { PostService } from './shared/services/post.service';

import { CoreComponent } from './core/core.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule
  ],
  declarations: [
    CoreComponent,
    PostComponent,
    DashboardComponent
  ],
  providers: [
    PostService
  ]
})
export class BlogModule { }
