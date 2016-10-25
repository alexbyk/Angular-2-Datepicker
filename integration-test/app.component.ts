import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>Test</div>

    <button (click)="setToday()">today</button>
    <button (click)="clearDate()">reset</button>
    <p>

    <material-datepicker
    (onSelect)="onSelect($event)" [(date)]="date">
    </material-datepicker>

    <hr>
    {{ date }}
    <p>
    Mirror(disabled, DD-MM-YYYY):
    <material-datepicker
    #datepickerMirror
    placeholder="nothing is selected"
    disabled="true"
    [(date)]="date"
    dateFormat="DD-MM-YYYY"
    ><i>disabled DD-MM-YYYY:</i></material-datepicker>

  `
})
export class AppComponent {
  date: Date;
  disabled: boolean;

  onSelect(date: Date) {
    console.log("onSelect: ", date);
  }
  clearDate() {
    this.date = null;
  }
  setToday() {
    this.date = new Date();
  }
}
