import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopFromService {
  constructor() {}

  ngOnInit() {}

  getCreditCardMonth(startMonth: number): Observable<number[]> {
    let data: number[] = [];

    for (let month = startMonth; month <= 12; month++) {
      data.push(month);
    }
    return of(data);
  }

  getCreditCardYear(): Observable<number[]> {
    let data: number[] = [];

    let startYear: number = new Date().getFullYear();

    for (let year = startYear; year <= startYear + 10; year++) {
      data.push(year);
    }
    return of(data);
  }
}
