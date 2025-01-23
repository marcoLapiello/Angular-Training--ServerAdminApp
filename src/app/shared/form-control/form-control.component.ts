import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class FormControlComponent {
  @Input() label!: string;

  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }

  onClick() {
    console.log('clicked');
  }
}
