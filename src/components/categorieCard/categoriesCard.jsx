import React from 'react'
import { View,Text,Image,TouchableWithoutFeedback } from 'react-native';
import styles from "./categoriesCard.style"


const Categories = ({ items, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect} >
            <View style={styles.container}>
                
                    <Image source={{ uri: items.strCategoryThumb}} style={styles.image} />
                    <Text style={styles.text}>{items.strCategory} </Text>
                
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Categories;
