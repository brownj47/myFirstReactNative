import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MonStats = ({ monster }) => {
    return (
        <View style={styles.monStatBox}>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>Monster Name:</Text> {monster.name}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>CR:</Text> {monster.challenge_rating}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>AC:</Text> {monster.armor_class}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>Hit Dice:</Text> {monster.hit_dice}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>HP:</Text> {monster.hit_points}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>HP Roll:</Text> {monster.hit_points_roll}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>XP:</Text> {monster.xp}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>Strength:</Text> {monster.strength}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>Dexterity:</Text> {monster.dexterity}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>Constitution:</Text> {monster.constitution}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>Intelligence:</Text> {monster.intelligence}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>Wisdom:</Text> {monster.wisdom}</Text>
            <Text style={styles.monStatLine}><Text style={styles.monStatTitle}>Charisma:</Text> {monster.charisma}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    monStatBox:{
        paddingTop:10,
    },
    monStatLine:{
        color: '#FFFCFF',
        marginLeft: 10,
        padding: 2
    },
    monStatTitle:{
        fontWeight:'bold'
    }
})

export default MonStats;
