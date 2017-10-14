import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core/core.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

import { DasboardComponent } from './components/main/sub-components/dasboard/dasboard.component';
import { SettingsComponent } from './components/main/sub-components/settings/settings.component';
import { ProfileComponent } from './components/main/sub-components/profile/profile.component';
import { MembersComponent } from './components/main/sub-components/members/members.component';
import { PostComponent } from './components/main/sub-components/post/post.component';


import { AuthGuard } from './shared/guard/auth-guard.service';

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
        canActivate: [AuthGuard],
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
          },
          {
            path: 'profile',
            component: ProfileComponent,
          },
          {
            path: 'settings',
            component: SettingsComponent,
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
