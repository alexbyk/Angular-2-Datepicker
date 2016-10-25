import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <material-datepicker
        #datePicker
        [(date)]="date"
        (onSelect)="onSelect($event)"
        dateFormat="MM-DD-YYYY"
      ></material-datepicker>

      <button (click)="setToday()">today</button>
      <button (click)="datePicker.date=null">reset</button>
      <hr>
      Mirror:
      <material-datepicker
        [(date)]="date"
        dateFormat="YYYY/MM/DD"
      ></material-datepicker>
      <p>
      {{ date }} - Model
      <p>
      {{ datePicker.date }} - DatePicker

    `
})
export class AppComponent {
  @Input() date: Date;

  onSelect(date) {
    console.log("onSelect: ", date);
  }
  setToday() {
    this.date = new Date();
  }
}
