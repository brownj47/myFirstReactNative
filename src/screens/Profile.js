import React, { useState } from 'react';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
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
    TextInput
} from 'react-native';

import monsterPool from '../assets/monsterPool.json'
import { HeaderBar, MonImg, MonStats, NavBar, NewMonBtn } from '../components'

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/

const Profile = () => {

    
    
    return (
        <View>
            <Text style={style.userDataLine}>Profile</Text>

            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Name: </Text>
                <TextInput style={style.userDataInput}
                />
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Race: </Text>
                <TextInput style={style.userDataInput}
                />
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Class: </Text>
                <TextInput style={style.userDataInput}
                />
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Stats: </Text>
                <TextInput style={style.userDataInput}
                />
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Notes: </Text>
                <TextInput multiline={true} style={style.userDataInput}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    userDataLine:{
        backgroundColor: 'thistle', 
        flexDirection: 'row' 
    },
    userDataLabel: {
        color: '#fff',
        marginLeft: 10,
        padding: 2,
        fontWeight: 'bold',
        flex:1
    },
    userDataInput: {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        flex: 6,
        paddingLeft: 4
    }
})

export default Profile;