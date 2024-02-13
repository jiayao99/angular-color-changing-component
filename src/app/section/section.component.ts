import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() color: string = 'black';
  @Output() colorChange = new EventEmitter<string>();

  setColor() {
    this.colorChange.emit(this.color);
  }

}
