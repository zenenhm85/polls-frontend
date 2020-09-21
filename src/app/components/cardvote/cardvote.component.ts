import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';

import { VoteService } from '../../services/vote.service';
import { User } from '../../models/user.model';
import { Poll } from '../../models/poll.model';
import {  Vote } from '../../models/vote.model';

@Component({
  selector: 'app-cardvote',
  templateUrl: './cardvote.component.html',
  styles: [
  ]
})
export class CardvoteComponent implements OnInit {

  @Input('poll') poll: Poll = new Poll('',[]); 
  @Input('user') user: User = new User(true,'','');
  public edited:boolean = false;
  public readyVote = false;
  public vote = new Vote();

  constructor(private voteService:VoteService) { }

  ngOnInit(): void {
    this.isEdited();
  }
  isEdited(){     
    this.voteService.getResult(this.user.id, this.poll.id).subscribe((resp:any)=>{
      this.edited = resp.edited; 
      if(resp.id != 0){
        this.readyVote = true;
      }         
    });
  }
  Vote(){
    this.voteService.createVote({poll:this.poll.id, user:this.user.id, vote:this.vote.vote}).subscribe(
      (resp) => {    
        this.edited = false;
        this.readyVote = true;
      },
      (err) => {        
        Swal.fire('Error', 'Server Error', 'error');
      }
    );
  }

  
}


