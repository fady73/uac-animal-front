import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRateComponent } from './employee-rate.component';

describe('EmployeeRateComponent', () => {
  let component: EmployeeRateComponent;
  let fixture: ComponentFixture<EmployeeRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
