import { Component, OnInit } from '@angular/core';
import { SubComponentDirective } from 'src/app/shared/directives/sub-component.directive';
import { BookService } from '../book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of, combineLatest, merge, scheduled } from 'rxjs';
import { tap, switchMap, map, withLatestFrom, filter, mergeAll } from 'rxjs/operators';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent extends SubComponentDirective implements OnInit {

  book$: Observable<Book>;
  editBookForm: FormGroup;
  filteredOptions$: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private genreService: GenreService,
    private router: Router,
    public fb: FormBuilder
  ) {
    super();
    this.buildEditBookForm();
  }

  ngOnInit() {

    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id');
        const book = this.bookService.getBookById(id);
        this.setEditBookFormDefaultValues(book);
        return of(book);
      })
    );

    this.filteredOptions$ = this.editBookForm.controls.genre.valueChanges.pipe(
      filter(genreInput => !!genreInput),
      withLatestFrom(this.genreService.genres$),
      map(([genre, genres]) => ({ genre, genres })),
      map(filterData => this.filterGenres(filterData.genre, filterData.genres)),
    );

  }

  // set form data with default values for the obok
  // we want to edit
  setEditBookFormDefaultValues(book: Book) {
    this.editBookForm.setValue({
      id: book.id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      price: book.price
    });
  }

  // initial edit book form
  // this is so we can subscribe to
  // the value changes of the genre
  buildEditBookForm(): void {
    this.editBookForm = this.fb.group({
      id: [0, Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  saveChanges(): void {
    const book: Book = this.editBookForm.value;
    this.bookService.updateBook(book);
    this.router.navigateByUrl('/');
  }

  private filterGenres(genre: string, genres: string[]): string[] {
    const filterValue = genre.toLowerCase();
    return genres.filter(option =>
        option.toLowerCase()
        .includes(filterValue)
    );
  }

}
