import { JsGadgetsPage } from './app.po';

describe('js-gadgets App', () => {
  let page: JsGadgetsPage;

  beforeEach(() => {
    page = new JsGadgetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
