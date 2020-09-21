import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { GetPolls } from '../interfaces/get-poll.interface';
import { AddPollForm } from '../interfaces/add-poll.interface';
import { EditPollForm } from '../interfaces/edit-poll.interface';
import { environment } from '../../environments/environment';
import { Poll } from '../models/poll.model';

const url = environment.url;
@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private http: HttpClient, private router: Router) {}

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

  getPolls(start: number = 0, limit: number = 10) {
    const route = `${url}/polls?start=${start}&limit=${limit}`;

    return this.http.get<GetPolls>(route, this.headers).pipe(
      map((resp) => {
        const polls = resp.polls.map((poll) => {
          return new Poll(poll.question, poll.answers, poll.closed, poll.id);
        });

        return {
          total: resp.total,
          polls,
        };
      })
    );
  }
  getPollsAll() {
    const route = `${url}/polls`;

    return this.http.get<GetPolls>(route, this.headers).pipe(
      map((resp) => {
        const polls = resp.polls.map((poll) => {
          return new Poll(poll.question, poll.answers, poll.closed, poll.id);
        });

        return {
          total: resp.total,
          polls,
        };
      })
    );
  }
  
  deletePoll(id: string) {
    const route = `${url}/polls/${id}`;
    return this.http.delete(route, this.headers);
  }
  createPoll(formData: AddPollForm) {
    return this.http.post(`${url}/polls`, formData,this.headers);
  }
  updatePoll(formData: EditPollForm, id:string){
    return this.http.put(`${url}/polls/${id}`, formData,this.headers);
  }
  searchPolls(search: string, limit: number) {
    const route = `${url}/search/polls/${search}?limit=${limit}`;

    return this.http.get<GetPolls>(route, this.headers).pipe(
      map((resp) => {
        const polls = resp.polls.map((poll) => {
          return new Poll(poll.question, poll.answers, poll.closed, poll.id);
        });

        return {
          total: resp.total,
          polls,
        };
      })
    );
  }
}
