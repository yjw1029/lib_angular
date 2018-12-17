import { Injectable } from '@angular/core';

class UserSignin {
  username: string;
  password: string;
  email: string;
  realname: string;
  status: string;
  num: string;
}
@Injectable({
  providedIn: 'root'
})
export class SignstepService {
  private _info =  new UserSignin();
  private flag = [0, 0];
  constructor(
  ) { }
  infostep1(parama: any) {
    this._info.username = parama.username;
    this._info.email = parama.email;
    this._info.password = parama.password;
    this.flag[0] = 1;
  }
  infostep2(parama: any) {
    this._info.realname = parama.realname;
    this._info.num = parama.num;
    this._info.status = parama.status;
    this.flag[1] = 1;
    return;
  }
  getflag() {
    return this.flag;
  }
  getinfo() {
    return this._info;
  }
}
