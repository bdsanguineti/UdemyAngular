import { Component } from '@angular/core';
import { TrackerData } from './modules/trackerData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  clickTimeStampLog: TrackerData;
  public showMessage: boolean = false;

  constructor() {
    this.clickTimeStampLog = new TrackerData;
  }

  public toggleMessage(): void {
    this.showMessage = !this.showMessage;

    this.clickTimeStampLog.clicksCount++;
    this.clickTimeStampLog.timeStampClickHistory.push({id: this.clickTimeStampLog.clicksCount, date: new Date()});
  };
}
