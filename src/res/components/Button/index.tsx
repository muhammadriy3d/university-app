import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native"

type ButtonProps = PressableProps & {
  children: React.ReactNode
  radius?: number
  labelStyles?: any
  startIcon?: React.ReactNode
  fullWidth?: boolean
}

const Button = (props: ButtonProps): React.JSX.Element => {
  const { children, radius = 24, startIcon, fullWidth = false } = props

  const styles = StyleSheet.create({
    buttonContainer: {
      width: fullWidth ? "100%" : "auto",
      overflow: 'hidden',
      borderRadius: radius,
    },
    button: {
      backgroundColor: '#0D47A1',
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: radius,
      maxHeight: 52,
      width: fullWidth ? "100%" : "auto",
    },
    label: {
      width: '100%',
      alignSelf: 'center',
      textAlign: 'center',
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold'
    }
  })

  if (startIcon) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable {...props} style={props.style ?? styles.button} android_disableSound android_ripple={{ color: '#2121216f', borderless: true }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            {startIcon}
            <Text style={props.labelStyles ?? styles.label}>{children}</Text>
          </View>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable {...props} style={props.style ?? styles.button} android_disableSound android_ripple={{ color: '#2121216f', borderless: true }}>
        <Text style={props.labelStyles ?? styles.label}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default Button
