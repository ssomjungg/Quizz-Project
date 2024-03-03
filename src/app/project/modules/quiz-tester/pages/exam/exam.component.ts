import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models/exam';
import { ConfirmDialogComponent } from '../../../../core/shared/components/confirm-dialog/confirm-dialog.component';
import { fullDataExam } from '../../models/full-Data-Exam';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../../../core/shared/components/snackbar/snackbar.component';
import { SnackbarService } from '../../../../core/shared/components/services/snackbar.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ExamService,
    protected formBuilder: FormBuilder,
    protected dialog: MatDialog,
    private snackBar: MatSnackBar,
    private snackbarService: SnackbarService,
  ) {}

  examForms: FormGroup[] = [];
  exam: FormGroup[] = [];
  answer: FormGroup[] = [];
  currentIndex: number = 0;
  name!: string;
  //for snackbar
  durationInSeconds = 5;

  ngOnInit(): void {
    this.name = this.service.getName();
    if (!this.name) {
      this.router.navigate(['/home'], {relativeTo: this.route});
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
    if (this.currentIndex === 0) {
      this.router.navigate(['/home'], { relativeTo: this.route });
    }
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onNext() {
    if (this.currentIndex < 8) {
      this.currentIndex++;
    }
    let form = this.examForms[this.currentIndex]?.value;
    let answer = form?.answer;
    if (!answer) {
      let index = this.currentIndex;
      index--;
      let preForm = this.exam[index]?.value;
      let preAnswer = preForm?.answer;
      if (preAnswer) {
        this.examForms = this.exam;
      }
    }
  }

  onSubmit() {
    let codeArr: string[] = [];
    let languageArr: string[] = [];
    let markdownArr: string[] = [];
    let mermaidArr: string[] = [];
    let scriptArr: string[] = [];
    let titleArr: string[] = [];
    let exams: Exam[] = [];
    for (let i = 0; i < 8; i++) {
      const examData = this.examForms[i].value;
      const exam: Exam = {
        no: examData.no,
        questionType: examData.questionType,
        script: examData.script,
        title: examData.title,
        answer: examData.answer,
        language: examData.language,
        mermaid: examData.mermaid,
        code: examData.code,
        markdown: examData.markdown,
      };
      exams.push(exam);
      codeArr.push(examData?.code);
      languageArr.push(examData?.language);
      markdownArr.push(examData?.markdown);
      mermaidArr.push(examData?.mermaid);
      if (examData?.questionType) {
        scriptArr.push(this.name);
      } else {
        scriptArr.push('');
      }
      titleArr.push(examData?.title);
    }
    this.dialog
      .open(ConfirmDialogComponent, { data: { description: 'ยืนยันคำตอบ' } })
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirm) => {
        if (confirm) {
          let candidateId = this.name;
          const formData: fullDataExam = {
            answer: exams,
            candidateId: candidateId,
            code: codeArr,
            language: languageArr,
            markdown: markdownArr,
            mermaid: mermaidArr,
            questionNumber: 9,
            script: scriptArr,
            startDate: this.service.getDate(),
            title: titleArr,
          };
          this.service.setExam(formData);
          this.openSnackBar();
          this.router.navigate(['/home'], {relativeTo: this.route});
        }
      });
  }

  openSnackBar() {
    this.snackbarService.open('success', "S");
  }

  onCheck() {
    this.currentIndex = 0;
  }

  onFormChange(form: any) {
    this.exam = { ...this.examForms };
    this.exam[this.currentIndex] = form;
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
