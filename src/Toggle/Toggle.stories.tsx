import React from 'react';
import { Meta } from '@storybook/react';

import {
  Toggle as ToggleComponent,
  ThemeProvider as ThemeProviderComponent,
  ToggleProps,
  ThemeProviderProps,
} from '..';

export default {
  title: 'Open Art/General/Toggle',
  component: ThemeProviderComponent,
  subcomponents: { ToggleComponent },
  argTypes: {
    themeType: {
      defaultValue: null,
      control: { type: 'select' },
    },
    checked: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta<ToggleProps & ThemeProviderProps>;

export const Toggle = (props: ToggleProps & ThemeProviderProps) => {
  return (
    <ThemeProviderComponent themeType={props.themeType}>
      <ToggleComponent {...props} />
    </ThemeProviderComponent>
  );
};