import { NgStore.ClientPage } from './app.po';

describe('ng-store.client App', () => {
  let page: NgStore.ClientPage;

  beforeEach(() => {
    page = new NgStore.ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
