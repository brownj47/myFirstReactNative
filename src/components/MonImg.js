;
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from "react-native";
import DefaultImage from '../assets/placeholder.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const MonImg = ({monster}) => {
    const [imgSrc, setImgSrc]= useState(DEFAULT_IMAGE);

    useEffect(()=>{
            if (monster.image){
                setImgSrc(`https://www.dnd5eapi.co${monster.image}`);
            } else{
                setImgSrc(DEFAULT_IMAGE);
            };
    }, [monster]);

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
        borderColor: '#FFFCFF',
        borderRadius: 5
    },
    imgSection:{
        // backgroundColor: "#ff00ff", 
        alignItems: 'center' 
    }
});

export default MonImg;