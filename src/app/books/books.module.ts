import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { EditBookComponent } from './edit-book/edit-book.component';



@NgModule({
  declarations: [EditBookComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class BooksModule { }
