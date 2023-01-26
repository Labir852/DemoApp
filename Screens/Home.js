/**
 * Sample React Native Home
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


const Home=({navigation})=>{

  const [value, setValue] = React.useState('');
  return (

      <ScrollView>
      <View 
      style={styles.container}>

        <PaperProvider>
          <Appbar style={{backgroundColor:"red"}}>
            <Appbar.Content title="Demo App"/>
            <Appbar.Action icon="magnify" onPress={() => {console.log("searching...")}} />
          </Appbar>
          <Text style={styles.sectionTitle}>
          মোট বকেয়া:
          </Text>
          <Text style={styles.sectionPayee}>
          0.00
          </Text>
          <Text style={styles.sectionTitle}>
          মোট আদায়কৃত:
          </Text>
           
          <Text style={styles.sectionPayer}>
          0.00
          </Text>
          <Text style={styles.sectionTitle}>
          মোট বকেয়াকারী :
          </Text>
          <Text style={styles.sectionTotal}>
          0
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
    onPress={() =>navigation.navigate('Contact')}
  />
        </PaperProvider>

        
        </View>
        </ScrollView>
  );
}
const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: '600',
  },
  sectionPayee: {
    color:'red',
    paddingTop:0,
    marginTop:20,
    fontSize: 30,
    fontWeight: '600',
    
  },
  sectionPayer: {
    color:'green',
    paddingTop:0,
    marginTop:20,
    fontSize: 30,
    fontWeight: '600',
    
  },
  sectionTotal: {
    paddingTop:0,
    marginTop:20,
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
    margin:15,
  },
});

export default Home;
