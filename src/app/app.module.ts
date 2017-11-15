import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AdmModule } from './modules/adm/adm.module';
import { BlogModule } from './modules/blog/blog.module';

import { ErrorService } from './shared/services/local-services/error.service';
import { LoggingService } from './shared/services/local-services/logging.service';
import { ErrorComponent } from './shared/components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    BlogModule,
    AdmModule,
    AppRoutingModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    ErrorService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
