import { render } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('[component]: Spinner', () => {
  test('Should match default variant', () => {
    const { baseElement } = render(<Spinner />);

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Should match fixed variant', () => {
    const { baseElement } = render(<Spinner variant="fixed" />);

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
