import { Component, OnInit } from '@angular/core';
import { SubComponentDirective } from 'src/app/shared/directives/sub-component.directive';
import { BookService } from '../book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent extends SubComponentDirective implements OnInit {

  book$: Observable<Book>;
  editBookform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    public fb: FormBuilder
  ) { super(); }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return of(+params.get('id'));
      }),
      map((id: number) => {
        const book = this.bookService.getBookById(id);
        this.buildEditBookForm(book);
        return book;
      })
    );
  }

  buildEditBookForm(book: Book): void {
    this.editBookform = this.fb.group({
      id: [book.id, Validators.required],
      title: [book.title, Validators.required],
      author: [book.author, Validators.required],
      category: [book.category, Validators.required],
      price: [book.price, Validators.required]
    });
  }

  saveChanges(): void {
    const book: Book = this.editBookform.value;
    this.bookService.updateBook(book);
  }

}
