import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-search',
  standalone: true,
  templateUrl: './date-search.component.html',
  styleUrls: ['./date-search.component.scss'],
})
export class DateSearchComponent {
  @Output() dateChange: EventEmitter<string> = new EventEmitter<string>();

  onDateSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.dateChange.emit(input.value); // Emit the selected date as a string
  }
}
