import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MngIndexComponent} from './mng-index/mng-index.component';
import {AddBooksComponent} from './add-books/add-books.component';
import {DeleteBooksComponent} from './delete-books/delete-books.component';
import {AddRecordComponent} from './add-record/add-record.component';
import {DeleteRecordComponent} from './delete-record/delete-record.component';
import {MngConsultComponent} from './mng-consult/mng-consult.component';
import {ChangeInfoComponent} from './change-info/change-info.component';

const routes: Routes = [
  {path: 'index', component: MngIndexComponent},
  {path: 'add', component: AddBooksComponent},
  {path: 'delete', component: DeleteBooksComponent},
  {path: 'add-record', component: AddRecordComponent},
  {path: 'delete-record', component: DeleteRecordComponent},
  {path: 'consult', component: MngConsultComponent},
  {path: 'change-info', component: ChangeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManegerRoutingModule { }
