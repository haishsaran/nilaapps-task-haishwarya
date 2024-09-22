import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardcontent1Component } from './dashboardcontent1.component';

describe('Dashboardcontent1Component', () => {
  let component: Dashboardcontent1Component;
  let fixture: ComponentFixture<Dashboardcontent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dashboardcontent1Component]
    });
    fixture = TestBed.createComponent(Dashboardcontent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
