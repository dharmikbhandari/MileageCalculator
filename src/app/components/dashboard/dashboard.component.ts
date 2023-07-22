import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  authService = inject(AuthService);
  helperService = inject(HelperService);

  constructor(){
    this.helperService.setMenuVisible(true);
  }
}
