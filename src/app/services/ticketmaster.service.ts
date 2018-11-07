import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchParameters } from '../core/search-parameters';

@Injectable()
export class TicketmasterService {
  private apiKey = '90Y7tpeQXmFxduPFgLd5E7Yqqkw6f3XX';

  constructor(private http: HttpClient) { }

  public getEvent(parameters: SearchParameters) {
    const parameterStrings: string[] = [];
    Object.keys(parameters).forEach((parameterKey: string) => {
      if (parameters[parameterKey] !== '') {
        parameterStrings.push(parameterKey + '=' + parameters[parameterKey]);
      }
    });
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events.json?' +
      parameterStrings.join('&') + '&apikey=' + this.apiKey);
  }
}
