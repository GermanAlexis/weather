import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    term: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]/)]],
  });

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    let term = this.form.get('term').value;
    term = term.trim();
    this.weather$ = this.weatherService.getWethearName(term);
  }
}
