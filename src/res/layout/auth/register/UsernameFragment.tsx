import { Image, Text, TextInput, View } from "react-native"
import Button from "../../../components/Button"

const UsernameFragment = (props: any) => {
  const { value, onChange } = props

  return (
    <>
      <TextInput
        value={value.firstName}
        onChange={(e) => onChange('firstName', e.nativeEvent.text)}
        style={{
          backgroundColor: '#F7F7FC',
          borderRadius: 10,
          paddingHorizontal: 16,
          paddingVertical: 16,
          fontSize: 16,
          fontWeight: '400',
          color: '#212121'
        }}
        placeholderTextColor={'#9e9e9e'}
        placeholder="First name"
      />
      <TextInput
        value={value.lastName}
        onChange={(e) => onChange('lastName', e.nativeEvent.text)}
        style={{
          backgroundColor: '#F7F7FC',
          borderRadius: 10,
          paddingHorizontal: 16,
          paddingVertical: 16,
          fontSize: 16,
          fontWeight: '400',
          color: '#212121'
        }}
        placeholderTextColor={'#9e9e9e'}
        placeholder="Last name (optional)"
      />
    </>
  )
}

export default UsernameFragment
