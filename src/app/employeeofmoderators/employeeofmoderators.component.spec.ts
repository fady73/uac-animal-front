import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeofmoderatorsComponent } from './employeeofmoderators.component';

describe('EmployeeofmoderatorsComponent', () => {
  let component: EmployeeofmoderatorsComponent;
  let fixture: ComponentFixture<EmployeeofmoderatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeofmoderatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeofmoderatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
