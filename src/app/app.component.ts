import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BookService } from './book.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';
import { Book } from './book';
import { tap, map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

}
