import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import CategoriesCard from '../../components/categorieCard';
import useFetch from '../../hooks/useFetch';
import Lottie from 'lottie-react-native';

const Category = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_CATEGORIES);


  
  if(loading){
    <Lottie source={require(../../assets/loading)} autoplay>
    }
    
if(error){
    <Lottie source={require(../../assets/error)} autoplay>
    }

  const goToMenu = (strCategory) => {
    navigation.navigate('MealPage', {strCategory});
  };
  


  const renderCategoryList = ({item}) => (
    <CategoriesCard
      items={item}
      onSelect={() => goToMenu(item.strCategory)}
    />
  );


  if (loading) {
    return <Lottie source={require('../../assets/loading.json')} autoPlay  />
}

if (error) {
    return <Lottie source={require('../../assets/error.json')} autoPlay  />
}

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.header_title}>Categories</Text>
      </View> */}
      <View style={styles.categories_container}>
        <FlatList data={data.categories} renderItem={renderCategoryList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_title: {
    color: '#FFA500',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    padding: 5,
  },
  categories_container: {
    flex: 1,
    backgroundColor: '#FFA500',
    padding: 5,
  },
});

export default Category;
