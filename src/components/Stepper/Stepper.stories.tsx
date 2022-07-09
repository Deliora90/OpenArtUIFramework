import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import { Stepper as StepperComponent, Button } from '../../';
import './stepper.stories.scss';

export default {
  title: 'Open Art/General/Stepper',
  component: StepperComponent,
} as Meta;

export const Stepper = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleDecreaseIndex = () => {
    setCurrentIndex((val) => (val >= 1 ? val - 1 : 0));
  };
  const handleIncreaseIndex = () => {
    setCurrentIndex((val) => val + 1);
  };
  return (
    <div className="wrapper">
      <div className="description">
        <h4 className="description__title">Basic</h4>
        <div className="description__line" />
      </div>
      <StepperComponent currentIndex={currentIndex}>
        <StepperComponent.Step key={0} title="1" />
        <StepperComponent.Step key={1} title="2" />
        <StepperComponent.Step key={2} title="3" />
        <StepperComponent.Step key={3} title="4" />
      </StepperComponent>
      <div className="description">
        <h4 className="description__title">With description</h4>
        <div className="description__line" />
      </div>
      <StepperComponent currentIndex={currentIndex}>
        <StepperComponent.Step key={0} title="1" description="Step 1" />
        <StepperComponent.Step key={1} title="2" description="Step 2" />
        <StepperComponent.Step key={2} title="3" description="Step 3" />
        <StepperComponent.Step key={3} title="4" description="Step 4" />
      </StepperComponent>
      <div className="control">
        <Button type="secondary" onClick={handleDecreaseIndex}>
          Prev
        </Button>
        <Button type="primary" onClick={handleIncreaseIndex}>
          Next
        </Button>
      </div>
    </div>
  );
};
