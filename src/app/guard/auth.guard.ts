import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        public router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let loginStatus = sessionStorage.getItem('login');
        if (loginStatus === 'true') {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}