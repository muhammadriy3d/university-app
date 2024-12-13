import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface SafeAreaViewProps {
  children: React.ReactNode
}

const SafeAreaView = (props: SafeAreaViewProps) => {
  const { children } = props
  const insets = useSafeAreaInsets()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: '#fff',
    },
  })

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default SafeAreaView
