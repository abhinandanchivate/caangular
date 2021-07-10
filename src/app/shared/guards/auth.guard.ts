import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import validateToken from 'src/app/utils/validateToken';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // can we validate the token or not?
    console.log('inside the guard');
    const result = validateToken();
    console.log(result);
    if (validateToken()) {
      return true;
    } else {
      // redirect to login.

      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
