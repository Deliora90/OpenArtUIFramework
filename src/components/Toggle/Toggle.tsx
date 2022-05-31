import React, { PropsWithChildren, useState } from 'react';

import { ToggleProps } from './toggle.types';
import { classes } from '@utils/classes';

import './toggle.scss';

const Toggle = ({
  checked,
  disabled,
  onChange,
}: PropsWithChildren<ToggleProps>) => {
  const [innerChecked, setInnerChecked] = useState(false);
  const isChecked = checked || innerChecked;
  const handleChange = () => {
    const sentChecked = !(checked !== undefined ? checked : innerChecked);
    if (checked === undefined) {
      setInnerChecked((val) => !val);
    }
    if (onChange) {
      onChange(sentChecked);
    }
  };

  return (
    <div
      data-testid="toggle"
      className={classes('oa-toggle', { 'oa-toggle_on': isChecked })}
    >
      <button
        data-testid="toggleButton"
        className="oa-toggle__track"
        disabled={disabled}
        onClick={handleChange}
      >
        <div className="oa-toggle__circle" />
      </button>
    </div>
  );
};

export default Toggle;
