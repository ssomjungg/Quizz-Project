import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BamLabelComponent } from './bam-label.component';

describe('BamLabelComponent', () => {
  let component: BamLabelComponent;
  let fixture: ComponentFixture<BamLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BamLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BamLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
