import { Component, Input } from '@angular/core';

import { geoLocationService } from 'src/app/services/geolocation.service';
import { TimezoneService } from 'src/app/services/timezone.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  locationData: any;
  weatherData: any;
  timeZone: any;


  @Input() nameCity: string = ''

  constructor(
    private geoLocationService: geoLocationService,
    private weatherService: WeatherService,
    private timeZoneService: TimezoneService
  ) { }

  ngOnInit() {
    this.geoLocationService.getCurrentLocation()
      .subscribe(data => {
        this.locationData = data;
        this.getWeatherOnInit();
        // this.getHourOnInit()
      });

    this.weatherService.sendCityName
      .subscribe(data => {
        this.getWeatherByCityName(data)
      })
  }

  getWeatherOnInit() {
    this.weatherService.getWeatherByCoordinates(this.locationData.latitude, this.locationData.longitude)
      .subscribe(data => {
        this.weatherData = data;
      });
  }


  // getHourOnInit() {
  //   this.timeZoneService.getHourByTimeZone(this.locationData.timezone)
  //     .subscribe(data => {
  //       this.timeZone = data
  //     })
  // }

  getWeatherByCityName(data: string) {
    this.weatherService.getWeatherByCityName(data)
      .subscribe(data => {
        this.weatherData = data
      })

  }

  getHourByCityName(data: string) {
    this.timeZoneService.getHourByTimeZone(data)
      .subscribe(data => {
        this.timeZone = data
      })
  }

}
