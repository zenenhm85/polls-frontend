import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import {PollService} from '../../services/poll.service';
import { Poll } from '../../models/poll.model';

@Component({
  selector: 'app-editpoll',
  templateUrl: './editpoll.component.html',
  styles: [
  ]
})
export class EditpollComponent implements OnInit {

  @Input('idModal') idModal: string = '';
  @Input('poll') poll: Poll = new Poll('',[]); 
  @Input('answers') answers: string = '';
  

  constructor(private pollService: PollService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  savePoll(){
    this.pollService.updatePoll({question:this.poll.question, closed: this.poll.closed}, this.poll.id).subscribe(
      (resp:any) => {
        Swal.fire('Success!', 'Changes made successfully!', 'success');
      },
      (err) => {
        Swal.fire('Error', err.error.message, 'error');
      }
    );        
  }

}
