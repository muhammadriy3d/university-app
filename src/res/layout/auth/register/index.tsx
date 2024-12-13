import SafeAreaView from "../../../../res/components/SafeAreaView"
import { ActivityIndicator, Alert, BackHandler, Image, ScrollView, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Button from "../../../components/Button"
import UsernameFragment from "./UsernameFragment"
import { useCallback, useEffect, useState } from "react"
import EmailFragment from "./EmailFragment"
import PasswordFragment from "./PasswordFragment"
import BasicInformation from "./BasicInformation"

const RegisterScreen = () => {
  const navigation = useNavigation()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    brithdayMonth: '',
    brithdayDay: 0,
    brithdayYear: 0,
    gender: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const handleUserInputChange = (name: string, value: string) => {
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    setIsLoading(true)
    if (step === stepsComponents.length) {
      Alert.alert('Success', 'Account created successfully', [
        {
          text: 'Continue',
          onPress: () => navigation.navigate('App')
        }
      ])
      navigation.reset({ routes: [{ name: 'App' }] })
      setIsLoading(false)
      return
    }
    setTimeout(() => {
      setStep(prev => prev + 1)
      setIsLoading(false)
    }, 400)
  }

  const handleShowPasswordToggle = () => {
    setIsShowPassword(prev => !prev)
  }

  const handleBack = useCallback(() => {
    if (step < 1) {
      navigation.goBack()
      return
    }
    setStep(prev => prev - 1)
  }, [])

  useEffect(() => {
    const backAction = () => {
      if (step <= 1) {
        navigation.goBack()
        return true;
      }
      handleBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [step, handleBack]);

  const stepsComponents: { id: number, title?: string, subtitle?: string, component: JSX.Element }[] = [
    {
      id: 1,
      title: 'Create a new' + '\n' + 'account',
      subtitle: 'Enter your name',
      component: <UsernameFragment value={user} onChange={handleUserInputChange} />
    },
    {
      id: 2,
      title: "Basic information",
      subtitle: 'Enter your birthday and gender',
      component: <BasicInformation value={user} onChange={handleUserInputChange} />
    },
    {
      id: 3,
      title: "How you'll sign in",
      subtitle: 'Enter your email address to be able to access your account',
      component: <EmailFragment value={user} onChange={handleUserInputChange} />
    },
    {
      id: 4,
      title: 'Create a strong password',
      subtitle: 'Create a strong password with a mix of letters, numbers and symbols',
      component: <PasswordFragment value={user} onChange={handleUserInputChange} showPassword={isShowPassword} handleShowPassword={handleShowPasswordToggle} />
    }
  ]

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator animating size="large" color="#0D47A1" />
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16, gap: 8 }}>
          <View style={{ paddingVertical: 16 }}>
            <Text style={{
              fontSize: 24,
              fontWeight: '600',
              padding: 4,
              textTransform: 'capitalize'
            }}>
              {stepsComponents[step - 1]?.title}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '400', padding: 4 }}>
              {stepsComponents[step - 1]?.subtitle}
            </Text>
          </View>

          {stepsComponents[step - 1]?.component}

          <View style={{ height: 8 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, justifyContent: 'flex-end', alignSelf: 'flex-end', maxWidth: step === 1 ? '100%' : '35%' }}>
            <Button
              onPress={handleNext}
              fullWidth
            >
              Next
            </Button>
          </View>

          {step === 1 && (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, padding: 8, flex: 1 }}>
                <View style={{ backgroundColor: '#DBDBDB', width: '45%', height: 1 }} />
                <Text style={{ fontSize: 14, fontWeight: '400', color: '#9E9E9E' }}>or</Text>
                <View style={{ backgroundColor: '#DBDBDB', width: '45%', height: 1 }} />
              </View>

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
            </>
          )}
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default RegisterScreen
