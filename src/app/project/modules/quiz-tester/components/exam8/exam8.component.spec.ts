import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam8Component } from './exam8.component';

describe('Exam8Component', () => {
  let component: Exam8Component;
  let fixture: ComponentFixture<Exam8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
