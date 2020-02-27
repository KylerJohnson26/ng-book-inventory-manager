import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddBookComponent } from './books/books/add-book/add-book.component';
import { EditBookComponent } from './books/books/edit-book/edit-book.component';


const routes: Routes = [
  { path: 'add', component: AddBookComponent },
  { path: 'edit/:id', component: EditBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
