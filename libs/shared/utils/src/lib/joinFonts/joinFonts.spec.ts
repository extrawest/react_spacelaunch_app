import { joinFonts } from './joinFonts';

describe('[utility function]: joinFonts', () => {
  test('Should be equal', () => {
    expect(joinFonts('Roboto', 'Monospace')).toBe('Roboto,Monospace');
    expect(joinFonts('Roboto', 'Monospace', 'Open Sans')).toBe(
      'Roboto,Monospace,Open Sans'
    );
    expect(joinFonts('Roboto', 'Monospace ', 'Open Sans ')).toBe(
      'Roboto,Monospace ,Open Sans '
    );
  });

  test('Length should be equal', () => {
    expect(joinFonts('Roboto', 'Open Sans').length).toBe(16);
    expect(joinFonts('Monospace ', 'Open Sans').length).toEqual(20);
  });
});
