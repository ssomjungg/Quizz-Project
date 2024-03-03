import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam8',
  templateUrl: './exam8.component.html',
  styleUrl: './exam8.component.scss'
})
export class Exam8Component implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  @Input() examForm!: FormGroup;
  form!: FormGroup;

  ngOnInit(): void {
    console.log('exam1', this.examForm?.value);
    this.exam8Form(this.examForm?.value);
  }

  editorOptions = {theme: 'vs-dark', language: 'html'};

  exam8Form(exam: Exam) {
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
