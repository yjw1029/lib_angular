import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { ManegerRoutingModule } from './maneger-routing.module';
import { MngIndexComponent } from './mng-index/mng-index.component';
import { Toast } from 'ng-zorro-antd-mobile';
import { ToastComponent } from 'ng-zorro-antd-mobile';
import { AddBooksComponent } from './add-books/add-books.component';
import { DeleteBooksComponent } from './delete-books/delete-books.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { MngConsultComponent } from './mng-consult/mng-consult.component';
import { ChangeInfoComponent } from './change-info/change-info.component';

@NgModule({
  imports: [
    CommonModule,
    ManegerRoutingModule,
    ShareModule
  ],
  entryComponents: [ ToastComponent ],
  declarations: [
    MngIndexComponent,
    AddBooksComponent,
    DeleteBooksComponent,
    AddRecordComponent,
    DeleteRecordComponent,
    MngConsultComponent,
    ChangeInfoComponent],
  providers: [ Toast]
})
export class ManegerModule { }
