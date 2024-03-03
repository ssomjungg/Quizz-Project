import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizTesterRoutingModule } from './quiz-tester-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonSharedModule } from '../../core/shared/modules/common-shared/common-shared.module';
import { SharedMaterialModule } from '../../core/shared/modules/material/shared-material.module';
import { ComponentsModule } from '../../core/shared/modules/components/components.module';
import { MarkdownModule } from 'ngx-markdown';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ExamComponent } from './pages/exam/exam.component';
import { Exam1Component } from './components/exam1/exam1.component';
import { Exam2Component } from './components/exam2/exam2.component';
import { Exam3Component } from './components/exam3/exam3.component';
import { Exam4Component } from './components/exam4/exam4.component';
import { Exam5Component } from './components/exam5/exam5.component';
import { Exam6Component } from './components/exam6/exam6.component';
import { Exam7Component } from './components/exam7/exam7.component';
import { Exam8Component } from './components/exam8/exam8.component';


@NgModule({
  declarations: [
    ExamComponent,
    Exam1Component,
    Exam2Component,
    Exam3Component,
    Exam4Component,
    Exam5Component,
    Exam6Component,
    Exam7Component,
    Exam8Component
  ],
  imports: [
    CommonModule,
    QuizTesterRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FontAwesomeModule,
    CommonSharedModule,
    SharedMaterialModule,
    ComponentsModule,
    MarkdownModule.forRoot(),
    MonacoEditorModule.forRoot()
  ]
})
export class QuizTesterModule { }
