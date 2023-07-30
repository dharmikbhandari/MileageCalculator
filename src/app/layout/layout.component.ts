import { Component, OnInit, inject } from '@angular/core';
import { HelperService } from '../shared/services/helper.service';
import { AuthService } from '../shared/services/auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
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

  private _isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  public get isHandset$(): Observable<boolean> {
    return this._isHandset$;
  }
  public set isHandset$(value: Observable<boolean>) {
    this._isHandset$ = value;
  }
}
