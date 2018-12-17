import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {CallBackFun, HttpResult} from './Interface/HttpResult';
import { Observable, throwError, of, observable } from 'rxjs';

enum Options {
  post,
  get,
  delete,
  put,
  patch
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private server_ip = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  RawRequest = (option: Options, dir: string, body: any) => {
    const url = this.server_ip + dir;
    let request_fun;
    switch (option) {
      case Options.post:
        request_fun = this.http.post(url, body, httpOptions);
        break;
      case Options.get:
        request_fun = this.http.get(url, httpOptions);
        break;
      case Options.put:
        request_fun = this.http.put(url, body, httpOptions);
        break;
      case Options.patch:
        request_fun = this.http.patch(url, body, httpOptions);
        break;
      case Options.delete:
        request_fun = this.http.delete(url, httpOptions);
        break;
      default:
        request_fun = this.http.get(url,
          {
            headers: httpOptions.headers,
            params: body as HttpParams,
            withCredentials: true
          });
    }
    return request_fun;
  }

  Request(option: Options, dir: string, body: any, callback: CallBackFun) {
    const SuccessHandler = (data) => {
      const result = new HttpResult();
      result.success = true;
      result.data = data;
      result.status = 200;
      callback(result);
    };
    const ErrorHandler = (error) => {
      const result = new HttpResult();
      result.success = false;
      result.data = error.error;
      result.status = error.status;
      callback(result);
    };
    this.RawRequest(option, dir, body).subscribe(
      data => SuccessHandler(data),
      error => ErrorHandler(error)
    );
  }

  /******************************* Users ******************************************/

  signin(paramas: any, callback: CallBackFun ) {
    this.Request(Options.post, '/signin', paramas, callback);
  }
  signup(paramas: any, callback: CallBackFun ) {
    this.Request(Options.post, '/signup', paramas, callback);
  }
  logout(callback: CallBackFun) {
    this.Request(Options.delete, '/logout', '', callback);
  }

  /******************************** Maneger **********************************************/

  add_books(paramas: any, callback: CallBackFun) {
    this.Request(Options.post, '/mng/add_books', paramas, callback);
  }
  slct_mng(paramas: any, callback: CallBackFun) {
    this.Request(Options.post, '/mng/slct_mng', paramas, callback);
  }
  delete_books(paramas: any, callback: CallBackFun) {
    this.Request(Options.post,  '/mng/delete_books', paramas, callback);
  }
  add_record(callback: CallBackFun) {
    this.Request(Options.post, '/mng/add_record', '', callback);
  }
  delete_record(callback: CallBackFun) {
    this.Request(Options.post, '/mng/delete_record', '', callback);
  }
  chmng_info(paramas: any, callback: CallBackFun) {
    this.Request(Options.post,  '/mng/change_info ', paramas, callback);
  }
  chmng_pswd(paramas: any, callback: CallBackFun) {
    this.Request(Options.post,  '/mng/change_pswd ', paramas, callback);
  }
  /**********************************  User ***************************************************/
  slct_usr(paramas: any, callback: CallBackFun) {
    this.Request(Options.post, '/usr/slct_usr', paramas, callback);
  }
  lend_book(paramas: any, callback: CallBackFun) {
    this.Request(Options.post,  '/usr/lend_book', paramas, callback);
  }
  return_book(paramas: any, callback: CallBackFun) {
    this.Request(Options.post,  '/usr/return_book', paramas, callback);
  }
  lended_books(callback: CallBackFun) {
    this.Request(Options.post,  '/usr/lended_books', '', callback);
  }
  return_books(paramas: any, callback: CallBackFun) {
    this.Request(Options.post,  '/usr/return_books', paramas, callback);
  }
  chusr_info(paramas: any, callback: CallBackFun) {
    this.Request(Options.post,  '/usr/change_info ', paramas, callback);
  }
  chusr_pswd(paramas: any, callback: CallBackFun) {
    this.Request(Options.post,  '/usr/change_pswd ', paramas, callback);
  }
}
