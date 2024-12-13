import React, { useState } from 'react'
import { TextInput } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select"
import { ChevronDownIcon } from 'lucide-react-native';
import { View } from 'react-native';

const BasicInformation = (props: any) => {
  const { value, onChange } = props
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <>
      <View style={{ gap: 4, flexDirection: 'row', alignItems: 'center' }}>
        <Select style={{ flex: 1, minWidth: 30 }}>
          <SelectTrigger variant="underlined" size="lg" className="border-b-0" android_ripple={{ color: '#9e9e9e3f', borderless: true, foreground: true }} style={{ backgroundColor: '#F7F7FC', borderRadius: 10, height: 52, paddingHorizontal: 16, justifyContent: 'space-between' }}>
            <SelectInput className='mt-3 pt-0' placeholder="Month" placeholderTextColor={'#9e9e9e'} />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {months.map((month, index) => (
                <SelectItem
                  key={month}
                  label={month}
                  value={month.toLowerCase()}
                />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>
        <TextInput
          value={value.day}
          onChangeText={(text) => onChange('day', text)}
          placeholder="Day"
          placeholderTextColor={'#9e9e9e'}
          style={{ flex: 1, backgroundColor: '#F7F7FC', borderRadius: 10, height: 52, paddingHorizontal: 16, fontSize: 16, fontWeight: "500" }}
          keyboardType='numeric'
          textContentType='birthdateDay'
        />
        <TextInput
          value={value.year}
          onChangeText={(text) => onChange('year', text)}
          placeholder="Year"
          placeholderTextColor={'#9e9e9e'}
          style={{ flex: 1, backgroundColor: '#F7F7FC', borderRadius: 10, height: 52, paddingHorizontal: 16, fontSize: 16, fontWeight: "500" }}
          keyboardType='numeric'
          textContentType='birthdateYear'
        />
      </View>

      <Select>
        <SelectTrigger variant="underlined" size="lg" className="border-b-0" android_ripple={{ color: '#9e9e9e3f', borderless: true, foreground: true }} style={{ backgroundColor: '#F7F7FC', borderRadius: 10, height: 52, paddingHorizontal: 16, justifyContent: 'space-between' }}>
          <SelectInput className='mt-3 pt-0' placeholder="Gender" placeholderTextColor={'#9e9e9e'} />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem
              label="Male"
              value="male"
            />
            <SelectItem
              label="Female"
              value="female"
            />
          </SelectContent>
        </SelectPortal>
      </Select>


    </>
  )
}

export default BasicInformation
