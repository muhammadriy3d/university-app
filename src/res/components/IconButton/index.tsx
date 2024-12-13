import React from 'react'
import { Pressable, PressableProps } from 'react-native'

type ButtonProps = PressableProps & {
  children: React.ReactNode
}

const IconButton = (props: ButtonProps) => {
  const { children } = props

  return (
    <Pressable {...props} style={props.style ?? { padding: 4 }} hitSlop={{ top: 4, bottom: 4, left: 4, right: 4 }} android_ripple={{ color: '#9e9e9e3f', borderless: true, foreground: true }}>
      {children}
    </Pressable>
  )
}

export default IconButton
