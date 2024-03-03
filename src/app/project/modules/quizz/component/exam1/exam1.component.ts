import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exam } from '../../models/exam';
import { Subject, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-exam1',
  templateUrl: './exam1.component.html',
  styleUrl: './exam1.component.scss'
})
export class Exam1Component implements OnInit, OnChanges  {
  constructor(private formBuilder: FormBuilder) { }

  @Input() examForm: any;
  form!: FormGroup;
  destroy = new Subject();
  //output
  @Output() formValueChanged = new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.exam1Form(this.examForm?.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['examForm'] && changes['examForm'].currentValue) {
      this.exam1Form(this.examForm.value);
    }
  }

  exam1Form(exam: Exam) {
    this.form = this.formBuilder.group({
      no: [exam?.no],
      questionType: [exam?.questionType],
      script: [exam?.script],
      title: [exam?.title],
      answer: [exam?.answer],
      language: [exam?.language],
      mermaid: [exam?.mermaid],
      code: [exam?.code],
      markdown: [exam?.markdown],
    });
    this.form.valueChanges.subscribe(value => {
      this.formValueChanged.emit(this.form);
    });
  }
}
