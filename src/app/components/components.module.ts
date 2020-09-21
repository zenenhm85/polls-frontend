import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RightmodaluserComponent } from './rightmodaluser/rightmodaluser.component';
import { AddpollComponent } from './addpoll/addpoll.component';
import { InfopollComponent } from './infopoll/infopoll.component';
import { EditpollComponent } from './editpoll/editpoll.component';
import { CardvoteComponent } from './cardvote/cardvote.component';




@NgModule({
  declarations: [RightmodaluserComponent, AddpollComponent, InfopollComponent, EditpollComponent, CardvoteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RightmodaluserComponent,
    AddpollComponent,
    InfopollComponent,
    EditpollComponent,
    CardvoteComponent
  ]
})
export class ComponentsModule { }
