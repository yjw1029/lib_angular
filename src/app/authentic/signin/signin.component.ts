import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpResult} from '../../Interface/HttpResult';
import { Router } from '@angular/router';
import { Toast } from 'ng-zorro-antd-mobile';
import {UserInfoService} from '../../user-info.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    private httpservice: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private _toast: Toast,
    private info: UserInfoService,
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      'email': [ null ],
      'password': [ null ],
      'status': ['user', [Validators.required]],
    });
  }

  onSubmit(): void {
    for (const i in this.validateForm.controls) {
      if ( i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
        this.validateForm.controls[ i ].updateValueAndValidity();
      }
    }
    console.log(this.validateForm.value);
    const callback = (result: HttpResult) => {
      if (result.success) {
        this.info.status = true;
        if (this.status.value === 'mng') {
          this.info.mng_info = result.data;
          this.info.my_kind = 'mng';
          this.router.navigateByUrl('/manege/index');
        } else {
          this.info.my_kind = 'usr';
          this.info.usr_info = result.data;
          this.router.navigateByUrl('/usr/index');
        }
      } else {
        const toast = Toast.fail('邮箱或密码填写错误', 1000);
      }
    };
    this.httpservice.signin(this.validateForm.value, callback);
  }
  get email() {
    return this.validateForm.get('email');
  }
  get password() {
    return this.validateForm.get('password');
  }
  get status() {
    return this.validateForm.get('status');
  }
}
