import React from 'react';
import { Meta } from '@storybook/react';

import ButtonComponent from '../Button';
import { ButtonProps } from '../Button/button.types';

export default {
  title: 'Open Art/General/Button',
  component: ButtonComponent,
  argTypes: {
    disabled: {
      description: '23232',
      options: [true, false],
      control: { type: 'radio' },
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' },
    },
    type: {
      options: ['primary', 'secondary', 'subtle', 'text'],
      control: { type: 'radio' },
    },
    style: {
      control: false,
    },
    className: {
      control: false,
    },
    onClick: {
      control: false,
    },
  },
} as Meta<ButtonProps>;

export const Button = (props: ButtonProps) => {
  return <ButtonComponent {...props}>Button</ButtonComponent>;
};
