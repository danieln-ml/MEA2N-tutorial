import { MEA2NTutorialPage } from './app.po';

describe('mea2-n-tutorial App', function() {
  let page: MEA2NTutorialPage;

  beforeEach(() => {
    page = new MEA2NTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
