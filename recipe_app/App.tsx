import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GridScreen from './src/screens/GridScreen';
import RecipeScreen from './src/screens/RecipeScreen';
import data from './src/data/recipe_list.json';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GridScreen"
          screenOptions={{
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen name="GridScreen" component={GridScreen} options={{ title: 'List of Recipes' }}/>
          <Stack.Screen name="RecipeScreen" component={RecipeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
