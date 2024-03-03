import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CoreService } from '../../core.service';

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
      this.router.navigate(['/quizz/exam'], {relativeTo: this.route});
    }
  }

  gotoTest(name: any) {
    if (this.form.valid) {
      this.service.setName(name);
      this.router.navigate(['/quizz/exam'], {relativeTo: this.route});
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }
}
