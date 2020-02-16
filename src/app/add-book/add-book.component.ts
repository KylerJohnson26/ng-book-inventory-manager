import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
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

}
