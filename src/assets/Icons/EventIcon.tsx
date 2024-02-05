import * as React from "react"
import Svg, { Rect } from "react-native-svg"

interface Props {
  color: string
}

export const EventIcon: React.FC<Props> = ({
  color
}) => {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
    >
      <Rect
        x={3}
        y={3}
        width={9}
        height={9}
        rx={1}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Rect
        x={3}
        y={17}
        width={9}
        height={9}
        rx={1}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Rect
        x={17}
        y={3}
        width={9}
        height={9}
        rx={1}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Rect
        x={17}
        y={17}
        width={9}
        height={9}
        rx={1}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}
