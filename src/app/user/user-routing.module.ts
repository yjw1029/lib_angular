import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIndexComponent} from './user-index/user-index.component';
import {ConsultComponent} from './consult/consult.component';
import {LendComponent} from './lend/lend.component';
import {ReturnComponent} from './return/return.component';
import {LendedBooksComponent} from './lended-books/lended-books.component';
import {ChangInfoComponent} from './chang-info/chang-info.component';

const routes: Routes = [
  {path: 'index', component: UserIndexComponent},
  {path: 'consult', component: ConsultComponent},
  {path: 'lend', component: LendComponent},
  {path: 'return', component: ReturnComponent},
  {path: 'lended_books', component: LendedBooksComponent},
  {path: 'change-info', component: ChangInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
