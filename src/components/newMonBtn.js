
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const NewMonBtn = (props) => {
    return (
        <View style={style.getMonSec}>
            <TouchableOpacity onPress={props.monsterFetch} style={style.monOpac}><Text style={style.btnText}>Get A New Monster</Text></TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    getMonSec: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    monOpac: {
        backgroundColor: '#C5614E',
        margin: 3,
        alignItems: 'center',
        borderRadius: 5
    },
    btnText: {
        color: '#FFFCFF',
        margin: 5
    }
})

export default NewMonBtn;