
import React, { useEffect, useState } from 'react'
import { View, Image, StyleSheet } from "react-native"

const MonImg = ({monster}) => {
    const [imgSrc, setImgSrc]= useState('https://place-puppy.com/300x300')
    useEffect(()=>{
            if (monster.image){
                setImgSrc(`https://www.dnd5eapi.co${monster.image}`)
            } else{
                setImgSrc('https://place-puppy.com/300x300')
            }
    }, [monster])

    return (
        <View style={style.imgSection}>
            <Image

                style={style.imgTile}
                source={{
                    uri: imgSrc,
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    imgTile:{
        width: 300, 
        height: 300, 
        margin: 5, 
        borderWidth: 5, 
        borderColor: 'white',
        borderRadius: 5
    },
    imgSection:{
        // backgroundColor: "#ff00ff", 
        alignItems: 'center' 
    }
})

export default MonImg;