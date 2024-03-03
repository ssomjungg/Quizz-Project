import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam7',
  templateUrl: './exam7.component.html',
  styleUrl: './exam7.component.scss'
})
export class Exam7Component implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  @Input() examForm!: FormGroup;
  form!: FormGroup;
  ngOnInit(): void {
    console.log('exam1', this.examForm?.value);
    this.exam7Form(this.examForm?.value);
    console.log('exam1', this.examForm?.get('mermaid')?.value);
  }

  editorOptions = {theme: 'vs-dark', language: 'typescript'};

  exam7Form(exam: Exam) {
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
