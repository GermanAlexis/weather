import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Input()
  icon!: string;
  @Input() type: string = 'text';
  @Input() hint: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() readonly: boolean = false;
  @Input() errorMessages: { [key: string]: string } = {};
  @Input()
  fc!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
