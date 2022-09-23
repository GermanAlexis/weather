import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  getCurrentposition(): Promise<any> {
    const options = {
      enableHighAccurancy: true,
      timeout: 5000,
      maximunAge: 0,
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
}
