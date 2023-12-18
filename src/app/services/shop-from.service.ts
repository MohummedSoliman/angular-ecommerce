import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Country } from '../model/country';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root',
})
export class ShopFromService {
  private basrUrl: string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

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

  getCountries(): Observable<Country[]> {
    const searchUrl: string = `${this.basrUrl}/countries`;

    return this.httpClient
      .get<GetResponseCountries>(searchUrl)
      .pipe(map((response) => response._embedded.countries));
  }

  getStates(countryCode: string): Observable<State[]> {
    const searchUrl: string = `${this.basrUrl}/states/search/findByCountryCode?code=${countryCode}`;

    return this.httpClient
      .get<GetResponseStates>(searchUrl)
      .pipe(map((response) => response._embedded.states));
  }
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  };
}

interface GetResponseStates {
  _embedded: {
    states: State[];
  };
}
