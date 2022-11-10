import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import monsterPool from '../assets/monsterPool.json';
import { HeaderBar, MonImg, MonStats, NavBar, NewMonBtn } from '../components'

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
**/



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/

const Home = () => {

    const [monObj, setMonObj] = useState({})
    const monsterFetch = () => {
        const ranNum = Math.floor(Math.random() * monsterPool.length)
        setMonObj(monsterPool[ranNum])
    }

    useEffect(monsterFetch, [])

    return (
        <>
            <Text style={style.headerText}>Press the button to retrieve a random monster!</Text>
            <MonImg monster={monObj || {}} />
            <NewMonBtn monsterFetch={monsterFetch} />
            <MonStats monster={monObj || {}} />
        </>
    );
};

const style = StyleSheet.create({
    headerText: {
        color: '#FFFCFF',
        margin: 7,
        fontSize: 18,
        textAlign: 'center'
    }

})

export default Home;