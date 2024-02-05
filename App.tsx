import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { isIOS } from './src/helpers';
import { Colors } from './src/theme';
import { AppNavigator } from './src/navigation/AppNavigator';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: Colors.white
  },
});

function App() {
  return (
    <GestureHandlerRootView style={styles.layout}>
      <SafeAreaProvider>
        <StatusBar barStyle={isIOS ? 'dark-content' : 'light-content'} backgroundColor={Colors.black} />
        <AppNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
