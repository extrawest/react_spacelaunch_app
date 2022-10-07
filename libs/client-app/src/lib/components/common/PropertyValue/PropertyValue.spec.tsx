import { render } from '@testing-library/react';

import { PropertyValue } from './PropertyValue';

describe('[component]: PropertyValue', () => {
  const property = 'property';
  const value = 'value';

  test('Should match default style', () => {
    const { baseElement } = render(
      <PropertyValue property={property}>{value}</PropertyValue>
    );

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Property and value should be correct', () => {
    const { getByText } = render(
      <PropertyValue property={property}>{value}</PropertyValue>
    );
    const formattedProperty = `${property}:`;

    expect(getByText(formattedProperty)).toHaveTextContent(formattedProperty);
    expect(getByText(value)).toHaveTextContent(value);
  });
});
