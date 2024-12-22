import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateSearchComponent } from "./components/date-search/date-search.component";
import { WeatherListComponent } from "./components/weather-list/weather-list.component";
import { CityWeatherComponent } from "./components/city-weather/city-weather.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [DateSearchComponent, WeatherListComponent, CityWeatherComponent],
})
export class AppComponent {
  title = 'Weather App';
  weatherData: any[] = [];
  selectedDate: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:4454/forecast')
      .subscribe((data: any) => {
        this.weatherData = data;
      }, error => {
        console.error('Error fetching weather data:', error);
      });
  }

  dateChange(newDate: string): void {
    this.selectedDate = newDate;
  }
}
