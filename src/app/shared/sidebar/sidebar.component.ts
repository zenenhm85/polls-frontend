import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent{

  constructor(private userService:UserService) { }

  logout(){
    this.userService.logout();
  }

}
