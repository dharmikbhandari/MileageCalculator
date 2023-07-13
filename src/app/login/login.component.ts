import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userServices = inject(UserService);

  loginForm = new FormGroup({
    pin: new FormControl(''),
  });

  onSubmit() {
    if (this.loginForm.get('pin')?.value?.length === 4) {
      console.log(this.loginForm.value);
      this.userServices.getUsers().subscribe(data => {
        console.log('Dharmik',data);
      });
    }
  }
}
