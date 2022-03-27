import React, { FC } from 'react';
import { Transition } from 'react-transition-group';

import LoadingIcon from '../LoadingIcon/LoadingIcon';
import { ButtonProps, ButtonEvents } from './button.types';
import { classes } from '../utils/classes';

import './button.scss';

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  loading,
  style,
  type,
  onClick,
}) => {
  const canAct = !loading;
  const loadingType = type !== 'primary' ? 'gradient' : type;
  return (
    <button
      className={classes(
        'oa-button',
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
      <Transition in={loading} timeout={200} unmountOnExit>
        {(state) => (
          <div
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
