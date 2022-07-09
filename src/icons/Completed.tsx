import * as React from 'react';
import { SVGProps } from 'react';

const SvgCompleted = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <style>
        {
          '.Completed_svg__cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}'
        }
      </style>
    </defs>
    <g id="Completed_svg__checkmark">
      <path className="Completed_svg__cls-1" d="m3 16 9 9M12 25 29 7" />
    </g>
  </svg>
);

export default SvgCompleted;
