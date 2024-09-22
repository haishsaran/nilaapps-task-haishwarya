import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardcontent2Component } from './dashboardcontent2.component';

describe('Dashboardcontent2Component', () => {
  let component: Dashboardcontent2Component;
  let fixture: ComponentFixture<Dashboardcontent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dashboardcontent2Component]
    });
    fixture = TestBed.createComponent(Dashboardcontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
