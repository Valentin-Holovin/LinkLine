import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

interface Props {
  color: string
}

export const MessageIcon: React.FC<Props> = ({
  color
}) => {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
    >
      <Rect
        x={7.33334}
        y={11}
        width={29.3333}
        height={22}
        rx={2}
        stroke={color}
        strokeWidth={2}
      />
      <Path
        d="M7.333 16.5l13.773 6.886a2 2 0 001.788 0L36.667 16.5"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  )
}
