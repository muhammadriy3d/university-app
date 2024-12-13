import { DrawerItem } from '@react-navigation/drawer'
import { SettingsIcon } from 'lucide-react-native'
import React, { createElement } from 'react'

const DrawerItemList = (props: any) => {
  const { items, ...restProps } = props

  return (
    items.map((item: any, index: number) => (
      <DrawerItem
        {...restProps}
        key={`${item.label}-${index}`}
        style={{
          borderRadius: 0,
        }}
        icon={(props) => createElement(item.icon, {
          size: 20,
          focused: props.focused,
          color: props.color,
        })}
        label={item.label}
        onPress={item?.onPress}
      />
    ))
  )
}

export default DrawerItemList