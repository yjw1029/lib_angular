import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Toast} from 'ng-zorro-antd-mobile';
import {HttpResult} from '../../Interface/HttpResult';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
 returnForm: FormGroup;
  constructor(
    private httpservice: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private _toast: Toast
  ) { }

  ngOnInit() {
    this.returnForm = this.fb.group({
      'bid': [ null, [Validators.required] ],
    });
  }
  get bid() {return this.returnForm.get('bid'); }
  onSubmit() {
    for (const i in this.returnForm.controls) {
      if ( i in this.returnForm.controls) {
        this.returnForm.controls[ i ].markAsDirty();
        this.returnForm.controls[ i ].updateValueAndValidity();
      }
    }
    console.log(this.returnForm.value);
    const callback = (result: HttpResult) => {
      if (result.success) {
        const toast = Toast.info('还书成功', 1000);
      } else {
        const toast = Toast.fail('还失败', 1000);
      }
    };
    this.httpservice.return_book(this.returnForm.value, callback);
  }
}
