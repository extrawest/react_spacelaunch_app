import { render } from '@testing-library/react';

import { CustomChip } from './CustomChip';

describe('[component]: CustomChip', () => {
  const label = 'Label';

  test('Should match default style', () => {
    const { baseElement } = render(<CustomChip label={label} />);

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Should match style with gradient', () => {
    const { baseElement } = render(
      <CustomChip
        label={label}
        gradient
      />
    );

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Label should be correct', () => {
    const { getByText } = render(<CustomChip label={label} />);
    expect(getByText(label)).toHaveTextContent(label);
  });
});
