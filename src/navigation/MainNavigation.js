import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// screens
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/sign_in/SignInScreen';
import SignUpScreen from '../screens/sign_up/SignUpScreen';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})