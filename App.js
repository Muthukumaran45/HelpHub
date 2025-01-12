import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import './global.css'

// packages
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// files
import { store } from './src/redux/store';

// screens
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})