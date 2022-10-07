import { formatDate } from './formatDate';

describe('[util]: formatDate', () => {
  test('Should be correct', () => {
    expect(formatDate(new Date('1995-12-17T03:24:00'))).toBe(
      'Dec. 17, 1995, 3:24 am'
    );
    expect(formatDate(new Date('2015-10-23T07:14:00'))).toBe(
      'Oct. 23, 2015, 7:14 am'
    );
  });
});
