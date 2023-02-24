import React from 'react'
import { View,Text, FlatList,Linking  } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from "react-native-config";
import DetailCard from '../../components/detailCard';

const Detail = ({ route }) => {
    const { idMeal } = route.params;

    const { data, loading, error } = useFetch(`${Config.API_DETAIL}${idMeal}`);
    
      if(loading){
    <Lottie source={require(../../assets/loading)} autoplay>
    }
    
      if(error){
    <Lottie source={require(../../assets/error)} autoplay>
    }

    const renderDetail = ({ item }) => (
        <DetailCard
            detail={item}
            onSelect={() => Linking.openURL(item.strYoutube)}
        />
    );


    return <FlatList  data={data.meals} renderItem={renderDetail} />;
};

export default Detail;
