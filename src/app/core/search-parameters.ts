export class SearchParameters {
  public id = '';
  public keyword = '';
  public postalCode = '';

  constructor(searchId: string, searchKeyword: string, searchPostalCode: string) {
    this.id = searchId;
    this.keyword = searchKeyword;
    this.postalCode = searchPostalCode;
  }
}
