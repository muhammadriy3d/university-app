import { Image, Pressable, StyleProp, Text, View, ViewStyle } from "react-native"
import IconButton from "../IconButton"
import { BellIcon, EllipsisVertical } from "lucide-react-native"
import { DrawerActions } from "@react-navigation/native"

const AppHeader = ({ route, navigation, options }: any) => {
  return (
    <View style={options.headerStyle as StyleProp<ViewStyle>}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ width: 44, height: 44, backgroundColor: '#f7f7fc', borderColor: '#E0E0E08f', borderWidth: 2, borderRadius: 50, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
          {/* <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#fff', alignSelf: 'center', justifyContent: 'center' }}>M</Text> */}
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            }}
            width={40}
            height={40}
            style={{ borderRadius: 50 }}
          />
        </Pressable>
        <Text style={{ fontSize: 20, paddingHorizontal: 8, fontWeight: '600' }}>{route.name}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <IconButton>
          <BellIcon size={22} color={'#212121'} />
        </IconButton>
        <IconButton>
          <EllipsisVertical size={22} color={'#212121'} />
        </IconButton>
      </View>
    </View>
  )
}

export default AppHeader