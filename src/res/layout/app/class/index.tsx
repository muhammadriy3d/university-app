import { MessagesSquareIcon, NotepadTextIcon, Users2Icon } from "lucide-react-native";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import { useEffect, useState, useCallback, useRef } from "react";
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import StreamFragment from "../fragments/stream";
import ClassworkFragment from "../fragments/classwork";
import PeopleFragment from "../fragments/people";


const routes = [
  {
    icon: MessagesSquareIcon,
    key: "stream",
    title: "Stream",
  },
  {
    icon: NotepadTextIcon,
    key: "classwork",
    title: "Classwork",
  },
  {
    icon: Users2Icon,
    key: "people",
    title: "People",
  },
];

const renderScene = SceneMap({
  stream: StreamFragment,
  classwork: ClassworkFragment,
  people: PeopleFragment,
});

const ClassRoomScreen = () => {
  const layout = useWindowDimensions();
  const [selectedTab, setSelectedTab] = useState(0);
  const tabIndicatorPosition = useSharedValue(0);

  const handleTabPress = useCallback((index: number) => {
    setSelectedTab(index);
    tabIndicatorPosition.value = withTiming(layout.width / routes.length * index, { duration: 200 });
  }, [layout.width, routes.length]);

  const tabIndicatorStyle = useAnimatedStyle(() => ({
    left: tabIndicatorPosition.value,
    width: layout.width / routes.length,
  }));

  useEffect(() => {
    tabIndicatorPosition.value = layout.width / routes.length * selectedTab;
  }, [routes.length, layout.width]);


  return (
    <TabView
      navigationState={{ index: selectedTab, routes }}
      renderScene={renderScene}
      onIndexChange={handleTabPress}
      initialLayout={{ width: layout.width }}
      lazyPreloadDistance={0}
      renderLazyPlaceholder={() => <View />}
      keyboardDismissMode="auto"
      renderToHardwareTextureAndroid
      removeClippedSubviews
      lazy
      style={{ backgroundColor: '#fafafa' }}
      renderTabBar={props => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 50,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            }}
          >
            {routes.map((tab, index) => {
              const isFocused = selectedTab === index;
              const tabWidth = layout.width / routes.length;
              const tabLeft = tabWidth * index;

              return (
                <Pressable
                  key={tab.title}
                  onPress={() => handleTabPress(index)}
                  style={{
                    flexDirection: 'row',
                    gap: 4,
                    position: 'absolute',
                    top: 0,
                    left: tabLeft,
                    width: tabWidth,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  android_ripple={{ color: '#0000000f', borderless: true }}
                >
                  <tab.icon
                    color={isFocused ? '#007AFF' : '#888'}
                    size={24}
                  />
                  <Text style={{ color: isFocused ? '#007AFF' : '#888' }}>
                    {tab.title}
                  </Text>
                </Pressable>
              );
            })}
            <Animated.View
              style={[tabIndicatorStyle, {
                position: 'absolute',
                bottom: 0,
                height: 2,
                backgroundColor: '#007AFF',
                borderTopStartRadius: 16,
                borderTopEndRadius: 16,
              }]}
            />
          </View>
        );
      }}
    />
  );
};

export default ClassRoomScreen;