import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { SignUpForm } from '../interfaces/signup.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { User } from '../models/user.model';

const url = environment.url;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User;

  constructor(private http: HttpClient, private router: Router) {}

  get id(): string {
    return this.user.id || '';
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }
  get headers() {
    return {
      headers: {
        'x-token': this.token,
      },
    };
  }
  createUser(formData: SignUpForm) {
    return this.http.post(`${url}/users`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }
  login(formData: LoginForm) {
    return this.http.post(`${url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  validateToken(): Observable<boolean> {
    return this.http.get(`${url}/login`, this.headers).pipe(
      map((resp: any) => {
        const { active, email, name, role, img = '', id } = resp.user;
        this.user = new User(active, name, email, '', img, id, role);
        localStorage.setItem('token', resp.token);
        return true;
      }),
      catchError((error) => of(false))
    );
  }
}
