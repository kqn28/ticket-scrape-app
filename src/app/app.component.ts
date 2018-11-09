import { Component } from '@angular/core';
import { TicketmasterService } from './services/ticketmaster.service';
import { TicketEvent } from './core/ticket-event';
import { SearchParameters } from './core/search-parameters';

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
    'Artist',
    'Date',
    'Time',
    'Timezone',
    'Presale Time',
    'Venue',
    'Capacity',
    'TM Count',
    'TM Link',
    'Location'
  ];
  public eventList: TicketEvent[];
  public searchId = '';
  public searchKeyword = '';
  public searchPostalCode = '';

  constructor(private _tickermasterService: TicketmasterService) {}

  public submit() {
    TicketEvent.count = 1;
    const parameters: SearchParameters = new SearchParameters(this.searchId, this.searchKeyword, this.searchPostalCode);
    this._tickermasterService.getEvent(parameters).subscribe((data: any) => {
      if (data._embedded) {
        this.eventList = TicketEvent.arrayFromApi(data._embedded.events);
      } else {
        alert('There is no event found from your query');
      }
    });
  }
}
