import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import { UsersComponent } from './users/users.component';
import { PollsComponent } from './polls/polls.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    UsersComponent,
    PollsComponent,
    ProfileComponent,
    AccountSettingComponent,    
  ],
  exports:[
    PagesComponent,
    DashboardComponent,   
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
