import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AuthService } from './services/auth.service';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService
  ]
})
export class UserModule { }
