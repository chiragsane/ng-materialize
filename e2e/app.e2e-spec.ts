import { NgMaterializePage } from './app.po';

describe('ng-materialize App', () => {
  let page: NgMaterializePage;

  beforeEach(() => {
    page = new NgMaterializePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
