import { FlatList, Pressable, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import SafeAreaView from "../../../components/SafeAreaView"
import { EllipsisVerticalIcon, ChevronLeft, ChevronDownIcon } from "lucide-react-native"
import IconButton from "../../../../res/components/IconButton"
import Accordion from "../../../components/Collapse"

const GroupScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const { groupId } = route.params;

  return (
    <SafeAreaView>
      <View style={{ paddingVertical: 16, paddingHorizontal: 8, marginRight: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <IconButton onPress={() => navigation.goBack()}>
            <ChevronLeft size={22} color={'#212121'} />
          </IconButton>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>University X {groupId}</Text>
        </View>
        <IconButton>
          <EllipsisVerticalIcon size={22} color={'#212121'} />
        </IconButton>
      </View>
      <Accordion label="Major" currentItemId={1}>
        {({ open }: any) => {
          return open === 1 && (
            <FlatList
              data={[
                { id: 1, name: 'E-Marketing' },
                { id: 2, name: 'MIS' },
                { id: 3, name: 'AIS' },
                { id: 4, name: 'CS' },
              ]}
              renderItem={({ item }) => (
                <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 10, paddingHorizontal: 16, alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontSize: 14, marginHorizontal: 32, color: '#9e9e9e' }}>{item.name}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ padding: 4 }} />}
            />
          )
        }}
      </Accordion>
      <Accordion label="College" currentItemId={2}>
        {({ open }: any) => {
          return open === 2 && (
            <FlatList
              data={[
                { id: 1, name: 'Business Administration College' },
                { id: 2, name: 'Science Applied College' },
                { id: 3, name: "IT College" },
                { id: 4, name: 'Law College' },
              ]}
              renderItem={({ item }) => (
                <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 10, paddingHorizontal: 16, alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontSize: 14, marginHorizontal: 32, color: '#9e9e9e' }}>{item.name}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ padding: 4 }} />}
            />
          )
        }}
      </Accordion>
      <Accordion label="University" currentItemId={3}>
        {({ open }: any) => {
          return open === 3 && (
            <FlatList
              data={[
                { id: 1, name: 'General' },
                { id: 2, name: 'Events' },
                { id: 3, name: "Graduation" },
                { id: 4, name: 'Internship' },
                { id: 4, name: 'Success Stories' },
                { id: 4, name: 'Daily Posts' },
                { id: 4, name: 'Reports' },
              ]}
              renderItem={({ item }) => (
                <Pressable android_ripple={{ color: "#0000000f" }} style={{ flexDirection: 'row', padding: 10, paddingHorizontal: 16, alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontSize: 14, marginHorizontal: 32, color: '#9e9e9e' }}>{item.name}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ padding: 4 }} />}
            />
          )
        }}
      </Accordion>
    </SafeAreaView>
  )
}

export default GroupScreen
