import { registerWorkboxServiceWorker } from './registerWorkboxServiceWorker';

describe('[util]: registerWorkboxServiceWorker', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  test("Shouldn't be registered in development", async () => {
    process.env.NODE_ENV = 'development';

    const spiedLogWarn = jest.spyOn(console, 'warn');
    await registerWorkboxServiceWorker('some-path');
    expect(spiedLogWarn).toBeCalled();
  });

  afterEach(() => {
    process.env = env;
  });
});
