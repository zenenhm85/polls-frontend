import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { Poll } from '../../models/poll.model';
import { UserService } from '../../services/user.service';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  public polls: Poll[] = [];
  public total: number = 0;
  public user: User = this.userService.user;

  constructor(
    private userService: UserService,
    private pollService: PollService
  ) {}

  ngOnInit(): void {    
    this.getPolls();
  }
  getPolls() {
    this.pollService.getPollsAll().subscribe(({ total, polls }) => {
      this.total = total;
      this.polls = polls;      
    });
  }
}
