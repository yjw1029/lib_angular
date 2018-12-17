import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {HttpService} from '../../http.service';
import {Toast} from 'ng-zorro-antd-mobile';
import {HttpResult} from '../../Interface/HttpResult';

@Component({
  selector: 'app-delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.css']
})
export class DeleteRecordComponent implements OnInit {
  delete_record = [];
  displayedColumns: string[] = [ 'Bid', 'Bname', 'Bauthor', 'Bpub'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(this.delete_record);
  constructor(
    private httpservice: HttpService,
    private _toast: Toast
  ) { }

  ngOnInit() {
    const callback = (result: HttpResult) => {
      if (result.success) {
        this.delete_record = result.data;
        this.dataSource = new MatTableDataSource(this.delete_record);
      } else {
        Toast.fail('查询失败', 1000);
      }
    };
    this.httpservice.delete_record(callback);
    this.dataSource.sort = this.sort;
  }

}
