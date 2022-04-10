import React, { FC } from 'react';
import { ThemeProviderProps } from './themeProvider.types';

const ThemeProvider: FC<ThemeProviderProps> = ({ themeType, children }) => {
  return <div className={`oa-theme_${themeType}`}>{children}</div>;
};

export default ThemeProvider;
