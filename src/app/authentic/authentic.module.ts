import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticRoutingModule } from './authentic-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { ShareModule } from '../share/share.module';
import { Signup2Component } from './signup2/signup2.component';
import { ToastComponent } from 'ng-zorro-antd-mobile';
import { Toast } from 'ng-zorro-antd-mobile';

@NgModule({
  imports: [
    CommonModule,
    AuthenticRoutingModule,
    ShareModule
  ],
  declarations: [SigninComponent, SignupComponent, Signup2Component],
  providers: [
    Toast,
  ],
  entryComponents: [ToastComponent],
})
export class AuthenticModule { }
