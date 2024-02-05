import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../theme";

interface Props {
    color?: string;
}

export const BackLeftIcon: React.FC<Props> = ({
    color = Colors.black
}) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path d="M20 8l-8 8 8 8" stroke={color} strokeWidth={2} />
    </Svg>
  )
}
