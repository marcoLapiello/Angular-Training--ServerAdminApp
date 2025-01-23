import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  @Input() label!: string;
}
