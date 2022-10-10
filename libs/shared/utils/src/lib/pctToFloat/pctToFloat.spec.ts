import { pctToFloat } from './pctToFloat';

describe('[util]: pctToFloat', () => {
  test('Should be equal', () => {
    expect(pctToFloat(50)).toBe(0.5);
    expect(pctToFloat(100)).toBe(1);
    expect(pctToFloat(150)).toBe(1.5);
    expect(pctToFloat(205)).toBe(2.05);
  });

  test('Should be less', () => {
    expect(pctToFloat(60)).toBeLessThan(0.61);
    expect(pctToFloat(110)).toBeLessThan(1.11);
    expect(pctToFloat(160)).toBeLessThan(1.61);
    expect(pctToFloat(215)).toBeLessThan(2.151);
  });

  test('Should be greater', () => {
    expect(pctToFloat(70)).toBeGreaterThan(0.69);
    expect(pctToFloat(120)).toBeGreaterThan(1.19);
    expect(pctToFloat(170)).toBeGreaterThan(1.69);
    expect(pctToFloat(225)).toBeGreaterThan(2.249);
  });
});
