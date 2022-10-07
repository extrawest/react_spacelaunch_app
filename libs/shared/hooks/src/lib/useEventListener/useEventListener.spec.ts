import { renderHook } from '@testing-library/react';

import { useEventListener } from './useEventListener';

describe('[hook]: useEventListener', () => {
  test('Should use addEventListener', () => {
    const mockAddEventListener = jest.spyOn(window, 'addEventListener');
    renderHook(() => useEventListener('click', () => {}));

    expect(mockAddEventListener).toBeCalled();
  });
});
