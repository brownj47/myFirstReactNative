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
    
    const [user,setUser] = useState({
        name:'',
        race:'',
        class:'',
        stats:{
            str:'',
            dex:'',
            con:'',
            int:'', 
            wis:'', 
            char:''
        },
        notes:'',
    })
    const handleFormChange = (specialKey, newVal)=>{
        setUser({...user, [specialKey]:newVal})
    }

    return (
        <View>
            <Text>Character Details:</Text>
            <Text>Design your character and take notes on the campaign in this screen!</Text>

            <TouchableOpacity style={style.btnBox}><Text style={style.btnText}>Joe</Text></TouchableOpacity>

            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Name: </Text>
                <TextInput style={style.userDataInput} value={user.name} onChangeText={(newText)=>{handleFormChange('name', newText )}}/>
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Race: </Text>
                <TextInput style={style.userDataInput} value={user.race} onChangeText={(newText)=>{handleFormChange('race', newText )}}
                />
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Class: </Text>
                <TextInput style={style.userDataInput} value={user.class} onChangeText={(newText)=>{handleFormChange('class', newText )}}
                />
            </View>
            {/*  TODO: Add in other stats locations */}
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Stats: </Text>
                <TextInput style={style.userDataInput} value={user.name}
                />
            </View>
            <View style={style.userDataLine}>
                <Text style={style.userDataLabel}>Notes: </Text>
                <TextInput multiline={true} style={style.userDataInput} value={user.notes} onChangeText={(newText)=>{handleFormChange('notes', newText )}}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    userDataLine:{
        flexDirection: 'row' 
    },
    userDataLabel: {
        color: '#FFFCFF',
        marginLeft: 10,
        marginBottom: 3,
        padding: 3,
        fontWeight: 'bold',
        flex:1,
    },
    userDataInput: {
        color: '#FFFCFF',
        backgroundColor: '#C5614E',
        flex: 6,
        paddingLeft: 4,
        borderRadius:2,
        marginBottom: 3,
        marginRight:5
    },
    btnBox:{
        backgroundColor: '#C5614E', 
        margin: 3,
        borderRadius: 5,
    },
    btnText:{
        color: '#FFFCFF',
        margin: 5, 
    }
})

export default Profile;