import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Toast} from 'ng-zorro-antd-mobile';
import {HttpResult} from '../../Interface/HttpResult';

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.css']
})
export class LendComponent implements OnInit {
  lendForm: FormGroup;
  constructor(
    private httpservice: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private _toast: Toast
  ) { }

  ngOnInit() {
    this.lendForm = this.fb.group({
      'bid': [ null, [Validators.required] ],
    });
  }
  get bid() {return this.lendForm.get('bid'); }
  onSubmit() {
    for (const i in this.lendForm.controls) {
      if ( i in this.lendForm.controls) {
        this.lendForm.controls[ i ].markAsDirty();
        this.lendForm.controls[ i ].updateValueAndValidity();
      }
    }
    console.log(this.lendForm.value);
    const callback = (result: HttpResult) => {
      if (result.success) {
        const toast = Toast.info('借书成功', 1000);
      } else {
        const toast = Toast.fail(result.data.detail, 1000);
      }
    };
    this.httpservice.lend_book(this.lendForm.value, callback);
  }

}
