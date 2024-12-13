import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { Image, Linking, ScrollView, Text, View } from "react-native"
import SafeAreaView from "../SafeAreaView"
import { CogIcon, LifeBuoyIcon, LogOutIcon, PowerIcon, School2Icon, SettingsIcon, User2Icon } from "lucide-react-native"
import DrawerItemList from "./DrawerItemList"
import { useNavigation } from "@react-navigation/native"

const Drawer = (props: any) => {
  const { drawerItemStyle, ...restProps } = props
  const items = [
    {
      label: "Profile",
      icon: User2Icon,
      onPress: () => props.navigation.navigate('Profile')
    },
    {
      label: "University",
      icon: School2Icon,
      onPress: () => Linking.openSettings()
    },
  ]
  const footerItems = [
    {
      label: "Settings",
      icon: SettingsIcon,
      onPress: () => props.navigation.navigate('Settings')
    },
    {
      label: "Help & Support",
      icon: LifeBuoyIcon,
      onPress: () => Linking.openSettings()
    },
    {
      label: "Logout",
      icon: PowerIcon,
      onPress: () => Linking.openSettings()
    },
  ]
  return (
    <SafeAreaView {...restProps}>
      <ScrollView>
        <View style={{ gap: 8, padding: 16, borderBottomWidth: 1, borderColor: '#F7F7FC', backgroundColor: '#F7F7FC' }}>
          <Image
            style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 32, backgroundColor: '#212121' }}
            source={{
              uri: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            }}
          />
          <View style={{ padding: 4, gap: 4 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Muhammad Riyad</Text>
            <Text style={{ fontSize: 14, color: '#9e9e9e' }}>Student</Text>
            <Text style={{ fontSize: 12, color: '#9e9e9e' }}>BAU Amman College</Text>
          </View>
        </View>
        <View style={{ paddingVertical: 8 }}>
          <DrawerItemList drawerItemStyle={drawerItemStyle} items={items} />
        </View>
      </ScrollView>
      <View style={{ paddingVertical: 8, borderTopWidth: 1, borderColor: '#F7F7FC' }}>
        <DrawerItemList items={footerItems} />
      </View>
    </SafeAreaView>
  )
}

export default Drawer
