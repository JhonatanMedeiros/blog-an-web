import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core/core.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

import { DasboardComponent } from './components/main/sub-components/dasboard/dasboard.component'
import { MembersComponent } from './components/main/sub-components/members/members.component'
import { PostComponent } from './components/main/sub-components/post/post.component';


const routes: Routes = [

  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            component: DasboardComponent,
          },
          {
            path: 'members',
            component: MembersComponent,
          },
          {
            path: 'post',
            component: PostComponent,
          }
        ]
      }
    ]
  },

  // { path: 'edit/:id', component: UserFormComponent,}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
