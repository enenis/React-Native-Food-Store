import React from 'react'
import { View,Text,TouchableWithoutFeedback,ImageBackground } from 'react-native';
import styles from "./mealsCard.style"

function mealCard({meal,onSelect}){
    return(
            <TouchableWithoutFeedback onPress={onSelect}>
                <View style={styles.container}>
                    <ImageBackground
                    imageStyle={{ borderTopLeftRadius:10,
        borderTopRightRadius:10}}
                    style={styles.image}
                    source={{ uri: meal.strMealThumb }}
                    >
                    <View style={styles.inner_container}>
                        <View style={styles.text_container}>
                            
                        <Text style={styles.title}>{meal.strMeal}</Text>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
    )
}

export default mealCard