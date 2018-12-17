import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {HttpService} from '../../http.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Toast} from 'ng-zorro-antd-mobile';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HttpResult} from '../../Interface/HttpResult';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

class Rule {
  'bid': number[];
  'bplace': string;
  'bname': string;
  'bauthor': string;
}

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = false;
  rules: Rule = {
    'bid': [],
    'bplace': '',
    'bname': '',
    'bauthor': ''
  };
  separatorKeysCodes: number[] = [ENTER, COMMA];
  infoCtrl = new FormControl();
  kindCtrl =  new FormControl('bid');
  PrefixOfRule: string[] = ['书籍号 =', '书籍地点 like', '书籍名称 like', '书籍作者 like'];
  addedRules: Observable<string[]>;
  books: any[] = [];
  displayedColumns: string[] = [ 'Bid', 'Bname', 'Bauthor', 'Bpub', ''];
  @ViewChild('ruleInput') ruleInput: ElementRef<HTMLInputElement>;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(this.books);
  selection = new SelectionModel<any>(true, []);

  constructor(
    private httpservice: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private _toast: Toast
  ) { }

  ngOnInit() {
    this.addedRules = this.infoCtrl.valueChanges
      .pipe(
        startWith(null),
        map(value => this._addinput(value))
      );
    this.dataSource.sort = this.sort;
  }
  remove(rule: string, group_name: string): void {
    if (group_name === 'bid') {
      const id = +rule;
      const index = this.rules['bid'].indexOf(id);
      if (index >= 0) {
        this.rules['bid'].splice(index, 1);
      }
    } else {
      this.rules[group_name] = '';
    }
  }

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;
    const group_name = this.kindCtrl.value;
    // Add our fruit
    if ((value || '').trim()) {
      if (group_name === 'bid') {
        const rslt = +value.trim();
        if (!isNaN(rslt)) {
          this.rules.bid.push(rslt);
        } else {
          Toast.fail('编号必须为数字', 1000);
        }
      } else {
        this.rules[group_name] = value.trim();
      }
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  private _addinput(value: string): string[] {
    if ( value !== null) {
      return this.PrefixOfRule.map(option => option + value );
    } else {
      return [];
    }
  }

  ifInvalid = () => {
    if (this.rules.bid.length === 0 && this.rules.bname.length === 0 &&
      this.rules.bauthor.length === 0 && this .rules.bplace.length === 0) {
      return true;
    }
    return false;
  }

  submit() {
    const callback = (result: HttpResult) => {
      if (result.success) {
        this.books = result.data;
        this.dataSource = new MatTableDataSource(this.books);
      } else {
        const toast = Toast.fail('查询失败', 1000);
      }
    };
    if (!this.ifInvalid()) {
      console.log(this.rules);
      this.httpservice.slct_usr(this.rules, callback);
    } else {
      Toast.fail('请填入搜索条件', 1000);
    }
  }

}
