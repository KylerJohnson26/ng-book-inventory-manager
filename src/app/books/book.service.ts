import { Injectable } from '@angular/core';
import { from, of, Observable, BehaviorSubject } from 'rxjs';
import { Book } from './book';
import { findIndex } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public booksSubject$ = new BehaviorSubject([]);
  readonly books$: Observable<Book[]> = this.booksSubject$.asObservable();

  private books: Book[] = [{
    id: 1,
    title: 'Dao De Jing',
    author: 'Laozi',
    category: 'Philosophy',
    price: 50.00
  }, {
    id: 2,
    title: 'Avesta',
    author: 'Zoroaster',
    category: 'Religious, Philosophy',
    price: 50.00
  }, {
    id: 3,
    title: 'The Great Learning',
    author: 'Zhu Xi',
    category: 'Philosophy',
    price: 50.00
  }, {
    id: 4,
    title: 'The Agamas',
    author: 'Rishabhanatha',
    category: 'Religious, Philosophy',
    price: 50.00
  }, {
    id: 5,
    title: 'Origin',
    author: 'Dan Brown',
    category: 'Mystery',
    price: 50.00
  }, {
    id: 6,
    title: 'Angels & Demons',
    author: 'Dan Brown',
    category: 'Mystery',
    price: 50.00
  }, {
    id: 7,
    title: 'The Atlantis Gene',
    author: 'A.G. Riddle',
    category: 'Sci-Fi',
    price: 50.00
  }, {
    id: 8,
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    category: '',
    price: 100.00
  }];


  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  setBooks(): void {
    this.booksSubject$.next(this.books);
  }

  getBookById(id: number): Book {
    return this.booksSubject$.value.find(book => book.id = id);
  }

  updateBook(book: Book): void {
    const books = [...this.booksSubject$.value];
    const bookIndex = books.findIndex(bk => bk.id = book.id);
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
    return this.books.length + 1;
  }

  deleteBook(id: number) {
    const booksWithoutDeletedBook = this.booksSubject$.value.filter(book => book.id !== id);
    this.booksSubject$.next(booksWithoutDeletedBook);
  }

  constructor() { }
}
