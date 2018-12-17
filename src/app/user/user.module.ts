import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import {ShareModule} from '../share/share.module';
import { Toast } from 'ng-zorro-antd-mobile';
import { ToastComponent } from 'ng-zorro-antd-mobile';
import { ConsultComponent } from './consult/consult.component';
import { LendComponent } from './lend/lend.component';
import { ReturnComponent } from './return/return.component';
import { LendedBooksComponent } from './lended-books/lended-books.component';
import { ChangInfoComponent } from './chang-info/chang-info.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule
  ],
  declarations: [
    UserIndexComponent,
    ConsultComponent,
    LendComponent,
    ReturnComponent,
    LendedBooksComponent,
    ChangInfoComponent
  ],
  providers: [Toast],
  entryComponents: [ ToastComponent ],
})
export class UserModule { }
