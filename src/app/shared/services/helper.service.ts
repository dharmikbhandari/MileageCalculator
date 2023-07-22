import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private isMenuVisible$$ = new BehaviorSubject<boolean>(true);
  private isLoading$$ = new BehaviorSubject<boolean>(false);

  isMenuVisible$ = this.isMenuVisible$$.asObservable();
  isLoading$ = this.isLoading$$.asObservable();


  setMenuVisible(isMenuVisible: boolean) {
    this.isMenuVisible$$.next(isMenuVisible);
  }

  setLoading(isLoading: boolean) {
    this.isLoading$$.next(isLoading);
  }
}
