import { Component, OnInit, Input } from '@angular/core';

import { Poll } from '../../models/poll.model';
@Component({
  selector: 'app-infopoll',
  templateUrl: './infopoll.component.html',
  styles: [
  ]
})
export class InfopollComponent implements OnInit {

  @Input('idModal') idModal: string = '';
  @Input('poll') poll: Poll = new Poll('',[]);

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
