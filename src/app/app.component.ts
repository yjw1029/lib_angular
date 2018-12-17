import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {HttpService} from './http.service';
import {Toast} from 'ng-zorro-antd-mobile';
import {HttpResult} from './Interface/HttpResult';
import {UserInfoService} from './user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opened: boolean;
  status: boolean;
  kind: string;
  constructor(
    private location: Location,
    private httpservice: HttpService,
    private _toast: Toast,
    private info: UserInfoService
  ) { }

  ngOnInit() {
    this.status = this.info.status;
    this.kind = this.info.my_kind;
  }

  Back() {
    this.location.back();
    return;
  }
  logOut() {
    const callback = (result: HttpResult) => {
      if (result.success) {
        this.status = this.info.status = false;
        this.kind = '';
        this.info.mng_info = null;
        this.info.usr_info = null;
        Toast.info('您已成功登出', 1000);
      } else {
        Toast.info('登出失败', 1000);
      }
    };
    this.httpservice.logout(callback);
  }
  refresh() {
    this.status = this.info.status;
    this.kind = this.info.my_kind;
  }
}
