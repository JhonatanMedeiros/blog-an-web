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
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule, DateAdapter, NativeDateAdapter, MAT_DATE_LOCALE
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
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
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
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: DateAdapter, useClass: NativeDateAdapter},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  declarations: []
})
export class MaterialModule { }
