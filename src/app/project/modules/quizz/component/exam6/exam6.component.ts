import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam6',
  templateUrl: './exam6.component.html',
  styleUrl: './exam6.component.scss'
})
export class Exam6Component implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  @Input() examForm!: FormGroup;
  form!: FormGroup;
  ngOnInit(): void {
    console.log('exam1', this.examForm?.value);
    this.exam6Form(this.examForm?.value);
    console.log(this.examForm.get('mermaid')?.value);

  }

  editorOptions = {theme: 'vs-dark', language: 'typescript'};

  exam6Form(exam: Exam) {
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
