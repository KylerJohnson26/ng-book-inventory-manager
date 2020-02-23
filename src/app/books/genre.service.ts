import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genresSubject$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  readonly genres$: Observable<string[]> = this.genresSubject$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getGenres(): Observable<string[]> {
    return this.genres$;
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
