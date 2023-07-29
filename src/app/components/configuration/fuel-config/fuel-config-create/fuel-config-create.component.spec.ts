import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelConfigCreateComponent } from './fuel-config-create.component';

describe('FuelConfigCreateComponent', () => {
  let component: FuelConfigCreateComponent;
  let fixture: ComponentFixture<FuelConfigCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelConfigCreateComponent]
    });
    fixture = TestBed.createComponent(FuelConfigCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
