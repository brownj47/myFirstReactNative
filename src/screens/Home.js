import React, { useState, useEffect } from 'react';
import {Text} from 'react-native'
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
            <MonImg monster={monObj || {}} />
            <NewMonBtn monsterFetch={monsterFetch} />
            <MonStats monster={monObj || {}} />
        </>
    );
};

export default Home;