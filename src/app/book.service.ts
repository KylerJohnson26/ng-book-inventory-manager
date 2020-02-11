import { Injectable } from '@angular/core';
import { from, of, Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly books: Book[] = [{
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



  constructor() { }
}
