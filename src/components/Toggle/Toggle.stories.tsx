import React from 'react';
import { Meta } from '@storybook/react';

import { Toggle as ToggleComponent, ToggleProps } from '../../';

export default {
  title: 'Open Art/General/Toggle',
  component: ToggleComponent,
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ToggleProps>;

export const Toggle = (props: ToggleProps) => {
  return <ToggleComponent {...props} />;
};
