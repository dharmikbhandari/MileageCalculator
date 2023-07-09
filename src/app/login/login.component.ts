import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    pin: new FormControl(''),
  });

  onSubmit() {
    if (this.loginForm.get('pin')?.value?.length === 4) {
      console.log(this.loginForm.value);
    }
  }
}
