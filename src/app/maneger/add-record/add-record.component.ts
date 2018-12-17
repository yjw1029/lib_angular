import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {HttpResult} from '../../Interface/HttpResult';
import {Toast} from 'ng-zorro-antd-mobile';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  add_record = [];
  displayedColumns: string[] = [ 'Bid', 'Bname', 'Bauthor', 'Bpub'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(this.add_record);
  constructor(
    private httpservice: HttpService,
    private _toast: Toast
  ) { }

  ngOnInit() {
    const callback = (result: HttpResult) => {
      if (result.success) {
        this.add_record = result.data;
        this.dataSource = new MatTableDataSource(this.add_record);
      } else {
        Toast.fail('查询失败', 1000);
      }
    };
    this.httpservice.add_record(callback);
    this.dataSource.sort = this.sort;
  }

}
