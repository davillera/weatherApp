import { Component, Input } from '@angular/core';

import { geoLocationService } from 'src/app/services/geolocation.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  locationData: any;
  weatherData: any;

  constructor(
    private geoLocationService: geoLocationService,
    private weatherService: WeatherService
  ){}

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
