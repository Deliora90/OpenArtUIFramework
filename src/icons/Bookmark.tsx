import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9 14.116 8 5.556V1.322H1v18.35l8-5.556Z"
      stroke="#555"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBookmark;
