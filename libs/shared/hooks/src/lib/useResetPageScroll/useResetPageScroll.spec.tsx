import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useResetPageScroll } from './useResetPageScroll';

describe('[hook]: useResetPageScroll', () => {
  const ComponentWithHook = () => {
    useResetPageScroll();
    return null;
  };

  test('Should use scrollTo', () => {
    const mockScrollTo = jest.spyOn(window, 'scrollTo');
    render(
      <MemoryRouter>
        <ComponentWithHook />
      </MemoryRouter>
    );

    expect(mockScrollTo).toBeCalled();
  });
});
