import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

export function EyeIcon() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Circle cx={12} cy={12} r={3} stroke="#33363F" strokeWidth={2} />
      <Path
        d="M20.188 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934z"
        stroke="#33363F"
        strokeWidth={2}
      />
    </Svg>
  )
}
