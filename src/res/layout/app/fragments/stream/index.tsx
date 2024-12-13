import { Fab, FabIcon, FabLabel } from "@/components/ui/fab"
import NoMessages from "../../../../../res/components/Icons/NoMessages"
import { View, Text, TextInput, ScrollView } from "react-native"
import { ALargeSmallIcon, AtSignIcon, ChevronDown, PlusIcon, SendHorizonalIcon, SmileIcon, SquarePenIcon } from "lucide-react-native"
import IconButton from "../../../../../res/components/IconButton"
import { useEffect, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import EmojiPicker, { type EmojiType } from 'rn-emoji-keyboard'
import NoMessages2 from "../../../../../res/components/Icons/NoMessages2"

const StreamFragment = () => {
  const { params }: { [key: string]: any } = useRoute()
  const [isEmojiOpen, setIsEmojiOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<{ userId: number, text: string, date: number }>({
    userId: 0,
    text: '',
    date: +new Date(),
  })

  const handlePick = (emojiObject: EmojiType) => {
    /* example emojiObject = {
        "emoji": "❤️",
        "name": "red heart",
        "slug": "red_heart",
        "unicode_version": "0.6",
      }
    */
    setMessage(prev => ({ ...prev, text: prev.text.concat(emojiObject.emoji) }))
    console.log(message)
  }

  const handleOnMessageChange = (text: string) => {
    setMessage(prev => ({ ...prev, text }))
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 4, paddingHorizontal: 16, paddingBottom: 16 }}>
          <NoMessages2 width={200} height={200} style={{ marginBottom: 16 }} />
          <Text style={{ textAlign: 'center', fontSize: 18, color: '#212121', fontWeight: 'bold' }}>No messages yet...</Text>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#9e9e9e', fontWeight: '400' }}>Send a message to start a conversation</Text>
        </View>
      </ScrollView>
      <View style={{ justifyContent: 'center', padding: 8, borderTopWidth: 1, borderTopColor: '#e0e0e0', backgroundColor: '#f7f7fc' }}>
        <TextInput
          style={{
            width: '100%',
            paddingHorizontal: 16,
            paddingVertical: 12,
          }}
          multiline
          onChange={(e) => handleOnMessageChange(e.nativeEvent.text)}
          value={message?.text}
          placeholder={`Message ${params.classRoomName}`}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <IconButton>
              <PlusIcon size={24} color={'#414141'} />
            </IconButton>
            <IconButton onPress={() => setIsEmojiOpen(true)}>
              <SmileIcon size={24} color={'#414141'} />
            </IconButton>
            <IconButton>
              <AtSignIcon size={24} color={'#414141'} />
            </IconButton>
          </View>
          <View>
            <IconButton style={{ backgroundColor: '#f7f7fc' }} disabled={message?.text.length <= 0}>
              <SendHorizonalIcon size={24} color={'#9e9e9e'} />
            </IconButton>
          </View>
        </View>
      </View>
      <EmojiPicker
        categoryPosition="top"
        enableSearchBar
        onEmojiSelected={handlePick}
        open={isEmojiOpen}
        onClose={() => setIsEmojiOpen(false)}
      />
    </View>
  )
}

export default StreamFragment
