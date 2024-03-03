import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExamService } from '../modules/quizz/services/exam.service';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(
    private http: HttpClient
    ) {}

  private name!: string;
  private startDate!: Date;

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(date: Date) {
    this.startDate = date;
  }

  getDate() {
    return this.startDate;
  }

  getData() {
    // return this.examService.getExam();
  }
}
