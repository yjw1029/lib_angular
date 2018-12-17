import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {HttpResult} from '../../Interface/HttpResult';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Toast} from 'ng-zorro-antd-mobile';
import {pswdValidator} from '../../validators/pswdValidator';
import {Router} from '@angular/router';
import {UserInfoService} from '../../user-info.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
  autoFocus = { focus: true, date: new Date() };
  infoForm: FormGroup;
  pswdForm: FormGroup;
  mng_info: any;
  constructor(
    private httpservice: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private _toast: Toast,
    private info: UserInfoService,
  ) { }

  ngOnInit() {
    this.mng_info = this.info.mng_info;
    this.infoForm = this.fb.group({
      'Uno': [this.mng_info.Uno],
      'Uemail': [this.mng_info.Uemail],
      'Uid': [ this.mng_info.Uid, [ Validators.required, Validators.maxLength(20), ] ],
      'Uname': [ this.mng_info.Uname, [ Validators.required, Validators.maxLength(20), ] ],
      'Unum': [  this.mng_info.Unum, [ Validators.required, Validators.maxLength(30) ] ],
    });
    this.pswdForm =  this.fb.group( {
      'password': [ null, [ Validators.required, Validators.maxLength(40) ] ],
      'password2': [null, [Validators.required]],
    }, { validator: pswdValidator });
  }
  get Uemail() {return this.infoForm.get('Uemail'); }
  get Uno() {return this.infoForm.get('Uno'); }
  get Uid() {return this.infoForm.get('Uid'); }
  get Uname() {return this.infoForm.get('Uname'); }
  get Unum() {return this.infoForm.get('Unum'); }
  get password()  {return this.pswdForm.get('password'); }
  get password2() {return this.pswdForm.get('password'); }

  onSubmitInfo() {
    for (const i in this.infoForm.controls) {
      if ( i in this.infoForm.controls) {
        this.infoForm.controls[ i ].markAsDirty();
        this.infoForm.controls[ i ].updateValueAndValidity();
      }
    }
    const callback = (result: HttpResult) => {
      if (result.success) {
        this.mng_info.uid = this.Uid;
        this.mng_info.Uname = this.Uname;
        this.mng_info.Unum = this.Unum;
        this.info.mng_info = this.mng_info;
        Toast.info('修改成功', 1000);
      } else {
        Toast.fail('修改失败', 1000);
      }
    };
    this.httpservice.chmng_info(this.infoForm.value, callback);

  }
  onSubmitPswd() {
    for (const i in this.pswdForm.controls) {
      if ( i in this.pswdForm.controls) {
        this.pswdForm.controls[ i ].markAsDirty();
        this.pswdForm.controls[ i ].updateValueAndValidity();
      }
    }
    const callback = (result: HttpResult) => {
      if (result.success) {
        Toast.info('修改成功', 1000);
      } else {
        Toast.fail('修改失败', 1000);
      }
    };
    this.httpservice.chmng_pswd(this.pswdForm.value, callback);
  }
}
