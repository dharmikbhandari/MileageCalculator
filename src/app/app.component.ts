import { Component, OnInit, inject } from '@angular/core';
import { HelperService } from './shared/services/helper.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  helperService = inject(HelperService);
  authService = inject(AuthService);
  title = 'mileageCalculator';
  height = 0;
  width = 0;
  isSidenavOpen = false;
  

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
 

  ngOnInit() {
    this.height = document.body.clientHeight;
    this.width = document.body.clientWidth;
  }
}
