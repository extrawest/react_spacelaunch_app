import { pxToRem } from './pxToRem';

describe('[utility function]: pxToRem', () => {
  test('Should be equal', () => {
    expect(pxToRem(5)).toBe('0.3125rem');
    expect(pxToRem(16)).toBe('1rem');
    expect(pxToRem(27)).toBe('1.6875rem');
    expect(pxToRem(41.26431)).toBe('2.579019375rem');
  });

  test('Should be less', () => {
    let result = parseFloat(pxToRem(7));
    expect(result).toBeLessThan(5);

    result = parseFloat(pxToRem(18));
    expect(result).toBeLessThan(1.13);

    result = parseFloat(pxToRem(29));
    expect(result).toBeLessThan(1.9);

    result = parseFloat(pxToRem(43.26431));
    expect(result).toBeLessThan(2.71);
  });

  test('Should be greater', () => {
    let result = parseFloat(pxToRem(9));
    expect(result).toBeGreaterThan(0.55);

    result = parseFloat(pxToRem(20));
    expect(result).toBeGreaterThan(1.24);

    result = parseFloat(pxToRem(31));
    expect(result).toBeGreaterThan(1.93);

    result = parseFloat(pxToRem(45.26431));
    expect(result).toBeGreaterThan(2.828);
  });
});
