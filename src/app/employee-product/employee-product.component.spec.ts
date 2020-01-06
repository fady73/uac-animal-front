import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProductComponent } from './employee-product.component';

describe('EmployeeProductComponent', () => {
  let component: EmployeeProductComponent;
  let fixture: ComponentFixture<EmployeeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
