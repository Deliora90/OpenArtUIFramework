import React, { FC, useState } from 'react';

import { ToggleProps } from './toggle.types';
import { classes } from '../utils/classes';

import './toggle.scss';

const Toggle: FC<ToggleProps> = ({ checked, onChange }) => {
  const [innerChecked, setInnerChecked] = useState(false);
  const isChecked = checked || innerChecked;
  const handleChange = () => {
    const sentChecked = checked !== undefined ? !checked : !innerChecked;
    setInnerChecked((val) => !val);
    if (onChange) {
      onChange(sentChecked);
    }
  };

  return (
    <div className={classes('oa-toggle', { 'oa-toggle_on': isChecked })}>
      <button className="oa-toggle__track" onClick={handleChange}>
        <div className="oa-toggle__circle" />
      </button>
    </div>
  );
};

export default Toggle;
