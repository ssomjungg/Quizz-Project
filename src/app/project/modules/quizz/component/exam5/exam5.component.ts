import { Component, Input, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    console.log('exam1', this.examForm?.value);
    this.exam5Form(this.examForm?.value);
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
  }

}
