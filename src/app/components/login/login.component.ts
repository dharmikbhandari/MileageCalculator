import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userServices = inject(UserService);
  authService = inject(AuthService);

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  onSubmit() {
    this.authService.signIn(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    );
  }
}
