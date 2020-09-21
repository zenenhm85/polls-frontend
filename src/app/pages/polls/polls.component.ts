import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { Poll } from '../../models/poll.model';
import { UserService } from '../../services/user.service';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styles: [],
})
export class PollsComponent implements OnInit {
  public loading: boolean = true;
  public quantityShow: number = 10;
  public pages: number[] = [];
  public currentPage: number = 1;
  public total: number;
  public searching: boolean = false;

  public polls: Poll[] = [];
  public poll: Poll = new Poll('',[]);
  public userLogin: User;
  public answers: Array<any> = [];
  

  constructor(
    private userService: UserService,
    private pollService: PollService
  ) {}

  ngOnInit(): void {
    this.userLogin = this.userService.user;
    this.getPolls(0, 10, true, 1);
  }
  formPages(currentPage) {
    this.currentPage = currentPage;
    this.pages = [];

    let totalPages = Math.floor(this.total / this.quantityShow) + 1;

    if (this.total % this.quantityShow === 0) {
      totalPages = this.total / this.quantityShow;
    }

    for (let i = 1; i <= totalPages; i++) {
      this.pages.push(i);
    }
  }
  getPolls(start: number, limit: number, page: boolean, currentPage: number) {
    this.pollService.getPolls(start, limit).subscribe(({ total, polls }) => {
      this.loading = false;
      this.total = total;
      this.polls = polls;
      if (page) {
        this.formPages(currentPage);
      }
    });
  }

  deletePoll() {
    this.pollService.deletePoll(this.poll.id).subscribe((resp) => {
      if (this.polls.length == 1) {
        this.currentPage--;
        this.pages.pop();
      }      
      const start: number = this.quantityShow * (this.currentPage - 1);
      const limit: number = this.quantityShow;
      this.getPolls(start, limit, true,this.currentPage);
    });
  }
  
  getPoll(poll: Poll) {
    this.poll = poll;
  }
  changeQuantity() {
    this.getPolls(0, this.quantityShow, true, 1);
  }

  changePreviousNext(value: number) {
    const change: boolean =
      this.currentPage + value <= this.pages.length &&
      this.currentPage + value >= 1;

    if (change) {
      this.currentPage += value;
      this.getPolls(
        this.quantityShow * (this.currentPage - 1),
        this.quantityShow,
        false,
        1
      );
    }
  }
  changePage(value: number) {
    this.currentPage = value;
    this.getPolls(
      this.quantityShow * (this.currentPage - 1),
      this.quantityShow,
      false,
      1
    );
  }
  searchPoll(item: string) {
    if (item.length < 1) {
      this.searching = false;
      this.getPolls(0, this.quantityShow, true, 1);
    } else {
      this.searching = true;
      this.pollService
        .searchPolls(item, this.quantityShow)
        .subscribe(({ total, polls }) => {
          this.loading = false;
          this.total = total;
          this.polls = polls;
        });
    }
  }
}
