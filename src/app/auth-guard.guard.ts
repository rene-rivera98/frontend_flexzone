import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
		private router: Router,
	) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticated();
  }
  authenticated(): boolean {
		var credentials: any;
		if (localStorage.getItem("credentials")){
			credentials = localStorage.getItem("credentials")
      this.router.navigate(['admin']);
        return true;
		} else {
			this.router.navigate(['login']);
			return false;
		}
	}
}
