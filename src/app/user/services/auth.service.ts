import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TOASTR_TOKEN } from '../../services/toastr.service';

import { IUser } from '../models/user.model';

import { JwtHelper } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
    currentUser: IUser;
    jwtHelper = new JwtHelper();
    redirectUrl: string;

    constructor(private http: Http, private router: Router, private route: ActivatedRoute, @Inject(TOASTR_TOKEN) private toastr: any) {}

    login(loginForm: NgForm) {
        let baseUrl = 'http://localhost:5555/api/account/login';
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this.http.post(baseUrl, JSON.stringify(loginForm.value), options)
                        .map((res: Response) => res.json())
                        .do((res) => {
                            let token = res['user_token'];
                            let dToken = this.jwtHelper.decodeToken(token);
                            let user: IUser = { userName: dToken['sub'], email: dToken['email'], user_token: token};
                            this.currentUser = user;
                            localStorage.setItem('user_token', token);
                        });
    }

    logout() {
    this.currentUser = null;
    localStorage.removeItem('user_token');
    this.toastr.info('See you soon Buddy!');
    this.router.navigate(['/welcome']);
  }

    checkAutenticationStatus() {
    let token = localStorage.getItem('user_token');
    if(token && !this.jwtHelper.isTokenExpired(token)){
      let dToken = this.jwtHelper.decodeToken(token);
      let user: IUser = {
        userName: dToken['sub'],
        email: dToken['email'],
        user_token: token
      };
      this.currentUser = user;
    }
  }
}   