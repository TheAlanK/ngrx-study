import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CounterService {
  private baseUrl = 'https://localhost:7277/api/Counter/';

  constructor(private http: HttpClient){}

  public incrementCounterNumber(n: number) {
    return this.http.put(this.baseUrl + 'incrementNumber', n);
  }

  public decrementCounterNumber(n: number) {
    return this.http.put(this.baseUrl + 'decrementNumber', n);
  }

  public getCounterNumber() {
    return this.http.get(this.baseUrl + 'GetCounter');
  }

  public resetCounter() {
    return this.http.post(this.baseUrl + 'resetCounter', null);
  }

}
