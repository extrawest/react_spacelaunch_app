import { render } from '@testing-library/react';

import { Loader } from './Loader';

describe('[component]: Loader', () => {
  const label = 'Label';

  test('Should match default style', () => {
    const { baseElement } = render(<Loader />);

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Should match with label', () => {
    const { baseElement } = render(<Loader label={label} />);

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Label should be correct', () => {
    const { getByText } = render(<Loader label={label} />);
    expect(getByText(label)).toHaveTextContent(label);
  });
});
