import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {SignstepService} from '../signstep.service';
import {MyErrorStateMatcher} from '../signup/signup.component';
import {HttpResult} from '../../Interface/HttpResult';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';
import { Toast } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css'],
})
export class Signup2Component implements OnInit {
  matcher = new MyErrorStateMatcher();
  infoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private signstep: SignstepService,
    private httpservice: HttpService,
    private router:  Router,
    private _toast: Toast,
  ) { }

  ngOnInit() {
    this.infoForm = this.fb.group({
      'realname': [ null, [ Validators.required, Validators.maxLength(20), ] ],
      'status': [ '其他', [ Validators.required, Validators.maxLength(10) ] ],
      'num': [  null, [ Validators.required, Validators.maxLength(30) ] ],
    });
  }

  get realname() {
    return this.infoForm.get('realname');
  }
  get status() {
    return this.infoForm.get('status');
  }
  get num() {
    return this.infoForm.get('num');
  }

  onSubmit() {
    for (const i in this.infoForm.controls) {
      if ( i in this.infoForm.controls) {
        this.infoForm.controls[ i ].markAsDirty();
        this.infoForm.controls[ i ].updateValueAndValidity();
      }
    }
    this.signstep.infostep2(this.infoForm.value);
    const flag = this.signstep.getflag();
    if (flag[0] === 1 && flag[1] === 1) {
      const userinfo = this.signstep.getinfo();
      const callback = (result: HttpResult) => {
        if (result.success) {
          console.log(result);
          this.router.navigateByUrl('/sign/in');
        } else {
          if (result.data.detail === 'email is duplicated') {
            Toast.fail('邮箱填写重复', 1000);
            this.router.navigateByUrl('/sign/in');
          } else if (result.data.detail === 'format invalid') {
            Toast.fail('格式错误', 1000);
          } else if (result.data.detail === 'data invalid') {
            Toast.fail('数值填写不合法错误', 1000);
          }
        }
      };
      this.httpservice.signup(userinfo, callback);
    } else {
      const toast = Toast.fail('信息未填写完毕', 1000);
      this.router.navigateByUrl('/sign/up');
    }
  }
}
