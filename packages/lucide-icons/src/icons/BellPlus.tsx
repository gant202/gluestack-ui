import React from 'react';
import { Svg, Path } from 'react-native-svg';
const Icon = (props: any) => {
  const { color = 'black', size = 24 } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916" />
      <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <Path d="M18 2v6" />
      <Path d="M21 5h-6" />
    </Svg>
  );
};
Icon.displayName = 'BellPlus';
export const BellPlus = React.memo(Icon);
