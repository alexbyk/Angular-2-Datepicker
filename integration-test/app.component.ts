import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <material-datepicker
        [date]="date"
        (onSelect)="onSelect"
        dateFormat="mm-dd-yyyy"
      ></material-datepicker>
    `
})
export class AppComponent {
  @Input() date: Date;

  onSelect(date) {
    console.log(date);
  }

  constructor() {
    this.date = new Date();
    setTimeout(() => this.date = new Date(2016, 0, 1), 1000);
  }
}
