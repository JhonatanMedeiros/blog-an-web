import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';

import { CoreComponent } from './core/core.component';

import { LoginComponent } from './components/login/login.component';
import { DasboardComponent } from './components/main/sub-components/dasboard/dasboard.component';
import { MembersComponent } from './components/main/sub-components/members/members.component';
import { PostComponent } from './components/main/sub-components/post/post.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  imports: [
    CommonModule,
    AdmRoutingModule
  ],
  declarations: [
    CoreComponent,
    LoginComponent,
    MainComponent,
    DasboardComponent,
    MembersComponent,
    PostComponent,
  ]
})
export class AdmModule { }
