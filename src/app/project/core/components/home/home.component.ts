import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CoreService } from '../../core.service';
import { fullDataExam } from '../../../modules/quizz/models/full-Data-Exam';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy  {
  destroy$ = new Subject();
  constructor(
    protected formBuilder: FormBuilder,
    protected dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private service: CoreService
  ) {
  }

  form!: FormGroup;
  data!: fullDataExam;
  ngOnInit(): void {
    this.personalForm();
  }

  personalForm() {
    this.form = this.formBuilder.group({
      name: ['', {validators: Validators.required}]
    });
  }

  gotoDev(name: any) {
    if (this.form.valid) {
      this.service.setName(name);
      this.service.setDate(new Date);
      this.router.navigate(['/quiz/exam-dev'], {relativeTo: this.route});
    } else this.form.markAllAsTouched();
  }

  gotoTest(name: any) {
    if (this.form.valid) {
      this.service.setName(name);
      this.service.setDate(new Date);
      this.router.navigate(['/quiz/exam-tester'], {relativeTo: this.route});
    } else this.form.markAllAsTouched();
  }
  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }
}
