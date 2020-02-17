import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.buildFormGroup();
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
