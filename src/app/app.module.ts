import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {PagesModule} from './pages/pages.module';
import {AuthModule} from './auth/auth.module';


import { AppComponent } from './app.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';



@NgModule({
  declarations: [
    AppComponent,
    NotfoundpageComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }