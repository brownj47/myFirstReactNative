import React, { useState } from 'react';
import {Text,View} from 'react-native';

const HeaderBar = () => {
    return (
        <View
            style={{
                backgroundColor: '#0000ff',
                alignItems: 'center'
            }}
        >
            <Text style={{ color: '#fff', fontSize: 32, margin: 6 }}>Campaign Manager</Text>
        </View>
    )
}
export default HeaderBar;