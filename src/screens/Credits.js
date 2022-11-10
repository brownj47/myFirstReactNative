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

                <Text style={{ color: '#FFFCFF', textAlign:'center'}}>Created by Justus Brown, 2022.</Text>

                {/* social media buttons */}
                <View style={style.socBtnSec}>
                    <TouchableOpacity style={style.socBtn} onPress={() => Linking.openURL('https://github.com/brownj47')}><Image style={{ width: 30, height: 30}} source={{ uri: GIT_HUB_ICON }} /></TouchableOpacity>
                    <TouchableOpacity style={style.socBtn} onPress={() => Linking.openURL('https://www.linkedin.com/in/justus-b-8a1158108/')}><Image style={{ width: 30, height: 30 }} source={{ uri: LINKEDIN_ICON }} /></TouchableOpacity>
                </View>

                <Text style={{ color: 'white', textAlign:'center', margin:10 }}>Please follow this <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://github.com/brownj47/myFirstReactNative')}>link</Text> to visit the github repository for this project.</Text>



                <Text style={style.bold }>License:</Text>
                <Text style={style.primaryText}>This project is licensed under the terms of the MIT License. The underlying material is released using the <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://company.wizards.com/en')}>Open Gaming License Version 1.0a</Text>.</Text>

                <Text style={style.primaryText}>I used the monsters.json file from the 5e-bits/5e-database <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://github.com/5e-bits/5e-database')}>Github Repo</Text> for the random monster generator.</Text>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    headingText: {
        color: '#FFFCFF',
    },
    socBtn:{
        backgroundColor:'#AE4B37', 
        margin: 10, 
        padding: 3, 
        borderRadius:5
    },
    socBtnSec:{ 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    primaryText:{
        color: '#FFFCFF', 
        textAlign:'center', 
        margin:10
    },
    bold:{
        fontWeight:'bold',
        color: '#FFFCFF', 
        textAlign:'center', 
        marginBottom: -3
    }
})

export default Credits;