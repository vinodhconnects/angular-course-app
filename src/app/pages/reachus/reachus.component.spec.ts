import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachusComponent } from './reachus.component';

describe('ReachusComponent', () => {
  let component: ReachusComponent;
  let fixture: ComponentFixture<ReachusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReachusComponent]
    });
    fixture = TestBed.createComponent(ReachusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
