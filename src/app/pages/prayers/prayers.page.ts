import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.page.html',
  styleUrls: ['./prayers.page.scss'],
})
export class PrayersPage {

  // constructor() {}

  // ngOnInit() {
  // }
  prayersInfo: any[];

  // automaticClose = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/prayersInfo.json').subscribe(res => {
      this.prayersInfo = res['prayers'];
      this.prayersInfo[0].open = true;
    });
  }

  toggleSection(index) {
    this.prayersInfo[index].open = !this.prayersInfo[index].open;
    console.log(index);
    if (this.prayersInfo[index].open) {
      this.prayersInfo
        .filter((prayer, prayerIndex) => prayerIndex !== index)
        .map(prayer => prayer.open = false);
    }
  }

  // toggleItem(index, detailIndex) {
  //   this.prayersInfo[index].details[detailIndex].open = !this.prayersInfo[index].details[detailIndex].open;
  // }
}
