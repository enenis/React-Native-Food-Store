import React from 'react'
import { View,Text,ScrollView,Image,FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import MealsCard from '../../components/mealsCard';
import Config from "react-native-config";

const Meals = ({ route, navigation }) => {

    const { strCategory } = route.params;

    const { data, loading, error } = useFetch(`${Config.API_MEALS}${strCategory}`)

    const handleMealSelect = (idMeal) => {
        navigation.navigate('DetailPage', {idMeal})
    }
    
      if(loading){
    <Lottie source={require(../../assets/loading)} autoplay>
    }
    
    if(error){
    <Lottie>
    }


    const renderMeals = ({ item }) => <MealsCard meal={item} onSelect={ ()=> handleMealSelect(item.idMeal)} />;


   

    return (
        <View style={{ backgroundColor: '#FFA500',}}>
            <FlatList data={data.meals} renderItem={renderMeals} />
        </View>
    )
}

export default Meals;
