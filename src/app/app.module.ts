import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './books/grid/grid.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AddBookComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BooksModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
