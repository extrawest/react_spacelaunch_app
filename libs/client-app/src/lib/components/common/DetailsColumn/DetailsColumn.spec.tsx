import { render } from '@testing-library/react';

import { DetailsColumn } from './DetailsColumn';
import type { DetailParams } from './DetailsColumn.types';

describe('[component]: DetailsColumn', () => {
  const title = 'Title';
  const details: DetailParams[] = [
    {
      label: 'Label 1',
      value: 'Value 1',
    },
    {
      label: 'Label 2',
      value: 'Value 2',
    },
  ];

  test('Should match style without details', () => {
    const { baseElement } = render(
      <DetailsColumn
        icon={null}
        title={title}
        details={[]}
      />
    );

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Should match style with details', () => {
    const { baseElement } = render(
      <DetailsColumn
        icon={null}
        title={title}
        details={details}
      />
    );

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Map method should be used', () => {
    const mockMap = jest.spyOn(
      Array.prototype as { map: typeof Array.prototype.map },
      'map'
    );
    render(
      <DetailsColumn
        icon={null}
        title={title}
        details={details}
      />
    );

    expect(mockMap).toBeCalled();
  });
});
