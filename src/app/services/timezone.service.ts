import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  private baseURL = 'https://api.ipgeolocation.io/timezone'
  private apiKey = '270c1477b4fb46a59169b24c3b12e4c6'

  constructor(
    private http: HttpClient
  ) { }

  getHourByTimeZone(timezone: string){
    const url = `${this.baseURL}?apiKey=${this.apiKey}&tz=${timezone}`
    return this.http.get<any>(url);
  }
}
