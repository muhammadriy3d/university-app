import navigation from '@/navigation'
import { DrawerActions } from '@react-navigation/native'
import React from 'react'
import { Pressable, Image } from 'react-native'

const Avatar = ({ navigation }: any) => {
  return (
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
  )
}

export default Avatar
