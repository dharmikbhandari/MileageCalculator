import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fuel-config-create',
  templateUrl: './fuel-config-create.component.html',
  styleUrls: ['./fuel-config-create.component.scss']
})
export class FuelConfigCreateComponent {

  location = inject(Location)

  goBack() {
    this.location.back();
  }
}
