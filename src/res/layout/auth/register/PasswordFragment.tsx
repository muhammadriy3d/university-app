import SafeAreaView from "../../../../res/components/SafeAreaView"
import { Image, ScrollView, Text, TextInput, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Button from "../../../components/Button"
import { EyeClosedIcon, EyeIcon } from "lucide-react-native"
import IconButton from "../../../../res/components/IconButton"

const PasswordFragment = (props: any) => {
  const { navigation, value, onChange, showPassword, handleShowPassword } = props

  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <TextInput
          value={value.password}
          onChangeText={(text) => onChange('password', text)}
          style={{
            backgroundColor: '#F7F7FC',
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 16,
            fontSize: 16,
            fontWeight: '400',
            color: '#212121',
            width: '100%'
          }}
          placeholderTextColor={'#ADB5BD'}
          placeholder="New Password"
          inputMode="text"
          secureTextEntry={!showPassword}
          textContentType="password"
        />
        <IconButton onPress={handleShowPassword} style={{ position: 'absolute', right: 16, top: 0, bottom: 0, justifyContent: 'center' }}>
          {showPassword ? <EyeIcon size={24} color={'gray'} /> : <EyeClosedIcon size={24} color={'gray'} />}
        </IconButton>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <TextInput
          value={value.passwordConfirm}
          onChangeText={(text) => onChange('passwordConfirm', text)}
          style={{
            backgroundColor: '#F7F7FC',
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 16,
            fontSize: 16,
            fontWeight: '400',
            color: '#212121',
            width: '100%'
          }}
          placeholderTextColor={'#ADB5BD'}
          placeholder="Confirm New Password"
          inputMode="text"
          secureTextEntry={!showPassword}
          textContentType="password"
        />
        <IconButton onPress={handleShowPassword} style={{ position: 'absolute', right: 16, top: 0, bottom: 0, justifyContent: 'center' }}>
          {showPassword ? <EyeIcon size={24} color={'gray'} /> : <EyeClosedIcon size={24} color={'gray'} />}
        </IconButton>
      </View>
      <Text style={{ padding: 8, fontSize: 12, fontWeight: '500', textAlign: 'center', color: '#9E9E9E' }}>
        By Signing Up, you agree to the <Text onPress={() => { }} style={{ color: '#0D47A1' }} role="button">User Agreement</Text>, <Text onPress={() => { }} style={{ color: '#0D47A1' }} role="button">Privacy Policy</Text>, and <Text onPress={() => { }} style={{ color: '#0D47A1' }} role="button">Cookie Policy</Text>.
      </Text>
    </>
  )
}

export default PasswordFragment
