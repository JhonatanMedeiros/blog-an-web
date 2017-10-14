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
  MatGridListModule,
  MatDialogModule
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
    MatGridListModule,
    MatDialogModule
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
    MatGridListModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
