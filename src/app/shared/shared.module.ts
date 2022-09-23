import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormControlModule } from './form-control/form-control.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherInterceptor } from './interceptors/weather.interceptor';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    FormControlModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  exports: [FormControlModule, CardComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptor, multi: true },
  ],
})
export class SharedModule {}
