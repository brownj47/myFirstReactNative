import React, { useState } from 'react';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
*/
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    Image,
    TextInput,
    Linking
} from 'react-native';

import githubIcon from '../assets/GitHub.png'
let GIT_HUB_ICON = Image.resolveAssetSource(githubIcon).uri
import linkedinIcon from '../assets/linkedin.png'
let LINKEDIN_ICON = Image.resolveAssetSource(linkedinIcon).uri

const Credits = () => {

    return (
        <>
            <View>
                <Text style={style.headingText}>Credits:</Text>

                <Text style={{ color: 'white' }}>Created by Justus Brown, 2022.</Text>

                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/brownj47')}><Image style={{ width: 30, height: 30 }}source={{uri: GIT_HUB_ICON}} /></TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/justus-b-8a1158108/')}><Image style={{ width: 30, height: 30 }} source={{uri: LINKEDIN_ICON}}/></TouchableOpacity>
                


                <Text style={{ color: 'white' }}>Please follow this <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://github.com/brownj47/myFirstReactNative')}>link</Text> to visit the github repository for this project.</Text>



                <Text style={{ color: 'white' }}>License:</Text>
                <Text style={{ color: 'white' }}>This project is licensed under the terms of the MIT License. The underlying material is released using the <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://company.wizards.com/en')}>Open Gamimg License Version 1.0a</Text>.</Text>
                <Text style={{ color: 'white' }}>I used the monsters.json file from the 5e-bits/5e-database <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://github.com/5e-bits/5e-database')}>Github Repo</Text> for the random monster generator.</Text>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    headingText: {
        color: 'white',
    }
})

export default Credits;