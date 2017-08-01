import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store/store.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { TOASTR_PROVIDER } from './services/toastr.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    StoreModule,
    UserModule
  ],
  providers: [
    TOASTR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
