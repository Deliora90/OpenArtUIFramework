import React, { PropsWithChildren } from 'react';
import { Transition } from 'react-transition-group';

import { ButtonProps } from './button.types';
import LoadingIcon from '@components/LoadingIcon';
import { classes } from '@utils/classes';

import './button.scss';

const Button = ({
  children,
  className,
  disabled,
  isLarge,
  loading,
  style,
  type,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const canAct = !loading;
  const loadingType = type !== 'primary' ? 'gradient' : type;
  return (
    <button
      data-testid="button"
      className={classes(
        'oa-button',
        { 'oa-button_large': isLarge },
        { 'oa-button_loading': loading },
        { 'oa-button_primary': type === 'primary' },
        { 'oa-button_secondary': type === 'secondary' },
        { 'oa-button_subtle': type === 'subtle' },
        { 'oa-button_text': type === 'text' },
        className
      )}
      style={style}
      disabled={disabled}
      onClick={canAct ? onClick : undefined}
    >
      <Transition
        in={loading}
        timeout={{ appear: 200, enter: 200, exit: 100 }}
        unmountOnExit
      >
        {(state) => (
          <div
            data-testid="loading"
            className={classes(
              'oa-button__loading',
              `oa-button__loading-${state}`
            )}
          >
            <LoadingIcon type={loadingType} />
          </div>
        )}
      </Transition>
      <span className="oa-button__text">{children}</span>
    </button>
  );
};

export default Button;
