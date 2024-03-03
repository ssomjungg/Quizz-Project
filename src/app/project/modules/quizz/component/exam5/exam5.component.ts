import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam5',
  templateUrl: './exam5.component.html',
  styleUrl: './exam5.component.scss'
})
export class Exam5Component implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  @Input() examForm!: FormGroup;
  form!: FormGroup;
  //output
  @Output() formValueChanged = new EventEmitter<FormGroup>();
  ngOnInit(): void {
    this.exam5Form(this.examForm?.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['examForm'] && changes['examForm'].currentValue) {
      this.exam5Form(this.examForm.value);
    }
  }

  exam5Form(exam: Exam) {
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
