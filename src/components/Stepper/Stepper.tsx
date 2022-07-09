import React from 'react';

import Step from './Step';
import { StepperProps, StepProps } from './stepper.types';
import { isObject } from '@utils/isObject';
import './stepper.scss';

const isStep = (children: unknown): children is StepProps =>
  isObject(children) && 'props' in children && 'title' in children['props'];

const Stepper = ({ currentIndex, children }: StepperProps) => {
  if (!children) {
    throw new Error('Children is mandatory!');
  }

  if (Array.isArray(children)) {
    return (
      <div data-testid="stepper" className="oa-stepper">
        {children.map((child, index) =>
          isStep(child) ? (
            <Step
              key={child.key}
              {...child.props}
              isCompleted={index < currentIndex}
              isCurrent={index === currentIndex}
            />
          ) : (
            child
          )
        )}
      </div>
    );
  }
  return (
    <div data-testid="stepper" className="oa-stepper">
      {children}
    </div>
  );
};

Stepper.Step = Step;

export default Stepper;
