import { BangularBankPage } from './app.po';

describe('bangular-bank App', () => {
  let page: BangularBankPage;

  beforeEach(() => {
    page = new BangularBankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
