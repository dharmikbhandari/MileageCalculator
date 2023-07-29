import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelConfigComponent } from './fuel-config.component';

describe('FuelConfigComponent', () => {
  let component: FuelConfigComponent;
  let fixture: ComponentFixture<FuelConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelConfigComponent]
    });
    fixture = TestBed.createComponent(FuelConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
