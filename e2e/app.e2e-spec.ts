import { BlogANWEBPage } from './app.po';

describe('blog-an-web App', () => {
  let page: BlogANWEBPage;

  beforeEach(() => {
    page = new BlogANWEBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
