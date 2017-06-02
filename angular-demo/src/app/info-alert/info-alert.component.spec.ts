import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAlertComponent } from './info-alert.component';

describe('InfoAlertComponent', () => {
  let component: InfoAlertComponent;
  let fixture: ComponentFixture<InfoAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
