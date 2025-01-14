import React from 'react';
import { StyleSheet } from 'react-native';

// Packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/sign_in/SignInScreen';
import SignUpScreen from '../screens/sign_up/SignUpScreen';
import { CustomBottomTabs } from './Bottomnavigation';

// Stack and Tab Navigators
const Stack = createNativeStackNavigator();


// Main Navigation
const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={CustomBottomTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
