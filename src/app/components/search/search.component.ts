import { Component } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  location: string = '';

  faSearch = faSearch;
  data: any;

  constructor(
    private weatherService: WeatherService
  ) { }
  getWeatherByCityName() {
    this.weatherService.getWeatherByCityName(this.location)
      .subscribe((data: any) => {
        console.log(data);

      })
  }
}
