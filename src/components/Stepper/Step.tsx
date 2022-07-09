import React from 'react';

import { classes } from '@utils/classes';
import { StepProps } from './stepper.types';
import { Completed } from '@icons';
import './step.scss';

const Step = ({ title, description, isCompleted, isCurrent }: StepProps) => (
  <div
    data-testid="step"
    className={classes(
      'oa-step',
      {
        'oa-step_completed': isCompleted,
      },
      {
        'oa-step_active': isCurrent,
      }
    )}
  >
    <div className="oa-step__wrapper">
      <div className="oa-step__circle">
        {isCompleted ? (
          <Completed className="oa-step__img" />
        ) : (
          <p className="oa-step__title">{title}</p>
        )}
      </div>
      {description && <p className="oa-step__description">{description}</p>}
      <div className="oa-step__progress_bar" />
    </div>
  </div>
);
export default Step;
