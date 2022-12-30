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
      <Path d="m17 17-5 5V12l-5 5" />
      <Path d="m2 2 20 20" />
      <Path d="M14.5 9.5 17 7l-5-5v4.5" />
    </Svg>
  );
};
Icon.displayName = 'BluetoothOff';
export const BluetoothOff = React.memo(Icon);
