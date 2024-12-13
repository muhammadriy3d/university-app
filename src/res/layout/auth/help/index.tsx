import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import Button from '../../../../res/components/Button'
import SafeAreaView from '../../../../res/components/SafeAreaView'
import React from 'react'

const GetHelpScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16, gap: 8 }}>
          <View style={{ paddingVertical: 16 }}>
            <Text style={{
              fontSize: 24,
              fontWeight: '600',
              paddingHorizontal: 8
            }}>
              Password Reset
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '400', padding: 8 }}>
              Please enter your email address to receive a link to reset your password!
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
            placeholder="Email address"
          />
          <View style={{ height: 16 }} />
          <Button onPress={() => navigation.navigate('App')} fullWidth>Reset Password</Button>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default GetHelpScreen
