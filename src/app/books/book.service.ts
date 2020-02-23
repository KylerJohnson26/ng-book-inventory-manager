import { Injectable } from '@angular/core';
import { from, of, Observable, BehaviorSubject } from 'rxjs';
import { Book } from './book';
import { findIndex } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public booksSubject$ = new BehaviorSubject([]);
  readonly books$: Observable<Book[]> = this.booksSubject$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    return this.books$;
  }

  setBooks(): void {
    // HttpClient HTTP action methods incorporate the RxJS take(1) operator
    // so that the observable completes when the first value is emitted
    // preventing any memory leaks
    this.http
      .get<Book[]>('assets/books-seed.json')
      .subscribe(books => this.booksSubject$.next(books));
  }

  getBookById(id: number): Book {
    const books = [...this.booksSubject$.value];
    return books.find(book => book.id === id);
  }

  updateBook(book: Book): void {
    const books = [...this.booksSubject$.value];
    const bookIndex = books.findIndex(bk => bk.id === book.id);
    books.splice(bookIndex, 1, book);
    this.booksSubject$.next(books);
  }

  addNewBook(newBook): void {
    const newBookId = this.generateNewBookId(this.booksSubject$.value);
    const bookToAdd = new Book(newBookId, newBook.title, newBook.author, newBook.category, +newBook.price);
    const currentBooks = [...this.booksSubject$.value, bookToAdd];
    console.log(currentBooks);
    this.booksSubject$.next(currentBooks);
  }

  private generateNewBookId(books: Book[]): number {
    return this.booksSubject$.value.length + 1;
  }

  deleteBook(id: number) {
    const booksWithoutDeletedBook = this.booksSubject$.value.filter(book => book.id !== id);
    this.booksSubject$.next(booksWithoutDeletedBook);
  }

}
