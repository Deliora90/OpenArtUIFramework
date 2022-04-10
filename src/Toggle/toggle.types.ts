export type GeneralToggleProps = {
  checked?: boolean;
};

export type ToggleEvents = {
  onChange?: (checked: boolean) => void;
};

export type ToggleProps = GeneralToggleProps & ToggleEvents;
