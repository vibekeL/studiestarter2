import { Studiestarter2Page } from './app.po';

describe('studiestarter2 App', () => {
  let page: Studiestarter2Page;

  beforeEach(() => {
    page = new Studiestarter2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
