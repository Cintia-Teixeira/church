import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  private selectedSegment = 'next';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    console.log('Segment changed', event.target.value);
    this.selectedSegment = event.target.value;
  }
}
