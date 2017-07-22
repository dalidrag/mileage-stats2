/***********************************************************/
import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AuthService }      from '../common/auth.service';
/***********************************************************/

@Injectable()
export class SignedInGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.authService.loggedIn) {
      this.router.navigate(['/dashboard']);
      return Observable.of(false);
    }
    else {
      return Observable.of(true);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }
}