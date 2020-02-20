import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, AfterViewInit, OnChanges } from '@angular/core';
import { Book } from '../book';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BookService } from '../book.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit, AfterViewInit, OnChanges {
  columns = ['id', 'title', 'author', 'category', 'price'];
  @Input() books: Book[];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.books);
    console.log(this.books);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.books);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
