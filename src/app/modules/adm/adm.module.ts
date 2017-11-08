import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { MatDialog } from '@angular/material';


import { MaterialModule } from '../../material.module';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AdmRoutingModule } from './adm-routing.module';

import { AuthGuard } from './shared/guard/auth-guard.service';

import { CoreComponent } from './core/core.component';

import { MainComponent } from './components/main/main.component';

import { LoginComponent } from './components/login/login.component';
import { DasboardComponent } from './components/main/sub-components/dasboard/dasboard.component';
import { MembersComponent } from './components/main/sub-components/members/members.component';
import { PostComponent } from './components/main/sub-components/post/post.component';
import { AuthService } from './shared/services/auth.service';
import { ProfileComponent } from './components/main/sub-components/profile/profile.component';
import { SettingsComponent } from './components/main/sub-components/settings/settings.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { PostsListComponent } from './components/main/sub-components/posts-list/posts-list.component';
import { PostService } from './shared/services/post.service';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AdmRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    CoreComponent,
    LoginComponent,
    MainComponent,
    DasboardComponent,
    MembersComponent,
    PostComponent,
    ProfileComponent,
    SettingsComponent,
    DialogComponent,
    PostsListComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    AuthService,
    PostService,
    AuthGuard,
    MatDialog
  ]
})
export class AdmModule { }
