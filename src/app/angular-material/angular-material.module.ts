import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule { }
