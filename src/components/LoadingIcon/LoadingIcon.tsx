import * as React from 'react';

import { LoadingIconType } from './LoadingIcon.types';
import { classes } from '@utils/classes';

import './loadingIcon.scss';

interface LoadingIconProps {
  type?: LoadingIconType;
}

const LoadingIcon = (props: LoadingIconProps) => (
  <svg
    className="oa-svg"
    aria-labelledby="svg-icon-loading"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
  >
    <title id="svg-icon-loading">Loading</title>
    <defs>
      <linearGradient id="spinner-gradient">
        <stop offset="0%" stopOpacity="1" stopColor="#0038F5" />
        <stop offset="100%" stopOpacity="1" stopColor="#9F03FF" />
      </linearGradient>
    </defs>
    <circle
      className={classes('oa-path', {
        primary: props.type === 'primary',
      })}
      cx="12"
      cy="12"
      r="8"
      stroke={props.type === 'gradient' ? 'url(#spinner-gradient)' : '#FCFCFC'}
      strokeLinecap="round"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

export default LoadingIcon;
