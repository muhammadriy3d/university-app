import NoTasksIcon from "../../../../..//res/components/Icons/NoTasksIcon"
import { View, Text } from "react-native"

const ClassworkFragment = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, maxHeight: '86%', justifyContent: 'center', alignItems: 'center', gap: 4, paddingHorizontal: 16, paddingBottom: 16 }}>
        <NoTasksIcon width={200} height={200} style={{ marginBottom: 16 }} />
        <Text style={{ textAlign: 'center', fontSize: 18, color: '#212121', fontWeight: "bold" }}>Yay! You have no classwork</Text>
        <Text style={{ textAlign: 'center', fontSize: 16, color: '#9e9e9e', fontWeight: '400' }}>Your classwork will show up here, come back later</Text>
      </View>
    </View>
  )
}

export default ClassworkFragment
