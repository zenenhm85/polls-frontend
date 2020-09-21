import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import {PollService} from '../../services/poll.service';

@Component({
  selector: 'app-addpoll',
  templateUrl: './addpoll.component.html',
  styles: [
  ]
})
export class AddpollComponent implements OnInit {

  @Input('idModal') idModal: string = '';
  public answersList: Array<any> = [];

  public registerForm = this.fb.group(
    {
      question: ['', [Validators.required, Validators.minLength(2)]],
      answers: ['', [Validators.required, Validators.minLength(2)]],      
    }
  );

  constructor(private pollService: PollService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  savePoll(){
    
    const answersAux:string = this.registerForm.get('answers').value;   
    const questionAux:string = this.registerForm.get('question').value;
    const answersListAux = answersAux.split('\n');   
    
    if(questionAux.length < 2 || answersListAux.length < 2){
      Swal.fire('Error', 'You must ask a question and at least 2 answers', 'error');
      return;
    }     
    this.answersList = answersListAux.map(item=>{
      return {
        value:item,
        votes:0
      }
    });
    this.pollService.createPoll({question:questionAux, answers:this.answersList}).subscribe(
      (resp) => {    
        Swal.fire('Success', "Poll added successfully", 'success');
      },
      (err) => {        
        Swal.fire('Error', err.error.message, 'error');
      }
    );
  }

}
