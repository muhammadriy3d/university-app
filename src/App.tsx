import React from 'react';
import RootNavigator from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../gesture-handler';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import SafeAreaView from './res/components/SafeAreaView';

const App = (): React.JSX.Element =>
  <SafeAreaProvider>
    <GluestackUIProvider mode='light'>
      <RootNavigator />
    </GluestackUIProvider>
  </SafeAreaProvider>;

export default App;
