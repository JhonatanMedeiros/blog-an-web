import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatInputModule,
  MatCardModule,
  MatProgressBarModule,
  MatListModule,
  MatExpansionModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
