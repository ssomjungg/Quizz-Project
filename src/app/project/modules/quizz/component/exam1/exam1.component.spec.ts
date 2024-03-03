import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam1Component } from './exam1.component';

describe('Exam1Component', () => {
  let component: Exam1Component;
  let fixture: ComponentFixture<Exam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
