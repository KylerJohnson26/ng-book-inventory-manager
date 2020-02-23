import { Component, OnInit } from '@angular/core';
import { BookService } from './books/book.service';
import { Observable } from 'rxjs';
import { Book } from './books/book';
import { GenreService } from './books/genre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  books$: Observable<Book[]>;
  genres$: Observable<string[]>;

  constructor(
    private bookService: BookService,
    private genreService: GenreService
  ) {}

  ngOnInit() {
    // set initial state
    this.bookService.setBooks();
    this.genreService.setGenres();

    // initalize observables to pass along to
    // presentation components
    this.books$ = this.bookService.books$;
  }

}
