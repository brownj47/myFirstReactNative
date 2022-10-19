/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image
} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: '#3jdo30',
  };
  const [monName, setMonName] = useState('')
  const monsterFetch = () => {
    fetch("https://www.dnd5eapi.co/api/monsters")
      .then(res => res.json())
      .then(data => {
        const ranNum = Math.floor(Math.random() * data.results.length)
        // setMonName(data.results[ranNum].name)
        // console.log('https://www.dnd5eapi.co'+data.results[ranNum].url)
        fetch('https://www.dnd5eapi.co'+data.results[ranNum].url)
        .then(res => res.json())
        .then(data=>{
          setMonName(data.name)
        })
      })
      .catch(err => setMonName(err))
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'backgroundStyle.backgroundColor'}
      />
      <ScrollView
      // contentInsetAdjustmentBehavior="automatic"
      // style={backgroundStyle}
      >
        {/* <Header /> */}


        <View
          style={{
            backgroundColor: '#0000ff',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: '#fff', fontSize: 32, margin: 6 }}>Campaign Manager</Text>
        </View>

        <View style={{
          backgroundColor: '#6495ed',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <TouchableOpacity style={{ backgroundColor: '#008000', margin: 3 }}><Text style={{ color: '#fff', margin: 5, }}>Opt 1</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#008000', margin: 3 }}><Text style={{ color: '#fff', margin: 5, }}>Opt 2</Text></TouchableOpacity>
          <TouchableOpacity onPress={monsterFetch} style={{ backgroundColor: '#008000', margin: 3 }}><Text style={{ color: '#fff', margin: 5, }}>{monName}</Text></TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#ff00ff", alignItems: 'center' }}>
          <Image

            style={{ width: 300, height: 300, margin: 5, borderWidth: 5, borderColor: 'black' }}
            source={{
              uri: 'https://place-puppy.com/300x300',
            }}
          />
        </View>



        <View style={{
          backgroundColor: '#a52a2a',
        }}>
          <Text style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Text style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Text style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

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
})
export default App;