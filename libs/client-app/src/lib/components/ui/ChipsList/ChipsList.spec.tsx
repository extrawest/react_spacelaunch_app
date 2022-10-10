import { render } from '@testing-library/react';

import type { CustomChipProps } from '../../common';
import { ChipsList } from './ChipsList';

describe('[component]: ChipsList', () => {
  const chips: CustomChipProps[] = [
    {
      label: 'Label 1',
    },
    {
      label: 'Label 2',
    },
  ];

  test('Labels should exist', () => {
    const { getByText } = render(<ChipsList chips={chips} />);

    expect(getByText(chips[0].label)).toBeInTheDocument();
    expect(getByText(chips[1].label)).toBeInTheDocument();
  });
});
