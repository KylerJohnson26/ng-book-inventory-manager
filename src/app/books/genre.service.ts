import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genresSubject$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getGenres(): string[] {
    return this.genresSubject$.value;
  }

  setGenres(): void {
    // HttpClient HTTP action methods incorporate the RxJS take(1) operator
    // so that the observable completes when the first value is emitted
    // preventing any memory leaks
    this.http
      .get<string[]>('assets/genres-seed.json')
      .subscribe(genres => this.genresSubject$.next(genres));
  }
}
