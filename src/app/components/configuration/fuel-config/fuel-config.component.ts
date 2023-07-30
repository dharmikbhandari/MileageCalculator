import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuel-config',
  templateUrl: './fuel-config.component.html',
  styleUrls: ['./fuel-config.component.scss']
})
export class FuelConfigComponent {
  router = inject(Router);
createFuelConfig() {
  this.router.navigate(['configuration/fuel-config/create']);
}

}
