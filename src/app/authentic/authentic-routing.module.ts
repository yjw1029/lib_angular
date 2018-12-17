import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component} from './signup2/signup2.component';

const routes: Routes = [
  {path: 'in', component: SigninComponent},
  {path: 'up', component: SignupComponent},
  {path: 'up2', component: Signup2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticRoutingModule { }
