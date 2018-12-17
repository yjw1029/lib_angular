import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {Router} from '@angular/router';
import {pswdValidator} from '../../validators/pswdValidator';
import {SignstepService} from '../signstep.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  validateForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signstep: SignstepService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      'username': [ null, [ Validators.required, Validators.maxLength(20), ] ],
      'password': [ null, [ Validators.required, Validators.maxLength(40) ] ],
      'email': [  null, [ Validators.required, Validators.email, Validators.maxLength(30) ] ],
      'password2': [null, [Validators.required]],
    }, { validator: pswdValidator });
  }

  onSubmit(): void {
    if (this.validateForm.valid) {
      this.signstep.infostep1(this.validateForm.value);
      this.router.navigateByUrl('/sign/up2');
    }
  }

  get username() {
    return this.validateForm.get('username');
  }
  get password() {
    return this.validateForm.get('password');
  }
  get password2() {
    return this.validateForm.get('password2');
  }
  get email() {
    return this.validateForm.get('email');
  }
}
