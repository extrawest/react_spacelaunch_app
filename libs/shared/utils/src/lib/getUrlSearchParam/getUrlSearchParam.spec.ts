import { getUrlSearchParam } from './getUrlSearchParam';

describe('[utility function]: getUrlSearchParam', () => {
  const url = 'https://example.com?key1=value1&key2=value2';
  const invalidUrl = 'key1=value1&key2=value2';

  test('Should find', () => {
    expect(getUrlSearchParam(url, 'key1')).toBe('value1');
    expect(getUrlSearchParam(url, 'key2')).toBe('value2');
  });

  test("Shouldn't find", () => {
    expect(getUrlSearchParam(url, 'key')).toBeNull();
    expect(getUrlSearchParam(url, 'key3')).toBeNull();
  });

  test("Shouldn't work without ? is url", () => {
    expect(getUrlSearchParam(invalidUrl, 'key1')).toBeNull();
    expect(getUrlSearchParam(invalidUrl, 'key2')).toBeNull();
  });

  test('Should use URLSearchParams get method', () => {
    const spiedGet = jest.spyOn(URLSearchParams.prototype, 'get');
    getUrlSearchParam(url, 'key1');
    getUrlSearchParam(url, 'key2');
    expect(spiedGet).toBeCalledTimes(2);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
