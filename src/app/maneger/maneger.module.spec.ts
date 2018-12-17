import { ManegerModule } from './maneger.module';

describe('ManegerModule', () => {
  let manegerModule: ManegerModule;

  beforeEach(() => {
    manegerModule = new ManegerModule();
  });

  it('should create an instance', () => {
    expect(manegerModule).toBeTruthy();
  });
});
