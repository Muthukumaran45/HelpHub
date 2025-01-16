import React from 'react';
import { StyleSheet } from 'react-native';

// Packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/sign_in/SignInScreen';
import SignUpScreen from '../screens/sign_up/SignUpScreen';
import CardsDetailsScreen from '../screens/CardsDetailsScreen';
import { CustomBottomTabs } from './Bottomnavigation';

// Stack and Tab Navigators
const Stack = createNativeStackNavigator();


// Main Navigation
const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={CustomBottomTabs} />
      <Stack.Screen
        name="CardsDetailsScreen"
        component={CardsDetailsScreen}
        options={{
          animation: 'slide_from_right',
        }} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
