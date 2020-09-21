import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { GetResult } from '../interfaces/get-result.interface'
import {AddVoteForm} from '../interfaces/add-vote.interface';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

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

  getResult(user:string, poll:string){
    const route = `${url}/vote/result`;  
    
    return this.http.post<GetResult>(route,{user,poll} ,this.headers);

  }
  createVote(formData: AddVoteForm) {
    return this.http.post(`${url}/vote`, formData,this.headers);
  }
}
