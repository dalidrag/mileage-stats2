/************************************************************/
import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';

import { AuthService }      from '../common/auth.service';
/************************************************************/

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (this.authService.loggedIn) { return Promise.resolve(true); }
    else {
      return this.authService.isLoggedIn().then(isLoggedIn => {
        if (isLoggedIn) {
          this.authService.loggedIn = true;
          return true;
        }
         else {
          this.authService.loggedIn = false;
          // Navigate to the login page with extras
          this.router.navigate(['landing', 'signIn']);
          return false;
         }
      });
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state);
  }
}