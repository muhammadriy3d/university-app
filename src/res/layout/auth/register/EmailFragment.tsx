import { TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"

const EmailFragment = (props: any) => {
  const { value, onChange } = props

  return (
    <>
      <TextInput
        value={value.email}
        onChange={(e) => onChange('email', e.nativeEvent.text)}
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
        placeholder="Email address"
        inputMode="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
      />
    </>
  )
}

export default EmailFragment
