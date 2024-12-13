import navigation from '../../../navigation'
import { ArrowLeftIcon, ChevronLeft } from 'lucide-react-native'
import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import IconButton from '../IconButton'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { NativeStackHeaderLeftProps } from '@react-navigation/native-stack'
import getInitials from '../../../utils/string'
import { generateRandomColor } from '../../../utils/colors'

const ChatRoomHeader = ({ navigation, options, route }: { navigation: any, [key: string]: any }) => {
  return (
    <View style={options.headerStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <IconButton onPress={() => navigation.canGoBack ? navigation.goBack() : null}>
          <ArrowLeftIcon size={24} color={'#212121'} />
        </IconButton>
        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ width: 44, height: 44, backgroundColor: generateRandomColor(), borderRadius: 12, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#fff', alignSelf: 'center', justifyContent: 'center' }}>{getInitials(route.params.classRoomName)}</Text>
          {/* <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            }}
            width={40}
            height={40}
            style={{ borderRadius: 12 }}
          /> */}
        </Pressable>
        <View>
          <Text style={{ fontSize: 14, fontWeight: '500', maxWidth: 150 }} lineBreakMode='tail' numberOfLines={1} lineBreakStrategyIOS='hangul-word' ellipsizeMode='tail'>{route.params.classRoomName}</Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: '#9e9e9e' }}>2 members</Text>
        </View>
      </View>
    </View >
  )
}

export default ChatRoomHeader
