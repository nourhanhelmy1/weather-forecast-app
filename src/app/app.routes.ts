import { Routes } from '@angular/router';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { DateSearchComponent } from './components/date-search/date-search.component';

export const routes: Routes = [
  { path: 'weather-list', component: WeatherListComponent },
  { path: 'city-weather', component: CityWeatherComponent },
  { path: 'date-search', component: DateSearchComponent },
  { path: '', redirectTo: '/weather-list', pathMatch: 'full' },
];