import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { TOASTR_TOKEN } from '../../services/toastr.service';

import { IUser } from '../models/user.model';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, 
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: any) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    if(this.auth.currentUser) return true;
    this.auth.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}