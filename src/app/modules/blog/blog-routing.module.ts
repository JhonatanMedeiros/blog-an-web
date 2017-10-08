import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core/core.component';



const routes: Routes = [
  { path: '', component: CoreComponent, pathMatch: 'full' },
  // { path: 'new', component: UserFormComponent},
  // { path: 'edit/:id', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
