import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function PlusIcon() {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
    >
      <Path
        d="M17 8.5v17M25.5 17h-17"
        stroke="#000"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}
