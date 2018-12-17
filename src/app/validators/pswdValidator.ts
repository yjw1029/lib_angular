import { FormGroup, ValidationErrors } from '@angular/forms';


export function pswdValidator(control: FormGroup): ValidationErrors|null {
  const pswd = control.get('password');
  const pswd2 = control.get('password2');
  if (pswd.value !== pswd2.value) {
    return {'validatepswd': true};
  } else {
    return null;
  }
}
