import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core/core.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';



const routes: Routes = [
  { path: '',
    component: CoreComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'post/:id', component: PostComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
