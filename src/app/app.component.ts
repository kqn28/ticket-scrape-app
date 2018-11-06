import { Component } from '@angular/core';
import { TicketmasterService } from './services/ticketmaster.service';
import { TicketEvent } from './core/ticket-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Ticket Scrape App';
  public eventHeaders: string[] = [
    '#',
    'Event Id',
    'Presale Time',
    'Artist',
    'Venue',
    'Capacity',
    'TM Count',
    'TM Link',
    'Location'
  ];
  public eventList: TicketEvent[];

  constructor(private _tickermasterService: TicketmasterService) {}

  public fetchData() {
    this._tickermasterService.getEvent('').subscribe((data: any) => {
      this.eventList = TicketEvent.arrayFromApi(data._embedded.events);
      console.log(this.eventList);
    });
  }
}
