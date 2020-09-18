import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,    
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
