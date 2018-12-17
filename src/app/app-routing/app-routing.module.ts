import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from '../index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'sign', loadChildren: '../authentic/authentic.module#AuthenticModule'},
  {path: 'manege', loadChildren: '../maneger/maneger.module#ManegerModule'},
  {path: 'usr', loadChildren: '../user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
