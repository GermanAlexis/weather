import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.openWeather;

export class WeatherInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      params: req.params.appendAll({
        units: 'metric',
        appid: baseUrl.key,
        lang: 'es',
      }),
    });
    return next.handle(cloneReq);
  }
}
