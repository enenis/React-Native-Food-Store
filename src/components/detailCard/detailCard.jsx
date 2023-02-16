import React from 'react'
import { View,Text,TouchableOpacity,Image } from 'react-native';
import styles from "./detailCard.style"

function detailCard({detail,onSelect}){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: detail.strMealThumb}}/>
            <Text style={styles.text}>{detail.strMeal}</Text>
            <Text style={styles.area}>{detail.strArea}</Text>
            <View style={styles.seperator}></View>
            <Text style={styles.desc}>{detail.strInstructions}</Text>
            <TouchableOpacity style={styles.button} onPress={onSelect}>
                <Text style={styles.button_text}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}

export default detailCard