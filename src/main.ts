import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';  
import { WeatherListComponent } from './app/components/weather-list/weather-list.component';  // Correct path
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

bootstrapApplication(WeatherListComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes)), importProvidersFrom(HttpClientModule), importProvidersFrom(CommonModule)
  ],
})
  .catch((err) => console.error(err));

