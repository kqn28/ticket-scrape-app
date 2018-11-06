import { TestBed, inject } from '@angular/core/testing';

import { TicketmasterService } from './ticketmaster.service';

describe('TicketmasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketmasterService]
    });
  });

  it('should be created', inject([TicketmasterService], (service: TicketmasterService) => {
    expect(service).toBeTruthy();
  }));
});
