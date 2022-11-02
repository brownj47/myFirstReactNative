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

const Credits = () => {

    return (
        <>
            <Text style={{ color: 'white' }}>Credits</Text>
            <Text style={{ color: 'white' }}>Name:<TextInput style={{
                color: 'white',
                backgroundColor: 'cornflowerblue'
            }} /></Text>
            <Text style={{ color: 'white' }}>Race:</Text>
            <Text style={{ color: 'white' }}>Class:</Text>
            <Text style={{ color: 'white' }}>Stats:</Text>
            <Text style={{ color: 'white' }}>Notes:</Text>
            <TextInput style={{
                color: 'white',
                backgroundColor: 'cornflowerblue'
            }} />
        </>
    );
};

export default Credits;