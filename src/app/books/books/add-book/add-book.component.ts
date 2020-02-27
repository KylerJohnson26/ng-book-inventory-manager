import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../book.service';
import { SubComponentDirective } from '../../../shared/directives/sub-component.directive';
import { Observable } from 'rxjs';
import { GenreService } from '../../../shared/services/genre.service';
import { map, withLatestFrom, filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent extends SubComponentDirective implements OnInit {

  filteredOptions$: Observable<string[]>;
  addBookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private bookService: BookService,
    private genreService: GenreService
  ) { super(); }

  ngOnInit() {
    this.buildFormGroup();

    this.filteredOptions$ = this.addBookForm.controls.genre.valueChanges.pipe(
      filter(genreInput => !!genreInput),
      withLatestFrom(this.genreService.genres$),
      map(([genre, genres]) => ({ genre, genres })),
      map(filterData => this.filterGenres(filterData.genre, filterData.genres))
    );
  }

  connect() {
    return this.bookService.books$;
  }

  buildFormGroup(): void {
    this.addBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addBook(): void {
    if (this.addBookForm.invalid) {
      console.log('Add Book Form Invalid');
      return;
    }

    this.bookService.addNewBook(this.addBookForm.value);
    this.addBookForm.reset();
  }

  private filterGenres(genre: string, genres: string[]): string[] {
    const filterValue = genre.toLowerCase();
    return genres.filter(option =>
        option.toLowerCase()
        .includes(filterValue)
    );
  }

}
