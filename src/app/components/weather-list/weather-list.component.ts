import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  standalone: true,
  imports: [MatListModule, CommonModule],
})

export class WeatherListComponent implements OnInit {
  weatherData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:4454/forecast')
      .subscribe((data: any) => {
        this.weatherData = data;
      }, error => {
        console.error('Error fetching weather data:', error);
      });
  }
}
