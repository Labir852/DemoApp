/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';



import type {PropsWithChildren} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar, TextInput } from 'react-native-paper';

function App(){

  
  return (

      <View style={{backgroundColor:"#ffffff"}}>
        <PaperProvider>
          <Appbar style={{backgroundColor:"red"}}>
            <Appbar.Content title="Demo App"/>
            <Appbar.Action icon="magnify" onPress={() => {}} />
          </Appbar>
        </PaperProvider>
        </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
