import { AsistenciaAngularPage } from './app.po';

describe('asistencia-angular App', function() {
  let page: AsistenciaAngularPage;

  beforeEach(() => {
    page = new AsistenciaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
