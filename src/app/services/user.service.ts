import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap} from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { SignUpForm } from '../interfaces/signup.interface';
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
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token )
      })
    );
  }
}
