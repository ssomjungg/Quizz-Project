import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam4Component } from './exam4.component';

describe('Exam4Component', () => {
  let component: Exam4Component;
  let fixture: ComponentFixture<Exam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
