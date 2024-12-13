import navigation from '../../../navigation'
import { ChevronLeft } from 'lucide-react-native'
import React from 'react'
import { View, Text } from 'react-native'
import IconButton from '../IconButton'

const SimpleHeader = ({ navigation, options }: { navigation: any, [key: string]: any }) => {
  return (
    <View style={options.headerStyle}>
      <IconButton onPress={() => navigation.goBack()}>
        <ChevronLeft size={24} color={'#212121'} />
      </IconButton>
      <Text style={{ fontSize: 20, paddingHorizontal: 8, paddingVertical: 2, fontWeight: '600' }}>{options.headerTitle}</Text>
    </View>
  )
}

export default SimpleHeader
