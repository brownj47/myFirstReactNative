import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HeaderBar = () => {
    return (
        <View
            style={style.headSec}
        >
            <Text style={style.headText}>Campaign Manager</Text>
        </View>
    )
}

const style = StyleSheet.create({
    headText:{
        color: '#fff', 
        fontSize: 32, 
        margin: 6
    },
    headSec:{
        alignItems: 'center'
    }
})

export default HeaderBar;