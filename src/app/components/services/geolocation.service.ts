import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class geoLocationService {
  constructor(private http: HttpClient) {}

  getCurrentLocation(): Observable<any> {
    return this.http.get<any>('https://ipapi.co/json/');
  }
}
