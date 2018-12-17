import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {Toast} from 'ng-zorro-antd-mobile';
import {Router} from '@angular/router';
import {UserInfoService} from '../../user-info.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {pswdValidator} from '../../validators/pswdValidator';
import {HttpResult} from '../../Interface/HttpResult';

@Component({
  selector: 'app-chang-info',
  templateUrl: './chang-info.component.html',
  styleUrls: ['./chang-info.component.css']
})
export class ChangInfoComponent implements OnInit {
  autoFocus = { focus: true, date: new Date() };
  infoForm: FormGroup;
  pswdForm: FormGroup;
  usr_info: any;
  constructor(
    private httpservice: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private _toast: Toast,
    private info: UserInfoService,
  ) { }

  ngOnInit() {
    this.usr_info = this.info.usr_info;
    this.infoForm = this.fb.group({
      'Uno': [this.usr_info.Uno],
      'Uemail': [this.usr_info.Uemail],
      'Uid': [ this.usr_info.Uid, [ Validators.required, Validators.maxLength(20), ] ],
      'Uname': [ this.usr_info.Uname, [ Validators.required, Validators.maxLength(20), ] ],
      'Unum': [  this.usr_info.Unum, [ Validators.required, Validators.maxLength(30) ] ],
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
        this.usr_info.uid = this.Uid;
        this.usr_info.Uname = this.Uname;
        this.usr_info.Unum = this.Unum;
        this.info.usr_info = this.usr_info;
        Toast.info('修改成功', 1000);
      } else {
        Toast.fail('修改失败', 1000);
      }
    };
    this.httpservice.chusr_info(this.infoForm.value, callback);

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
    this.httpservice.chusr_pswd(this.pswdForm.value, callback);
  }
}
