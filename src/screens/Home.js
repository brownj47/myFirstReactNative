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
            .catch(err => setMonName(err))
    }


    const NavBar = () => {
        return (
            <View style={{
                backgroundColor: '#6495ed',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <TouchableOpacity style={{ backgroundColor: '#008000', margin: 3 }}><Text style={{ color: '#fff', margin: 5, }}>Opt 1</Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#008000', margin: 3 }}><Text style={{ color: '#fff', margin: 5, }}>Opt 3</Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#008000', margin: 3 }}><Text style={{ color: '#fff', margin: 5, }}>Opt 3</Text></TouchableOpacity>
            </View>
        )
    }
    const MonImg = () => {
        return (
            <View style={{ backgroundColor: "#ff00ff", alignItems: 'center' }}>
                <Image

                    style={{ width: 300, height: 300, margin: 5, borderWidth: 5, borderColor: 'black' }}
                    source={{
                        uri: 'https://place-puppy.com/300x300',
                    }}
                />
            </View>
        )
    }
    const NewMonBtn = () => {
        return (
            <View style={{
                backgroundColor: '#6495ed',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <TouchableOpacity onPress={monsterFetch} style={{ backgroundColor: '#008000', margin: 3, alignItems: 'center' }}><Text style={{ color: '#fff', margin: 5, }}>Get A New Monster</Text></TouchableOpacity>
            </View>
        )
    }
    const MonStats = () => {
        return (
            <View style={{
                backgroundColor: '#a52a2a',
            }}>
                <Text style={{ color: '#fff' }}>Monster Name: {monObj.name}</Text>
                <Text style={{ color: '#fff' }}>CR: {monObj.challenge_rating}</Text>
                <Text style={{ color: '#fff' }}>Strength: {monObj.strength}</Text>
                <Text style={{ color: '#fff' }}>Dexterity: {monObj.dexterity}</Text>
                <Text style={{ color: '#fff' }}>Constitution: {monObj.constitution}</Text>
                <Text style={{ color: '#fff' }}>Intelligence: {monObj.intelligence}</Text>
                <Text style={{ color: '#fff' }}>Wisdom: {monObj.wisdom}</Text>
                <Text style={{ color: '#fff' }}>Charisma: {monObj.charisma}</Text>
            </View>
        )
    }

    return (
        <>
            <NavBar />
            <MonImg />
            <NewMonBtn/>
            <MonStats/>


        </>

    );
};

export default Home;