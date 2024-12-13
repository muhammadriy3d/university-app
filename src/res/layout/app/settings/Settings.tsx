import { BellIcon, ChevronRight, FolderIcon, HelpCircleIcon, MailIcon, MessageCircleIcon, ShieldAlertIcon, SunIcon, User2Icon } from 'lucide-react-native'
import Avatar from '../../../../res/components/Avatar'
import SafeAreaView from '../../../../res/components/SafeAreaView'
import { Pressable, Text, View } from 'react-native'
import IconButton from '@/res/components/IconButton'
import { useNavigation } from '@react-navigation/native'

const SettingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, gap: 8, backgroundColor: '#fff' }}>
      <Pressable android_ripple={{ color: "#0000000f" }} onPress={() => navigation.navigate('Profile')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <Avatar />
          <View>
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Muhammad Riyad</Text>
            <Text style={{ fontWeight: 'bold', color: '#9e9e9e', fontSize: 12 }}>muhammadriy3d@gmail.com</Text>
          </View>
        </View>
        <ChevronRight size={22} color={'#212121'} />
      </Pressable>
      <View style={{ height: 1, backgroundColor: '#E0E0E0', marginHorizontal: 16 }} />
      <View>
        <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <User2Icon size={22} color={'#212121'} />
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Account</Text>
          </View>
          <ChevronRight size={22} color={'#212121'} />
        </Pressable>
        <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <MessageCircleIcon size={22} color={'#212121'} />
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Chats</Text>
          </View>
          <ChevronRight size={22} color={'#212121'} />
        </Pressable>
      </View>
      <View>
        <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <SunIcon size={22} color={'#212121'} />
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Appearance</Text>
          </View>
          <ChevronRight size={22} color={'#212121'} />
        </Pressable>
        <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <BellIcon size={22} color={'#212121'} />
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Notifications</Text>
          </View>
          <ChevronRight size={22} color={'#212121'} />
        </Pressable>
        <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <ShieldAlertIcon size={22} color={'#212121'} />
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Account</Text>
          </View>
          <ChevronRight size={22} color={'#212121'} />
        </Pressable>
        <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <FolderIcon size={22} color={'#212121'} />
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Data Usage</Text>
          </View>
          <ChevronRight size={22} color={'#212121'} />
        </Pressable>
      </View>

      <View>
        <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <HelpCircleIcon size={22} color={'#212121'} />
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Help</Text>
          </View>
          <ChevronRight size={22} color={'#212121'} />
        </Pressable>
        <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 16, justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <MailIcon size={22} color={'#212121'} />
            <Text style={{ fontWeight: 'bold', color: '#212121', fontSize: 16 }}>Invite a Friend</Text>
          </View>
          <ChevronRight size={22} color={'#212121'} />
        </Pressable>
      </View>

      <Text style={{ fontWeight: 'medium', color: '#212121', fontSize: 12, textAlign: 'center', padding: 8 }}>Version 0.01</Text>
    </View>
  )
}

export default SettingScreen
