import { DreamatlasPage } from './app.po';

describe('dreamatlas App', function() {
  let page: DreamatlasPage;

  beforeEach(() => {
    page = new DreamatlasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
