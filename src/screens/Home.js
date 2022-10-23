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

import {HeaderBar, MonImg, MonStats, NavBar, NewMonBtn} from '../components'

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/

const Home = () => {

    const [monObj, setMonObj] = useState({})

    const monsterFetch = () => {
        fetch("https://www.dnd5eapi.co/api/monsters")
            .then(res => res.json())
            .then(data => {
                const ranNum = Math.floor(Math.random() * data.results.length)
                // setMonName(data.results[ranNum].name)
                // console.log('https://www.dnd5eapi.co'+data.results[ranNum].url)
                fetch('https://www.dnd5eapi.co' + data.results[ranNum].url)
                    .then(res => res.json())
                    .then(data => {
                        setMonObj(data)
                    })
            })
            .catch(err => setMonObj({errMsg:err}));
    }


    return (
        <>
            <NavBar />
            <MonImg />
            <NewMonBtn monsterFetch={monsterFetch}/>
            <MonStats monster={monObj||{}}/>


        </>

    );
};

export default Home;