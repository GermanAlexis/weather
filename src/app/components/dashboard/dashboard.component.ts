import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../../shared/interfaces/weather.interfaces';
import { catchError, Observable, of } from 'rxjs';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  weather$!: Observable<IWeather>;
  errorStatus: number = 0;
  form = this.fb.group({
    term: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]/)]],
  });

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService,
    private weatherGeolocation: GeolocationService
  ) {}

  ngOnInit(): void {
    this.getWeather();
    if (navigator.geolocation) {
      this.getWeatherGeoLocation();
    }
  }

  getWeather() {
    let term = this.form.get('term').value;
    term = term.trim();
    this.weather$ = this.weatherService.getWethearName(term);
  }

  async getWeatherGeoLocation() {
    try {
      const { coords } = await this.weatherGeolocation.getCurrentposition();
      this.weather$ = this.weatherService.getWethearGeolocation(coords);
    } catch (error) {
      console.log(error);
    }
  }
}
