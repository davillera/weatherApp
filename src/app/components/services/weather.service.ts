import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseURL = 'https://api.openweathermap.org/data/2.5/weather'
  private apiKey = '5f218c3d538a73e422cbe2405bdff4c0';
  private metric = 'units=metric'
  private imperial = 'units=imperial'

  constructor(private http: HttpClient) {}

  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    const url = `${this.baseURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&${this.metric}`;
    return this.http.get<any>(url);
  }

  getWeatherByCityName(cityName: string){
    const url =`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&${this.metric}`
    return this.http.get<any>(url)
  }
}


