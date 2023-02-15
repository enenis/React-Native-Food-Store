import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import categories from './pages/categories';
import Detail from './pages/Detail';
import Meal from './pages/Meal';

const Stack=createNativeStackNavigator()

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='CategoriesPage' component={categories} options={{
          headerTintColor: 'orange',
          headerTitle: 'Categories',
          headerTitleAlign: 'center'}}/>
                <Stack.Screen name='MealPage' component={Meal} options={{
          headerTintColor: 'orange',
          headerTitle: 'Meals',
          headerTitleAlign: 'center'}}/>
                <Stack.Screen name='DetailPage' component={Detail} options={{
          headerTintColor: 'orange',
          headerTitle: 'Meals Detail',
          headerTitleAlign: 'center'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router