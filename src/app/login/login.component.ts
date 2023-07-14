import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userServices = inject(UserService);
  router = inject(Router);

  loginForm = new FormGroup({
    pin: new FormControl(0),
  });

  onSubmit() {
    let pin = this.loginForm.get('pin')?.value;
    if (pin?.toString().length === 4) {
      console.log(this.loginForm.value);
      this.userServices.getUsers().subscribe((data) => {
        const currentUser = data.filter((x) => x.pin == pin);
        if (currentUser.length > 0) {
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Not valid');
        }
      });
    }
  }
}
