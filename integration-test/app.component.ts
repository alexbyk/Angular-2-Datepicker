import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <material-datepicker
        #datePicker
        [date]="date"
        (onSelect)="onSelect($event)"
        dateFormat="mm-dd-yyyy"
      ></material-datepicker>

      <button (click)="datePicker.date=null">resetNull</button>
      <button (click)="datePicker.date=''">resetEmpty</button>
      Model: {{ date | json }}
      DatePicker: {{ datePicker.date | json }}
    `
})
export class AppComponent {
  @Input() date: Date;

  onSelect(date) {
    this.date = date;
    console.log("onSelect: ", date);
  }

  constructor() {
    setTimeout(() => this.date = new Date(2016, 0, 1), 2000);
  }
}
