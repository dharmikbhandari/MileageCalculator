import { Component, OnInit, inject } from '@angular/core';
import { HelperService } from './shared/services/helper.service';
import { AuthService } from './shared/services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

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

  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit() {
    this.height = document.body.clientHeight;
    this.width = document.body.clientWidth;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
