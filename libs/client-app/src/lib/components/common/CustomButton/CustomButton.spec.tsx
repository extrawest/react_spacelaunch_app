import { fireEvent, render } from '@testing-library/react';

import { CustomButton } from './CustomButton';

describe('[component]: CustomButton', () => {
  const text = 'Text';

  test('Should match default style', () => {
    const { baseElement } = render(
      <CustomButton onClick={() => {}}>{text}</CustomButton>
    );

    expect(baseElement).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  test('Text should be correct', () => {
    const { getByText } = render(
      <CustomButton onClick={() => {}}>{text}</CustomButton>
    );

    expect(getByText(text)).toHaveTextContent(text);
  });

  test('Click event should work', () => {
    const mockFn = jest.fn();
    const { getByRole } = render(
      <CustomButton onClick={mockFn}>{text}</CustomButton>
    );

    fireEvent.click(getByRole('button'));
    expect(mockFn).toBeCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
