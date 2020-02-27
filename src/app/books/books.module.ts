import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BooksComponent } from './books/books.component';
import { GridComponent } from './books/grid/grid.component';
import { AddBookComponent } from './books/add-book/add-book.component';



@NgModule({
  declarations: [
    EditBookComponent,
    BooksComponent,
    GridComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule { }
