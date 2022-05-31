import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Toggle, { ToggleProps } from '.';

describe('Toggle testing', () => {
  let props: ToggleProps;
  beforeEach(() => {
    props = {
      disabled: false,
    };
  });
  const renderComponent = () => render(<Toggle {...props} />);

  it('Should has oa-toggle_on className when checked equals true', () => {
    const { getByTestId } = renderComponent();
    const toggleComponent = getByTestId('toggle');
    const toggleButtonComponent = getByTestId('toggleButton');
    expect(toggleComponent).not.toHaveClass('oa-toggle_on');
    fireEvent.click(toggleButtonComponent);
    expect(toggleComponent).toHaveClass('oa-toggle_on');
  });
});
