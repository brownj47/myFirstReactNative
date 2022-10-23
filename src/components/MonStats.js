import React from 'react'
import { View, Text } from 'react-native'

const MonStats = ({ monster }) => {
    return (
        <View style={{
            backgroundColor: '#a52a2a',
        }}>
            <Text style={{ color: '#fff' }}>Monster Name: {monster.name}</Text>
            <Text style={{ color: '#fff' }}>CR: {monster.challenge_rating}</Text>
            <Text style={{ color: '#fff' }}>Strength: {monster.strength}</Text>
            <Text style={{ color: '#fff' }}>Dexterity: {monster.dexterity}</Text>
            <Text style={{ color: '#fff' }}>Constitution: {monster.constitution}</Text>
            <Text style={{ color: '#fff' }}>Intelligence: {monster.intelligence}</Text>
            <Text style={{ color: '#fff' }}>Wisdom: {monster.wisdom}</Text>
            <Text style={{ color: '#fff' }}>Charisma: {monster.charisma}</Text>
        </View>
    )
}

export default MonStats;
