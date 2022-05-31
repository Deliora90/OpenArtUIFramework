import React, { PropsWithChildren } from 'react';
import { ThemeProviderProps } from './themeProvider.types';

const ThemeProvider = ({
  themeType = 'light',
  children,
}: PropsWithChildren<ThemeProviderProps>) => {
  return (
    <div data-testid="theme" className={`oa-theme_${themeType}`}>
      {children}
    </div>
  );
};

export default ThemeProvider;
