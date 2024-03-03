import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subject, filter, map, takeUntil } from 'rxjs';
import { ExamService } from '../../services/exam.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss',
})
export class ExamComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ExamService,
    protected formBuilder: FormBuilder,
    protected dialog: MatDialog
  ) {}

  examForms: FormGroup[] = [];
  exam: FormGroup[] = [];
  answerExam: FormGroup[] = [];
  currentIndex: number = 0;
  name!: string;
  ngOnInit(): void {
    this.name = this.service.getName();
    if (!this.name) {
      // this.router.navigate(['/home'], {relativeTo: this.route})
    }
    this.service
      .getExamData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((resp) => {
        if (resp) {
          const responseObj = resp as { [key: string]: any };
          for (const key of Object.keys(responseObj)) {
            for (const exam of responseObj[key]) {
              const form = this.examForm(exam);
              this.examForms.push(form);
            }
          }
        }
      });
  }

  onBack() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onNext() {
    if (this.currentIndex < 9) {
      this.currentIndex++;
    }
    let form = this.examForms[this.currentIndex].value;
    console.log('index', this.currentIndex)
    let answer = form?.answer;
    if (!answer) {
      let index = this.currentIndex;
      index--;
      let preForm = this.exam[index].value;
      let preAnswer = preForm?.answer;
      if (preAnswer) {
        this.examForms = this.exam;
      }
    }
  }

  onSubmit() {
    console.log(
      'All exam forms:',
      this.examForms.map((form) => form.value)
    );
  }

  onCheck() {}

  onFormChange(form: any) {
    // this.examForms = this.examForms.slice(); // คัดลอกอาร์เรย์
    // this.examForms[this.currentIndex] = form;
    this.exam = {...this.examForms}
    console.log('exam', this.exam);
    this.exam[this.currentIndex] = form;
    console.log('Form changed:', this.exam);
  }

  examForm(exam: Exam) {
    return this.formBuilder.group({
      no: [exam.no],
      questionType: [exam.questionType],
      script: [exam.script],
      title: [exam.title],
      answer: [exam.answer],
      language: [exam.language],
      mermaid: [exam.mermaid],
      code: [exam.code],
      markdown: [exam.markdown],
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }
}
