import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam4',
  templateUrl: './exam4.component.html',
  styleUrl: './exam4.component.scss'
})
export class Exam4Component implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  @Input() examForm!: FormGroup;
  form!: FormGroup;
  //output
  @Output() formValueChanged = new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.exam4Form(this.examForm?.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['examForm'] && changes['examForm'].currentValue) {
      this.exam4Form(this.examForm.value);
    }
  }

  exam4Form(exam: Exam) {
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
