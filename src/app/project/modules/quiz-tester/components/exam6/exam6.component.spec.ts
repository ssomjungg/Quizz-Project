import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam6Component } from './exam6.component';

describe('Exam6Component', () => {
  let component: Exam6Component;
  let fixture: ComponentFixture<Exam6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
