export class SearchParameters {
  public id = '';
  public keyword = '';
  public postalCode = '';
  public startDateTime = '';
  public endDateTime = '';
  public onsaleStartDateTime = '';
  public onsaleEndDateTime = '';
  public city = '';
  public stateCode = '';
  public countryCode = '';

  public searchStartDateTime = '';
  public searchEndDateTime = '';
  public searchOnsaleStartDateTime = '';
  public searchOnsaleEndDateTime = '';
  public searchCity = '';
  public searchStateCode = '';
  public searchCountryCode = '';

  constructor(
    searchId: string,
    searchKeyword: string,
    searchPostalCode: string,
    searchStartDateTime: string,
    searchEndDateTime: string,
    searchOnsaleStartDateTime: string,
    searchOnsaleEndDateTime: string,
    searchCity: string,
    searchStateCode: string,
    searchCountryCode: string
  ) {
    this.id = searchId;
    this.keyword = searchKeyword;
    this.postalCode = searchPostalCode;
    this.startDateTime = searchStartDateTime;
    this.endDateTime = searchEndDateTime;
    this.onsaleStartDateTime = searchOnsaleStartDateTime;
    this.onsaleEndDateTime = searchOnsaleEndDateTime;
    this.city = searchCity;
    this.stateCode = searchStateCode;
    this.countryCode = searchCountryCode;
  }
}
