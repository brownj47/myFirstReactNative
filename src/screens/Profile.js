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


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/

const Profile = () => {

    const [user, setUser] = useState({
        name: '',
        race: '',
        class: '',
        stats: {
            str: '',
            dex: '',
            con: '',
            int: '',
            wis: '',
            char: ''
        },
        notes: '',
    })
    const handleFormChange = (specialKey, newVal) => {
        setUser({ ...user, [specialKey]: newVal })
    }
    const handleStatChange = (specialKey, newVal) => {
        setUser({ ...user, stats: { ...user.stats, [specialKey]: newVal } })
    }

    return (
        <View>
            <Text>Character Details:</Text>
            <Text>Design your character and take notes on the campaign in this screen!</Text>

            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Name: </Text>
                <TextInput style={style.userDataInput} value={user.name} onChangeText={(newText) => { handleFormChange('name', newText) }} />
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Race: </Text>
                <TextInput style={style.userDataInput} value={user.race} onChangeText={(newText) => { handleFormChange('race', newText) }}
                />
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Class: </Text>
                <TextInput style={style.userDataInput} value={user.class} onChangeText={(newText) => { handleFormChange('class', newText) }}
                />
            </View>
            {/*  TODO: Add in other stats locations */}
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Stats: </Text>
            </View>
            <View style={style.indent}>
                <View style={style.userDataLine}>
                    <Text style={style.userStatLabel}>Strength: </Text>
                    <TextInput style={style.userStatInput} value={user.stats.str} onChangeText={(newText) => { handleStatChange('str', newText) }} keyboardType='numeric'
                    />
                </View>
                <View style={style.userDataLine}>
                    <Text style={style.userStatLabel}>Dexterity: </Text>
                    <TextInput style={style.userStatInput} value={user.stats.dex} onChangeText={(newText) => { handleStatChange('dex', newText) }} keyboardType='numeric'
                    />
                </View>
                <View style={style.userDataLine}>
                    <Text style={style.userStatLabel}>Constitution: </Text>
                    <TextInput style={style.userStatInput} value={user.stats.con} onChangeText={(newText) => { handleStatChange('con', newText) }} keyboardType='numeric'
                    />
                </View>
                <View style={style.userDataLine}>
                    <Text style={style.userStatLabel}>Intelligence: </Text>
                    <TextInput style={style.userStatInput} value={user.stats.int} onChangeText={(newText) => { handleStatChange('int', newText) }} keyboardType='numeric'
                    />
                </View>
                <View style={style.userDataLine}>
                    <Text style={style.userStatLabel}>Wisdom: </Text>
                    <TextInput style={style.userStatInput} value={user.stats.wis} onChangeText={(newText) => { handleStatChange('wis', newText) }} keyboardType='numeric'
                    />
                </View>
                <View style={style.userDataLine}>
                    <Text style={style.userStatLabel}>Charisma: </Text>
                    <TextInput style={style.userStatInput} value={user.stats.char} onChangeText={(newText) => { handleStatChange('char', newText) }} keyboardType='numeric'
                    />
                </View>
            </View>
            {/* indent ends */}

            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Notes: </Text>
                <TextInput multiline={true} style={style.userDataInput} value={user.notes} onChangeText={(newText) => { handleFormChange('notes', newText) }}
                />
            </View>
            {/* save button line */}
            <View style={style.userDataLine}>
                {/* spacer */}
                <View style={{ flex: 1 }}></View>
                <View style={style.svBtnSec}>
                    <TouchableOpacity style={style.btnBox}><Text style={style.btnText}>Save</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    indent: {
        marginLeft: 6
    },
    userDataLine: {
        flexDirection: 'row'
    },
    userDataLabel: {
        color: '#FFFCFF',
        marginLeft: 10,
        marginBottom: 3,
        padding: 3,
        fontWeight: 'bold',
        flex: 1,
    },
    userStatLabel: {
        color: '#FFFCFF',
        marginLeft: 10,
        marginBottom: 3,
        padding: 3,
        flex: 1
    },
    userDataInput: {
        color: '#FFFCFF',
        backgroundColor: '#C5614E',
        flex: 6,
        paddingLeft: 4,
        borderRadius: 2,
        marginBottom: 3,
        marginRight: 5
    },
    userStatInput: {
        color: '#FFFCFF',
        backgroundColor: '#C5614E',
        flex: 3,
        paddingLeft: 4,
        borderRadius: 2,
        marginBottom: 3,
        marginRight: 5
    },
    svBtnSec: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 6
    },
    btnBox: {
        backgroundColor: '#AE4B37',
        margin: 3,
        borderRadius: 5,
    },
    btnText: {
        color: '#FFFCFF',
        margin: 5,
    }
})

export default Profile;