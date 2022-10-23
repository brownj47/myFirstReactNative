
import React, { useState } from 'react'
import { View, Image } from "react-native"

const MonImg = () => {
    return (
        <View style={{ backgroundColor: "#ff00ff", alignItems: 'center' }}>
            <Image

                style={{ width: 300, height: 300, margin: 5, borderWidth: 5, borderColor: 'black' }}
                source={{
                    uri: 'https://place-puppy.com/300x300',
                }}
            />
        </View>
    )
}

export default MonImg;