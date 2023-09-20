import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseboxComponent } from './coursebox.component';

describe('CourseboxComponent', () => {
  let component: CourseboxComponent;
  let fixture: ComponentFixture<CourseboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseboxComponent]
    });
    fixture = TestBed.createComponent(CourseboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
