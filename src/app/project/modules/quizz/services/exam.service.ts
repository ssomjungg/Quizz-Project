import { Injectable } from '@angular/core';
import { CoreService } from '../../../core/core.service';
import { HttpClient } from '@angular/common/http';
import { fullDataExam } from '../models/full-Data-Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(
    private coreService: CoreService,
    private http: HttpClient
  ) { }

  getName() {
    return this.coreService.getName();
  }

  getDate() {
    return this.coreService.getDate();
  }

  getExamData() {
    return this.http.get('assets/json/exam.json');
  }

  private exam!: fullDataExam;
  setExam(exam: fullDataExam) {
    console.log('data', exam);
    this.exam = exam;
  }
  getExam() {
    return this.exam;
  }
}
