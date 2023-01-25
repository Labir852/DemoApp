/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';



import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar, Text,IconButton, MD3Colors,SegmentedButtons} from 'react-native-paper';

function App(){

  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState('');
  return (

      <ScrollView>
      <View 
      style={styles.container}>

        <PaperProvider>
          <Appbar style={{backgroundColor:"red"}}>
            <Appbar.Content title="Demo App"/>
            <Appbar.Action icon="magnify" onPress={() => {}} />
          </Appbar>
          <Text style={styles.sectionTitle}>
          মোট বকেয়া:
          </Text>
          <Text style={styles.sectionCalculation}>
          0.00
          </Text>
          <Text style={styles.sectionTitle}>
          মোট আদায়কৃত:
          </Text>
           
          <Text style={styles.sectionCalculation}>
          0.00
          </Text>
          <Text style={styles.sectionTitle}>
          মোট বকেয়াকারী :
          </Text>
          <Text style={styles.sectionCalculation}>
          0.00
          </Text>
          <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'বকেয়াকারী',
            label: 'বকেয়াকারী',
          },
          { value: 'পরিশোধকারী', label: 'পরিশোধকারী' },
        ]}
      />

      <Text>
      এই মুহূর্তে আপনার কোনো বকেয়াকারী নেই।  নতুন বকেয়াকারী এড করতে হলে + বাটনটি চাপুন এবং প্রয়োজনীয় তথ্য পূরণ করুন। 
      </Text>
      <IconButton
    icon="plus"
    iconColor="white"
    size={20}
    containerColor="red"
    onPress={() => console.log('Pressed')}
  />
        </PaperProvider>

        
        </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 50,
    border:0,
    fontSize: 25,
    fontWeight: '600',
  },
  sectionCalculation: {
    color:'red',
    paddingTop:0,
    marginTop:80,
    fontSize: 30,
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
  container: {
    flex: 1,
  },
});

export default App;
