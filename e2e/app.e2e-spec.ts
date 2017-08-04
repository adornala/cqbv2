import { CqbV20Page } from './app.po';

describe('cqb-v20 App', () => {
  let page: CqbV20Page;

  beforeEach(() => {
    page = new CqbV20Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
