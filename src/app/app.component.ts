import { Component, OnInit } from '@angular/core';
import { BookService } from './books/book.service';
import { Observable } from 'rxjs';
import { Book } from './books/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.setBooks();
    this.books$ = this.bookService.books$;
  }

}
