import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './pages/exam/exam.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exam'
  },
  {
    path: 'exam-tester',
    component: ExamComponent,
    // resolve: {

    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizTesterRoutingModule { }
