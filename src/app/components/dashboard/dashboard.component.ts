import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../../shared/interfaces/weather.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  weather$!: Observable<IWeather>;

  form = this.fb.group({
    codePostal: [null],
    city: [null],
    codeZona: [null],
  });

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    console.log('se inicio');
    this.getWeather();
  }

  getWeather() {
    this.weather$ = this.weatherService.getWethearName('monteria');
  }
}
