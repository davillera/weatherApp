import { Component, Input } from '@angular/core';

import { geoLocationService } from 'src/app/components/services/geolocation.service';
import { WeatherService } from 'src/app/components/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  locationData: any;
  weatherData: any;

  @Input() nameCity: string = ''

  constructor(
    private geoLocationService: geoLocationService,
    private weatherService: WeatherService
  ){}



  ngOnInit() {
    this.geoLocationService.getCurrentLocation()
    .subscribe(data => {
      this.locationData = data;
      this.getWeatherOnInit();
    });
  }

  getWeatherOnInit() {
    this.weatherService.getWeatherByCoordinates(this.locationData.latitude, this.locationData.longitude)
    .subscribe(data => {
      this.weatherData = data;
    });
  }

  getWeatherByCityName() {
    console.log(this.nameCity);
    this.weatherService.getWeatherByCityName(this.nameCity)
    .subscribe(data =>{
      console.log(`${this.nameCity} desde weather component`);
      console.log(data);
    })
  }


}
