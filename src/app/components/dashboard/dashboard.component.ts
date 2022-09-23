import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  form = this.fb.group({
    codePostal: [null],
    city: [null],
    codeZona: [null],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
