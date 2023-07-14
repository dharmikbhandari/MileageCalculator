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
  

  // onSubmit() {
  //   let pin = this.loginForm.get('pin')?.value;
  //   if (pin?.toString().length === 4) {
  //     console.log(this.loginForm.value);
  //     this.userServices.getUsers().subscribe((data) => {
  //       const currentUser = data.filter((x) => x.pin == pin);
  //       if (currentUser.length > 0) {
  //         this.router.navigate(['/dashboard']);
  //       } else {
  //         console.error('Not valid');
  //       }
  //     });
  //   }
  // }
}
