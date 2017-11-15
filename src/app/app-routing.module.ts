import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  {
    path: 'blog',
    loadChildren: 'app/modules/blog/blog.module#BlogModule'
  },
  {
    path: 'adm',
    loadChildren: 'app/modules/adm/adm.module#AdmModule'
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', redirectTo: 'error?type=404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
