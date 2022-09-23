import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/shared/interfaces/weather.interfaces';
import { environment } from '../../../environments/environment';

const baseUrl = environment.openWeather;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWethearName(city: string): Observable<IWeather> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', baseUrl.key)
      .set('lang', 'es');

    return this.http.get<IWeather>(`${baseUrl.url}/weather`, { params });
  }
}
