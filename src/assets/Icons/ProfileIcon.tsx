import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

interface Props {
  color: string
}

export const ProfileIcon: React.FC<Props> = ({
  color
}) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M26.303 27.263c-.608-1.701-1.947-3.204-3.81-4.277-1.862-1.072-4.145-1.653-6.493-1.653-2.348 0-4.63.582-6.493 1.654-1.863 1.072-3.202 2.575-3.81 4.276"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle
        cx={16}
        cy={10.6667}
        r={5.33333}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}
