import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import SafeAreaView from "../../../components/SafeAreaView"
import { EllipsisVerticalIcon, ChevronLeft, ChevronDownIcon } from "lucide-react-native"
import IconButton from "../../../../res/components/IconButton"

const ChannelScreen = ({route}: any) => {
  const navigation = useNavigation();
  const {channelId} = route.params;
  return (
    <SafeAreaView>
      <View style={{paddingVertical: 16, paddingHorizontal: 8, marginRight: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <IconButton onPress={() => navigation.goBack()}>
            <ChevronLeft size={22} color={'#212121'} />
          </IconButton>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Channel {channelId}</Text>    
        </View>
        <IconButton>
          <EllipsisVerticalIcon size={22} color={'#212121'} />
        </IconButton>
      </View>
      <View style={{padding: 16, gap: 16}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <ChevronDownIcon size={22} color={'#212121'} />
          <Text style={{fontSize: 14, fontWeight: '600'}}>Apps</Text>
        </View>
      </View>
      <View style={{padding: 16, gap: 16}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <ChevronDownIcon size={22} color={'#212121'} />
          <Text style={{fontSize: 14, fontWeight: '600'}}>Channels</Text>
        </View>
        <Text style={{fontSize: 14, fontWeight: '600', marginHorizontal: 32, color: '#9e9e9e'}}>General</Text>
      </View>
    </SafeAreaView>
  )
}

export default ChannelScreen
