import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzRoutingModule } from './quizz-routing.module';
import { ExamComponent } from './pages/exam/exam.component';
import { Exam1Component } from './component/exam1/exam1.component';
import { Exam2Component } from './component/exam2/exam2.component';
import { Exam3Component } from './component/exam3/exam3.component';
import { Exam4Component } from './component/exam4/exam4.component';
import { Exam5Component } from './component/exam5/exam5.component';
import { Exam6Component } from './component/exam6/exam6.component';
import { Exam7Component } from './component/exam7/exam7.component';
import { Exam8Component } from './component/exam8/exam8.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../core/shared/modules/components/components.module';
import { SharedMaterialModule } from '../../core/shared/modules/material/shared-material.module';
import { CommonSharedModule } from '../../core/shared/modules/common-shared/common-shared.module';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { MermaidDiagramComponent } from './component/mermaid-diagram/mermaid-diagram.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

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
    Exam8Component,
    MermaidDiagramComponent
  ],
  imports: [
    CommonModule,
    QuizzRoutingModule,
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
export class QuizzModule { }

