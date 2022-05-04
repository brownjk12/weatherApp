import { Component, OnInit } from '@angular/core';
import { WeatherInterface } from './models/weatherAPI.models';
import { WeatherAPIService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherAPIService) {}

  weatherData?: WeatherInterface;

  ngOnInit(): void {
    this.weatherService.fetchWeatherData('London').subscribe({
      next: (response) => {
        this.weatherData = response;
      },
    });
  }
}
