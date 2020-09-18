import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesComponent } from '../pages/pages.component';


const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children:
          [
            { path: '', component: DashboardComponent },
                      
          ]
      },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
