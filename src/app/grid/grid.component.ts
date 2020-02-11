import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { Book } from "../book";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  columns = ['id', 'title', 'author', 'category', 'price'];
  @Input() books: Book[];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Book>(this.books);
    console.log(this.books)
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
