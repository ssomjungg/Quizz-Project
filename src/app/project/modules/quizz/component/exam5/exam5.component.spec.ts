import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam5Component } from './exam5.component';

describe('Exam5Component', () => {
  let component: Exam5Component;
  let fixture: ComponentFixture<Exam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
