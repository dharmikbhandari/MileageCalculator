import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  toastrService = inject(ToastrService);
  formBuilder = inject(FormBuilder);
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])],
    });

    email = this.loginForm.controls['email'].value;
    password = this.loginForm.controls['password'].value;
  }

  onSubmit() {
    
    this.authService.signIn(email, password);
  }
}
