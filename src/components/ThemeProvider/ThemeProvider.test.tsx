import React from 'react';
import { render } from '@testing-library/react';

import ThemeProvider, { ThemeProviderProps } from '.';

describe('Toggle testing', () => {
  let props: ThemeProviderProps;
  beforeEach(() => {
    props = {
      themeType: undefined,
    };
  });
  const renderComponent = () =>
    render(<ThemeProvider {...props}>ThemeProvider</ThemeProvider>);

  it('Should have themeType=light by default', () => {
    const { getByTestId } = renderComponent();
    const themeProviderComponent = getByTestId('theme');
    expect(themeProviderComponent).toHaveClass('oa-theme_light');
  });

  it('Should apply themeType', () => {
    props.themeType = 'dark';
    const { getByTestId } = renderComponent();
    const themeProviderComponent = getByTestId('theme');
    expect(themeProviderComponent).toHaveClass('oa-theme_dark');
  });

  it('Should shows the children', () => {
    const { getByText } = renderComponent();
    const themeProviderComponent = getByText('ThemeProvider');
    expect(themeProviderComponent).toBeInTheDocument();
  });
});
