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
      {{ date }} - Model
      <p>
      {{ datePicker.date }} - DatePicker
      <p>
      Mirror(disabled):
      <material-datepicker
        disabled="true"
        [(date)]="date"
        dateFormat="YYYY/MM/DD"
      ></material-datepicker>

    `
})
export class AppComponent {
  date: Date;
  disabled: boolean;

  onSelect(date) {
    console.log("onSelect: ", date);
  }
  setToday() {
    this.date = new Date();
  }
}
