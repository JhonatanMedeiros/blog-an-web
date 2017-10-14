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
  MatExpansionModule
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
    MatExpansionModule
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
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
