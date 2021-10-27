import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './src/pages/Index';
import MateriaNotas from './src/pages/MateriaNotas';
import MateriaFaltas from './src/pages/MateriaFaltas';
import Login from './src/pages/Login';
import Usuario from './src/pages/Usuario';
import Protocolos from './src/pages/Protocolos';


export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerLeft: null }}/>
        <Stack.Screen name="MateriaNotas" component={MateriaNotas} />
        <Stack.Screen name="MateriaFaltas" component={MateriaFaltas} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Usuario" component={Usuario} />
        <Stack.Screen name="Protocolos" component={Protocolos} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}