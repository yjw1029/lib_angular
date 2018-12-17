import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Toast} from 'ng-zorro-antd-mobile';
import {HttpResult} from '../../Interface/HttpResult';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  bookForm: FormGroup;
  constructor(
    private httpservice: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private _toast: Toast
  ) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      'bname': [ null, [Validators.required] ],
      'bauthor': [ null, [Validators.required] ],
      'bpub': [null, [Validators.required]],
      'bkind': ['工科', [Validators.required]],
      'bplace': [null, [Validators.required]],
      'num': [1, Validators.required]
    });
  }
  get bname() { return this.bookForm.get('bname'); }
  get bpub() {return this.bookForm.get('bpub'); }
  get bauthor() {return this.bookForm.get('bauthor'); }
  get bkind() {return this.bookForm.get('bkind'); }
  get bplace() {return this.bookForm.get('bplace'); }
  get num() {return this.bookForm.get('num'); }

  onSubmit(): void {
    for (const i in this.bookForm.controls) {
      if ( i in this.bookForm.controls) {
        this.bookForm.controls[ i ].markAsDirty();
        this.bookForm.controls[ i ].updateValueAndValidity();
      }
    }
    console.log(this.bookForm.value);
    const callback = (result: HttpResult) => {
      if (result.success) {
        const toast = Toast.info('添加成功', 1000);
      } else {
        const toast = Toast.fail('添加失败', 1000);
      }
    };
    this.httpservice.add_books(this.bookForm.value, callback);
  }
}
