import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import { Image, Linking, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SafeAreaView from "../../../../res/components/SafeAreaView";

const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    imageWrapper: {
      width: '100%',
      maxHeight: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      margin: 'auto',
    },
    image: {
      resizeMode: 'contain',
      width: '100%',
      maxWidth: 280
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      padding: 16,
    },
    privacyText: {
      fontSize: 14,
      fontWeight: 'medium',
      color: '#212121',
      padding: 8
    },
    welcomeFooter: {
      paddingHorizontal: 16,
      paddingVertical: 24,
      gap: 16,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
  })

  return (
    <SafeAreaView>
      <View style={styles.imageWrapper}>
        <Image source={require('../../../../assets/static/images/png/welcome-Illustration.png')} style={styles.image} />
        <Text style={styles.welcomeText}>
          Connect easily with
          <Text>{"\n"}students and instructors over the cities</Text>
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center', paddingHorizontal: 8 }}>
          Free learning. Safe & Secure. Creative.
        </Text>
      </View>
      <View style={styles.welcomeFooter}>
        <Text style={styles.privacyText}>Terms & Privacy Policy</Text>
        <View style={{ gap: 8, width: '100%' }}>
          <Button onPress={() => navigation.navigate('Login')} radius={16} fullWidth>
            Start Messaging
          </Button>
          <Button
            labelStyles={{
              color: '#0D47A1',
              fontWeight: '600',
              alignSelf: 'center',
              textAlign: 'center',
            }}
            style={{
              backgroundColor: 'transparent',
              padding: 16,
              borderWidth: 1,
              borderRadius: 16,
              borderColor: '#0D47A14f',
            }}
            radius={16}
            onPress={() => navigation.navigate('Register')}
            fullWidth
          >
            Join the community
          </Button>
        </View>
      </View>
      <Text style={{ textAlign: 'center', padding: 16, paddingTop: insets.bottom }}>Powered by <Text onPress={() => Linking.openURL('https://www.unicodejo.com/')} style={{ fontWeight: 'bold', color: '#0D47A1' }}>Unicode</Text></Text>
    </SafeAreaView>
  )
}

export default WelcomeScreen
