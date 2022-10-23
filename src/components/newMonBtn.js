
import React from 'react'
import { View, TouchableOpacity, Text } from "react-native"

const NewMonBtn = (props) => {
    return (
        <View style={{
            backgroundColor: '#6495ed',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <TouchableOpacity onPress={props.monsterFetch} style={{ backgroundColor: '#008000', margin: 3, alignItems: 'center' }}><Text style={{ color: '#fff', margin: 5, }}>Get A New Monster</Text></TouchableOpacity>
        </View>
    )
}

export default NewMonBtn;