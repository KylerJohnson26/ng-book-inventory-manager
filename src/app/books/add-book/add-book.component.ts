import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { SubComponentDirective } from '../../shared/directives/sub-component.directive';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent extends SubComponentDirective implements OnInit {

  addBookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private bookService: BookService
  ) { super(); }

  ngOnInit() {
    this.buildFormGroup();
  }

  connect() {
    console.log('connect method fired');
    return this.bookService.books$;
  }

  buildFormGroup(): void {
    this.addBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addBook(): void {
    if (this.addBookForm.invalid) {
      console.log('Invalid');
      return;
    }

    this.bookService.addNewBook(this.addBookForm.value);
  }

}
