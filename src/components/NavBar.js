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
} from 'react-native';

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
export default NavBar;