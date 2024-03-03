import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam7Component } from './exam7.component';

describe('Exam7Component', () => {
  let component: Exam7Component;
  let fixture: ComponentFixture<Exam7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
