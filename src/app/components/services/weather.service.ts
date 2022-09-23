import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coord, IWeather } from 'src/app/shared/interfaces/weather.interfaces';
import { environment } from '../../../environments/environment';

const baseUrl = environment.openWeather;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWethearName(city: string): Observable<IWeather> {
    const params = new HttpParams().set('q', city);
    return this.http.get<IWeather>(`${baseUrl.url}/weather`, { params });
  }

  getWethearGeolocation(coord: Coord): Observable<IWeather> {
    const params = new HttpParams()
      .set('lon', coord.longitude)
      .set('lat', coord.latitude);
    return this.http.get<IWeather>(`${baseUrl.url}/weather`, { params });
  }
}
