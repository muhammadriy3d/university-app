import SafeAreaView from "../../../../res/components/SafeAreaView"
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { ChevronLeft } from "lucide-react-native"
import IconButton from "../../../../res/components/IconButton"
import { useNavigation } from "@react-navigation/native"
import Button from "../../../components/Button"

const LoginScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16, gap: 8 }}>
          <View style={{ paddingVertical: 16 }}>
            <Text style={{
              fontSize: 24,
              fontWeight: '600',
              textAlign: 'center',
            }}>
              Make the most of your education{'\n'}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', padding: 8 }}>
              Everyone deserves a better education. Take your education to the next level!
            </Text>
          </View>

          <TextInput
            style={{
              backgroundColor: '#F7F7FC',
              borderRadius: 10,
              paddingHorizontal: 16,
              paddingVertical: 16,
              fontSize: 16,
              fontWeight: '400',
              color: '#212121'
            }}
            placeholderTextColor={'#ADB5BD'}
            placeholder="Username"
          />
          <TextInput
            style={{
              backgroundColor: '#F7F7FC',
              borderRadius: 10,
              paddingHorizontal: 16,
              paddingVertical: 16,
              fontSize: 16,
              fontWeight: '400',
              color: '#212121'
            }}
            placeholderTextColor={'#ADB5BD'}
            placeholder="Password"
          />
          <Text style={{ padding: 8, fontSize: 14 }}>Forgot log in details?<Text role="button" onPress={() => navigation.navigate('GetHelp')} style={{ color: '#0D47A1' }}>{' '}Get help</Text></Text>
          <Button onPress={() => navigation.navigate('App')} fullWidth>Log In</Button>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, padding: 8, flex: 1 }}>
            <View style={{ backgroundColor: '#DBDBDB', width: '45%', height: 1 }} />
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#9E9E9E' }}>or</Text>
            <View style={{ backgroundColor: '#DBDBDB', width: '45%', height: 1 }} />
          </View>
          {/* google sign up or facebook */}
          <View style={{ justifyContent: 'center', alignItems: 'center', gap: 8 }}>
            <Button
              startIcon={<Image style={{ width: 28, height: 28 }} source={require('../../../../assets/static/images/png/social-media/google-logo.png')} alt="google" />}
              style={{ padding: 8, borderWidth: 1, borderColor: '#DBDBDB', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
              labelStyles={{ color: '#212121' }}
              fullWidth
            >
              Continue with Google
            </Button>
            <Button
              startIcon={<Image style={{ width: 28, height: 28 }} source={require('../../../../assets/static/images/png/social-media/linkedin-logo.png')} alt="google" />}
              style={{ padding: 8, borderWidth: 1, borderColor: '#DBDBDB', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
              labelStyles={{ color: '#212121' }}
              fullWidth
            >
              Continue with Linked In
            </Button>
          </View>
          <Text style={{ padding: 8, textAlign: 'center', fontSize: 14, }}>
            Not a member?
            <Text onPress={() => navigation.navigate('Register')} role="button" style={{ color: '#0D47A1' }}>{' '}Join the community</Text>
          </Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default LoginScreen
