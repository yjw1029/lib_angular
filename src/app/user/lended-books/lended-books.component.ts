import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../http.service';
import {HttpResult} from '../../Interface/HttpResult';
import {Toast} from 'ng-zorro-antd-mobile';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-lended-books',
  templateUrl: './lended-books.component.html',
  styleUrls: ['./lended-books.component.css']
})
export class LendedBooksComponent implements OnInit {
  lended_books = [];
  displayedColumns: string[] = [ 'select', 'Bid', 'Bname', 'Bauthor', 'Bpub'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(this.lended_books);
  selection = new SelectionModel<any>(true, []);

  constructor(
    private httpservice: HttpService,
    private _toast: Toast
  ) { }

  ngOnInit() {
    const callback = (result: HttpResult) => {
      if (result.success) {
        this.lended_books = result.data;
        this.dataSource = new MatTableDataSource(this.lended_books);
      } else {
        Toast.fail('查询失败', 1000);
      }
    };
    this.httpservice.lended_books(callback);
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  return() {
    if (this.selection.selected.length === 0) {
      Toast.fail('请选择你要归还的书籍', 1000);
      return;
    } else {
      const ids = [];
      for ( const i in this.selection.selected) {
        if (i in this.selection.selected) {
          ids.push(this.lended_books[i]['Bid']);
        }
      }
      const request = {
        bids: ids,
      };
      const callback = (result: HttpResult) => {
        if (result.success) {
          const callback2 = (result2: HttpResult) => {
            if (result.success) {
              this.lended_books = result2.data;
              this.dataSource = new MatTableDataSource(this.lended_books);
            } else {
              this.lended_books = [];
              this.dataSource = new MatTableDataSource(this.lended_books);
              Toast.fail('查询失败', 1000);
            }
          };
          this.httpservice.lended_books(callback2);
          Toast.info('归还成功', 1000);
        } else {
          Toast.fail('归还失败', 1000);
        }
      };
      this.httpservice.return_books(request, callback);
    }
  }
}
