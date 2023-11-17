/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen from './screens/HomeScreen';
// import AboutScreen from './screens/AboutScreen';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
