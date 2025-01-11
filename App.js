import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import './global.css'

// packages
import { NavigationContainer } from '@react-navigation/native';


// screens
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})