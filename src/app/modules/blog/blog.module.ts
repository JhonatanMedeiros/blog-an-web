import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { CoreComponent } from './core/core.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [CoreComponent, PostComponent, DashboardComponent]
})
export class BlogModule { }
