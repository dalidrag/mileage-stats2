import { MileageStats2Page } from './app.po';

describe('mileage-stats2 App', () => {
  let page: MileageStats2Page;

  beforeEach(() => {
    page = new MileageStats2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
