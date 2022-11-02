import React, { useState } from 'react';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';

const NavBar = (props) => {
    return (
        <View style={style.navBarSec}>
            <TouchableOpacity onPress={()=>{props.setPage('Home')}} style={style.btnBox}><Text style={style.btnText}>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.setPage('Profile')}} style={style.btnBox}><Text style={style.btnText}>Profile</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.setPage('Credits')}}style={style.btnBox}><Text style={style.btnText}>Credits</Text></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    navBarSec:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnBox:{
        backgroundColor: '#008000', 
        margin: 3
    },
    btnText:{
        color: '#fff',
        margin: 5, 
    }

})
export default NavBar;