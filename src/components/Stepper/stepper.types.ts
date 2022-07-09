export type StepperProps = {
  currentIndex: number;
  children?: JSX.Element[];
};

export type StepProps = {
  title: string;
  isCompleted?: boolean;
  isCurrent?: boolean;
  description?: string;
};
