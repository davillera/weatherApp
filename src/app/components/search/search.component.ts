import { Component } from '@angular/core';



import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'src/app/components/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  faSearch = faSearch;

  nameCity: string = ''

  constructor(
    private weatherService: WeatherService
  ) { }


  getWeatherByCityName() {
    console.log(this.nameCity);
    this.weatherService.getWeatherByCityName(this.nameCity)
    .subscribe(data =>{
      console.log(data);
    })
  }

  
}
