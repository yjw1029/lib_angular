import { Injectable } from '@angular/core';

class UserInfo {
  Uno: number;
  Uid: string;
  Uname: string;
  Uemail: string;
  Unum: string;
}
class MngInfo {
  Mno: number;
  Mid: string;
  Mname: string;
  Memail: string;
  Mnum: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private signin = false;
  private usr_me: UserInfo|null = null;
  private mng_me: MngInfo|null = null;
  private kind: string;
  constructor() { }
  get usr_info() {return this.usr_me; }
  get mng_info() {return this.mng_me; }
  set usr_info(usr: UserInfo) {this.usr_me = usr; }
  set mng_info( mng: MngInfo) {this.mng_me = mng; }
  set status(status: boolean) { this.signin = status; }
  get status() {return this.signin; }
  set my_kind(kind_str: string) {this.kind = kind_str; }
  get my_kind() {return this.kind; }

}
