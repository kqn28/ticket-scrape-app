import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TicketmasterService {
  private apiKey = '90Y7tpeQXmFxduPFgLd5E7Yqqkw6f3XX';

  constructor(private http: HttpClient) { }

  public getEvent(parameter: string) {
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=90Y7tpeQXmFxduPFgLd5E7Yqqkw6f3XX');
  }
}
