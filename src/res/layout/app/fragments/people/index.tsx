import { FlashList } from "@shopify/flash-list"
import IconButton from "../../../../../res/components/IconButton"
import { UserPlus2Icon } from "lucide-react-native"
import { View, Text, Pressable } from "react-native"
import Avatar from "../../../../../res/components/Avatar"
import NeverMind from "../../../../../res/components/Icons/NeverMind"
import Button from "../../../../../res/components/Button"

const PeopleFragment = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ minHeight: 120 }}>
        <View style={{ paddingBottom: 8, gap: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#0D47A1' }}>
          <Text style={{ fontSize: 18, color: '#0D47A1', fontWeight: "bold" }}>Instructors</Text>
          <IconButton>
            <UserPlus2Icon size={24} color={'#0D47A1'} />
          </IconButton>
        </View>
        <FlashList
          data={[
            { id: 1, name: 'Muhammad Riyad' },
          ]}
          renderItem={({ item }) => (
            <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 8 }}>
              <Avatar />
              <View>
                <Text style={{ fontSize: 16, color: '#212121', fontWeight: "bold" }}>{item.name}</Text>
              </View>
            </Pressable>
          )}
          estimatedItemSize={50}
        />
      </View>

      <View style={{ minHeight: 120 }}>
        <View style={{ paddingBottom: 8, gap: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#0D47A1' }}>
          <Text style={{ fontSize: 18, color: '#0D47A1', fontWeight: "bold" }}>Students</Text>
          <IconButton>
            <UserPlus2Icon size={24} color={'#0D47A1'} />
          </IconButton>
        </View>

        <View style={{ alignItems: 'center' }}>
          <NeverMind height={220} width={300} />
          <View style={{ justifyContent: 'center', alignItems: 'center', gap: 4, paddingHorizontal: 16, paddingVertical: 16 }}>
            <Text style={{ textAlign: 'center', fontSize: 18, color: '#212121', fontWeight: "bold" }}>No students in this class</Text>
            <Text style={{ textAlign: 'center', fontSize: 16, color: '#9e9e9e', fontWeight: '400' }}>Invite students to join your class</Text>
          </View>

          <Button>Invite</Button>
        </View>

      </View>
    </View>
  )
}

export default PeopleFragment
