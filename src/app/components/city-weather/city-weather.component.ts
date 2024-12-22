import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
  imports: [CommonModule],
})
export class CityWeatherComponent implements OnChanges {
  @Input() weatherData: any[] = []; 
  @Input() selectedDate: string | null = null; 
  @Input() cityWeather: any;

  ngOnChanges() {
    this.weatherData.forEach(city => {
      city.selectedDate = this.selectedDate;
    });
  }

  getTemperature(): number | null {
    if (this.cityWeather && this.selectedDate) {
      const forecast = this.cityWeather.forecast.find(
        (forecast: any) => forecast.date === this.selectedDate
      );
      return forecast ? forecast.temperatureCelsius : null;
    }
    return null;
  }

  getHumidity(): number | null {
    if (this.cityWeather && this.selectedDate) {
      const forecast = this.cityWeather.forecast.find(
        (forecast: any) => forecast.date === this.selectedDate
      );
      return forecast ? forecast.humidity : null;
    }
    return null;
  }

  getTempClass(temperature: number): string {
    if (temperature <= 15) {
      return 'cold';
    } else if (temperature > 15 && temperature <= 25) {
      return 'moderate';
    } else {
      return 'hot';
    }
  }
}
