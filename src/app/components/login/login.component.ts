import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userServices = inject(UserService);
  authService = inject(AuthService);
  toastrService = inject(ToastrService);
  helperService = inject(HelperService);
  formBuilder = inject(FormBuilder);
  loginForm!: FormGroup;

  constructor() {
    this.helperService.setMenuVisible(false);
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  handleError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.signIn(
      this.loginForm?.value.email,
      this.loginForm?.value.password
    );
  }
}
