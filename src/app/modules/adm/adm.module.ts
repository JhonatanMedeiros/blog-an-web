import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../../material.module';

import { AdmRoutingModule } from './adm-routing.module';

import { AuthGuard } from './shared/guard/auth-guard.service';

import { CoreComponent } from './core/core.component';

import { MainComponent } from './components/main/main.component';

import { LoginComponent } from './components/login/login.component';
import { DasboardComponent } from './components/main/sub-components/dasboard/dasboard.component';
import { MembersComponent } from './components/main/sub-components/members/members.component';
import { PostComponent } from './components/main/sub-components/post/post.component';
import { AuthService } from './shared/services/auth.service';



@NgModule({
  imports: [
    CommonModule,
    AdmRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CoreComponent,
    LoginComponent,
    MainComponent,
    DasboardComponent,
    MembersComponent,
    PostComponent,
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AdmModule { }
