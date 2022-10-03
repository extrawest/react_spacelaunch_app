import { range } from './range';

describe('[utility function]: range', () => {
  test('Should be equal', () => {
    expect(range(3)).toEqual([0, 1, 2]);
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(0)).toEqual([]);
    expect(range(-1)).toEqual([]);
  });

  test('Length should be equal', () => {
    expect(range(4).length).toBe(4);
    expect(range(6).length).toBe(6);
    expect(range(0).length).toBe(0);
    expect(range(-2).length).toBe(0);
  });

  test('Should contain', () => {
    expect(range(5)).toContain(0);
    expect(range(5)).toContain(4);
    expect(range(7)).toContain(0);
    expect(range(7)).toContain(6);
  });

  test("Shouldn't contain", () => {
    expect(range(0)).not.toContain(0);
    expect(range(0)).not.toContain(1);
    expect(range(-3)).not.toContain(0);
    expect(range(-3)).not.toContain(-1);
  });
});
