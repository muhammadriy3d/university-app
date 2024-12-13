import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function NoMessages(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={560}
      height={560}
      viewBox="0 0 560 560"
      fill="none"
      {...props}
    >
      <Circle cx={288.5} cy={297.5} r={175.5} fill="#F1F3FF" />
      <Circle cx={124} cy={179} r={11} fill="#F1F3FF" />
      <Circle cx={203.5} cy={108.5} r={20.5} fill="#F1F3FF" />
      <Circle cx={127.5} cy={410.5} r={19.5} fill="#F1F3FF" />
      <Circle cx={476.5} cy={391.5} r={19.5} fill="#F1F3FF" />
      <Circle cx={438.5} cy={413.5} r={9.5} fill="#F1F3FF" />
      <Path
        d="M284.525 143.537c-.579-.123-.579-.951 0-1.074l8.766-1.864a.549.549 0 00.422-.421l1.888-8.704c.125-.577.948-.577 1.073 0l1.887 8.704a.55.55 0 00.423.421l8.765 1.864c.58.123.58.951 0 1.074l-8.765 1.864a.55.55 0 00-.423.421l-1.887 8.704c-.125.577-.948.577-1.073 0l-1.888-8.704a.549.549 0 00-.422-.421l-8.766-1.864zM82.223 229.622c.224-1.057 1.733-1.057 1.957 0l3.342 15.793c.082.384.381.686.766.77l15.629 3.404c1.05.229 1.05 1.726 0 1.955l-15.63 3.404a1.001 1.001 0 00-.765.77l-3.342 15.793c-.224 1.057-1.733 1.057-1.957 0l-3.343-15.793a1.002 1.002 0 00-.765-.77l-15.63-3.404c-1.05-.229-1.05-1.726 0-1.955l15.63-3.404c.384-.084.684-.386.765-.77l3.343-15.793zM445.345 279.622c.223-1.057 1.733-1.057 1.956 0l1.95 9.213c.082.385.382.686.766.77l9.144 1.992c1.049.229 1.049 1.726 0 1.954l-9.144 1.992a1.002 1.002 0 00-.766.77l-1.95 9.213c-.223 1.057-1.733 1.057-1.956 0l-1.95-9.213a1 1 0 00-.766-.77l-9.144-1.992c-1.049-.228-1.049-1.725 0-1.954l9.144-1.992a1 1 0 00.766-.77l1.95-9.213z"
        fill="#C4CBF5"
      />
      <Path
        d="M485.658 331.331l3.063 14.467 14.26 3.107-14.26 3.106-3.063 14.468-3.062-14.468-14.261-3.106 14.261-3.107 3.062-14.467z"
        fill="#fff"
      />
      <Path d="M421.5 155L212 376l24 94.5 16.5-79.5 169-236z" fill="#DDE2FF" />
      <Path
        d="M211 375l24.5 97.5 15.5-81M235 470.5l63-59.5"
        stroke="#C4CBF5"
        strokeWidth={4}
      />
      <Path
        d="M421.5 155L252 390.5 385 450l36.5-295z"
        fill="url(#paint0_linear_116_2239)"
        stroke="#C4CBF5"
        strokeWidth={4}
      />
      <Path
        d="M421.5 153L108 331l103 44 210.5-222z"
        fill="url(#paint1_linear_116_2239)"
        stroke="#C4CBF5"
        strokeWidth={4}
      />
      <Path d="M301 413.019L252.707 392 235 473l66-59.981z" fill="#C4CBF5" />
      <Defs>
        <LinearGradient
          id="paint0_linear_116_2239"
          x1={336.75}
          y1={155}
          x2={336.75}
          y2={450}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDE2FF" />
          <Stop offset={1} stopColor="#FCFCFF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_116_2239"
          x1={264.75}
          y1={153}
          x2={264.75}
          y2={375}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DDE2FF" />
          <Stop offset={1} stopColor="#FCFCFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default NoMessages
