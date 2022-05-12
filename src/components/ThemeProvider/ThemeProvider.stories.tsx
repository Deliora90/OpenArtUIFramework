import React from 'react';
import { Meta } from '@storybook/react';

import {
  Toggle as ToggleComponent,
  ThemeProvider as ThemeProviderComponent,
  ThemeProviderProps,
} from '../..';

export default {
  title: 'Open Art/Other/ThemeProvider',
  component: ThemeProviderComponent,
  argTypes: {
    themeType: {
      defaultValue: 'light',
      control: { type: 'select' },
    },
  },
} as Meta<ThemeProviderProps>;

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <ThemeProviderComponent {...props}>
      <ToggleComponent />
    </ThemeProviderComponent>
  );
};
