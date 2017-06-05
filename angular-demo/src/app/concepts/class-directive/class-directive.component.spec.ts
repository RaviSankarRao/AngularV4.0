import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDirectiveComponent } from './class-directive.component';

describe('ClassDirectiveComponent', () => {
  let component: ClassDirectiveComponent;
  let fixture: ComponentFixture<ClassDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
