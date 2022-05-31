import React from 'react';
import { render } from '@testing-library/react';

import Button, { ButtonProps } from '.';

describe('Button testing', () => {
  let props: ButtonProps;
  beforeEach(() => {
    props = {
      type: 'primary',
      disabled: false,
      loading: false,
      isLarge: false,
    };
  });
  const renderComponent = () => render(<Button {...props}>Button</Button>);

  it('Should shows the children', () => {
    const { getByText } = renderComponent();
    const buttonComponent = getByText('Button');
    expect(buttonComponent).toBeInTheDocument();
  });

  it('Should has oa-button_primary className with default props', () => {
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId('button');
    expect(buttonComponent).toHaveClass('oa-button_primary');
  });

  it('Should has oa-button_secondary className with secondaty type', () => {
    props.type = 'secondary';
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId('button');
    expect(buttonComponent).toHaveClass('oa-button_secondary');
  });

  it('Should has oa-button_subtle className with subtle type', () => {
    props.type = 'subtle';
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId('button');
    expect(buttonComponent).toHaveClass('oa-button_subtle');
  });

  it('Should has oa-button_text className with text type', () => {
    props.type = 'text';
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId('button');
    expect(buttonComponent).toHaveClass('oa-button_text');
  });

  it('Should has oa-button_large className when isLarge is true', () => {
    props.isLarge = true;
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId('button');
    expect(buttonComponent).toHaveClass('oa-button_large');
  });

  it('Should has oa-button_loading className and has LoadingIcon component when loading is true', () => {
    props.loading = true;
    const { getByTestId } = renderComponent();
    const buttonComponent = getByTestId('button');
    const loadingComponent = getByTestId('loading');
    expect(buttonComponent).toHaveClass('oa-button_loading');
    expect(loadingComponent).toBeInTheDocument();
  });
});
