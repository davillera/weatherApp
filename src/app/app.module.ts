import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ConvertPipe } from './pipes/convert.pipe';
import { ConvertToKmPipe } from './pipes/convert-to-km.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchComponent,
    WeatherComponent,
    ConvertPipe,
    ConvertToKmPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
