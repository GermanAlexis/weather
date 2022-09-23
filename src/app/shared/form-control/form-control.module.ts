import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './input-form/input-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonFormComponent } from './button-form/button-form.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
@NgModule({
  declarations: [InputFormComponent, ButtonFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,

    ReactiveFormsModule,
  ],
  exports: [InputFormComponent, ButtonFormComponent],
})
export class FormControlModule {}
