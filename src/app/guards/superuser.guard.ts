import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SuperuserGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const accept:boolean = this.userService.user.role === "ADMIN_ROLE" || this.userService.user.role === "ADVUSER_ROLE";
      if(!accept){
        this.router.navigateByUrl('login');
      }
      return accept;
  }
  
}
