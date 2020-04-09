import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  setUser(): void {
    this.http
      .get<User>('assets/user-seed.json')
      .subscribe(user => this.userSubject$.next(user));
  }

}
