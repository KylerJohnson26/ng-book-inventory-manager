import { Component, OnInit } from '@angular/core';
import { GenreService } from './../../shared/services/genre.service';
import { BookService } from './../book.service';
import { Observable } from 'rxjs';
import { Book } from './../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

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
