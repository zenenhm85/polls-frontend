import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RightmodaluserComponent } from './rightmodaluser/rightmodaluser.component';
import { AddpollComponent } from './addpoll/addpoll.component';
import { InfopollComponent } from './infopoll/infopoll.component';
import { EditpollComponent } from './editpoll/editpoll.component';




@NgModule({
  declarations: [RightmodaluserComponent, AddpollComponent, InfopollComponent, EditpollComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RightmodaluserComponent,
    AddpollComponent,
    InfopollComponent,
    EditpollComponent
  ]
})
export class ComponentsModule { }
