import React from 'react';
import { Meta } from '@storybook/react';

import { Button as ButtonComponent, ButtonProps } from '..';

export default {
  title: 'Open Art/General/Button',
  component: ButtonComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    isLarge: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    type: {
      defaultValue: null,
      control: { type: 'select' },
    },
    style: {
      control: false,
    },
    className: {
      control: false,
    },
    onClick: {
      control: false,
      action: 'clicked',
    },
  },
} as Meta<ButtonProps>;

export const Button = (props: ButtonProps) => {
  return <ButtonComponent {...props}>Button</ButtonComponent>;
};
