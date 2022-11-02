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
    Image
} from 'react-native';

import monsterPool from '../assets/monsterPool.json'

import { HeaderBar, MonImg, MonStats, NavBar, NewMonBtn } from '../components'

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/

const Home = () => {

    const [monObj, setMonObj] = useState({})

    const monsterFetch = () => {
        const ranNum = Math.floor(Math.random() * monsterPool.length)
        setMonObj(monsterPool[ranNum])
    }


    return (
        <>
            <NavBar />
            <MonImg />
            <NewMonBtn monsterFetch={monsterFetch} />
            <MonStats monster={monObj || {}} />


        </>

    );
};

export default Home;