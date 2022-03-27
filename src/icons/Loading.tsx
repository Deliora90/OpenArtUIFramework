import * as React from 'react';
import { SVGProps } from 'react';

const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Loading_svg__e8BO6JzDoyf1"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    width={25}
    height={24}
    {...props}
  >
    <style>
      {
        '@keyframes e8BO6JzDoyf2_tr__tr{0%{transform:translate(12.732074px,12.000011px) rotate(0deg)}12.5%{transform:translate(12.732074px,12.000011px) rotate(45deg)}25%{transform:translate(12.732074px,12.000011px) rotate(90deg)}37.5%{transform:translate(12.732074px,12.000011px) rotate(135deg)}50%{transform:translate(12.732074px,12.000011px) rotate(180deg)}62.5%{transform:translate(12.732074px,12.000011px) rotate(225deg)}75%{transform:translate(12.732074px,12.000011px) rotate(270deg)}87.5%{transform:translate(12.732074px,12.000011px) rotate(315deg)}to{transform:translate(12.732074px,12.000011px) rotate(360deg)}}'
      }
    </style>
    <path
      d="M12.732 2a10 10 0 1 0 10 10"
      fill="none"
      stroke="#fcfcfc"
      strokeWidth={2}
      strokeLinejoin="round"
      style={{
        animation: 'e8BO6JzDoyf2_tr__tr 2400ms linear infinite normal forwards',
      }}
    />
  </svg>
);

export default SvgLoading;
