import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { IWeather } from '../interfaces/weather.interfaces';
import { environment } from '../../../environments/environment';
const baseUrl = environment.openWeather.icon;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() weather!: IWeather;
  baseUrlIcon = baseUrl;

  constructor() {}
}
