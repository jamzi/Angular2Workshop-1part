import { GarazaWorkshopPage } from './app.po';

describe('garaza-workshop App', function() {
  let page: GarazaWorkshopPage;

  beforeEach(() => {
    page = new GarazaWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
