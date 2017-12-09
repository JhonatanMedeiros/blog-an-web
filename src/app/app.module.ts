import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { XHRBackend, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AdmModule } from './modules/adm/adm.module';
import { BlogModule } from './modules/blog/blog.module';

import { ErrorService } from './shared/services/local-services/error.service';
import { LoggingService } from './shared/services/local-services/logging.service';
import { ErrorComponent } from './shared/components/error/error.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderService } from './shared/components/loader/loader.service';
import { HttpService } from './shared/services/local-services/http.service';
import { httpServiceFactory } from './shared/http-service.factory';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoaderComponent
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
    MaterialModule,
    LoaderComponent
  ],
  providers: [
    ErrorService,
    LoggingService,
    LoaderService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, LoaderService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
