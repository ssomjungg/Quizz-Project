import { Injectable } from '@angular/core';
import { CoreService } from '../../../core/core.service';
import { HttpClient } from '@angular/common/http';

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

  getExamData() {
    return this.http.get('assets/json/exam.json');
  }
}
