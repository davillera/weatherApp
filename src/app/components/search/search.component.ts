import { Component, Output } from '@angular/core';



import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from 'src/app/components/services/weather.service';

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


  //necesito que la petición al servicio, lo haga weathercomponent para así hacer más fácil el render
  //es decir, getWeatherByCityName, debo pasarlo a weathercompoenent

  
  getWeatherByCityName() {
    console.log(this.nameCity);
    this.weatherService.getWeatherByCityName(this.nameCity)
    .subscribe(data =>{
      console.log(data);
    })
  }


}
