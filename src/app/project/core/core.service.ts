import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }
  private name!: string;
  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
