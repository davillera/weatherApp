import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { geoLocationService } from './services/geolocation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locationData: any;
  weatherData: any;

  constructor(
    private geoLocationService: geoLocationService,
    private weatherService: WeatherService
    ) { }

  ngOnInit() {
    this.geoLocationService.getCurrentLocation()
    .subscribe(data => {
      this.locationData = data;
      this.getWeather();
    });
  }

  getWeather() {
    this.weatherService.getWeatherByCoordinates(this.locationData.latitude, this.locationData.longitude).subscribe(data => {
      this.weatherData = data;
    });
  }
}
