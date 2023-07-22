import { Component, OnInit, inject } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loadingService = inject(LoadingService);
  title = 'mileageCalculator';
  height = 0;
  width = 0;

  ngOnInit() {
    this.height = document.body.clientHeight;
    this.width = document.body.clientWidth;
  }
}
