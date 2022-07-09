import React from 'react';
import { render } from '@testing-library/react';

import Stepper, { StepProps, StepperProps } from '.';
import Step from './Step';

describe('Stepper testing', () => {
  let stepperProps: StepperProps;
  beforeEach(() => {
    stepperProps = {
      currentIndex: 0,
      //children: <></>,
    };
  });

  const renderComponent = () =>
    render(
      <Stepper {...stepperProps}>
        <Stepper.Step key={0} title="1" />
        <Stepper.Step key={1} title="2" />
        <Stepper.Step key={2} title="3" />
      </Stepper>
    );
  it('Should have 3 children', () => {
    const { getByTestId } = renderComponent();
    const stepperComponent = getByTestId('stepper');
  });
});
