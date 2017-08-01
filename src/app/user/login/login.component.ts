import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { TOASTR_TOKEN } from '../../services/toastr.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: NgForm;

  constructor(private auth: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: any) { }

  ngOnInit() {
  }

  loginUser(lf: NgForm) {
    this.auth.login(lf).subscribe(() => {
      this.toastr.success(`Welcome ${this.auth.currentUser.userName}!`);
      if(this.auth.redirectUrl) {
        this.router.navigateByUrl(this.auth.redirectUrl);
      } else {
      this.router.navigate(['/welcome']);
      }
    }, () => {
      this.toastr.error('Login Failed');
    });
  }

}
