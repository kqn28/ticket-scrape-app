export class TicketEvent {
  public static count = 1;

  public tableId: number;
  public eventId: string;
  public date: string;
  public startTime: string;
  public timezone: string;
  public presaleTime: string;
  public name: string;
  public venue: string;
  public capacity: number;
  public tMCount: number;
  public tMLink: string;
  public location: string;

  constructor(
    eventId: string,
    date: string,
    startTime: string,
    timezone: string,
    presaleTime: string,
    name: string,
    venue: string,
    capacity: number,
    tMCount: number,
    tMLink: string,
    location: string
  ) {
    this.tableId = TicketEvent.count++;
    this.eventId = eventId;
    this.date = date;
    this.startTime = startTime;
    this.timezone = timezone;
    this.presaleTime = presaleTime;
    this.name = name;
    this.venue = venue;
    this.capacity = capacity;
    this.tMCount = tMCount;
    this.tMLink = tMLink;
    this.location = location;
  }

  // Item needs to be filled later: capacity, tMCount
  public static fromApi(data: any) {
    let earliestPresaleDate = '';
    if (data.presales) {
      earliestPresaleDate =
        data.sales.presales.sort((firstItem, secondItem) => firstItem.startDateTime - secondItem.startDateTime)[0];
    }
    return new TicketEvent(
      data.id,
      data.dates.start.localDate,
      data.dates.start.localTime,
      data.dates.timezone,
      earliestPresaleDate,
      data.name,
      data._embedded.venues[0].name,
      0,
      0,
      data.url,
      data._embedded.venues[0].city.name + ', ' +
        (data._embedded.venues[0].state !== undefined ? data._embedded.venues[0].state.stateCode : '')
    );
  }
  public static arrayFromApi(dataArray: any[]) {
    return dataArray.map(item => TicketEvent.fromApi(item));
  }
}
