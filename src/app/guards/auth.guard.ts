import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UserService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      return this.userService.validateToken()
      .pipe(
        tap(isAuthenticate=>{
          if(!isAuthenticate){
            this.router.navigateByUrl('login');
          }
        })
      );
  }
  
}
