import { CSSProperties, MouseEventHandler } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'subtle' | 'text';

export type ButtonEvents = {
  onClick?: MouseEventHandler<HTMLElement>;
};

export type GeneralButtonProps = {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: CSSProperties;
  type?: ButtonType;
};

export type ButtonProps = GeneralButtonProps & ButtonEvents;
