import { Component, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  faSearch = faSearch;

  @Output() nameCity: string = ''

  constructor(
    private weatherService: WeatherService
  ) { }

  getWeatherByCityName() {
    console.log(this.nameCity);
    this.weatherService.sendCityName
    .emit(this.nameCity)
  }

}
