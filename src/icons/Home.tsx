import * as React from 'react';
import { SVGProps } from 'react';

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m2 8.686 10-7.364 10 7.364v14.636h-7v-7.5H9v7.5H2V8.686Z"
      stroke="#FCFCFC"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgHome;
