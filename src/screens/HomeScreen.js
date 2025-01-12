import { StatusBar, StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { useColorScheme } from 'nativewind';

// packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


// components
import CallCards from '../components/Cards/CallCards';


const HomeScreen = () => {

  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <>
      <StatusBar className='bg-green-400' />
      <View className='flex-1'>
        {/* header */}
        <View className='py-4 items-center flex-row justify-between pl-5 bg-green-400'>
          <Text className='font-bold'>Help Hub</Text>

          <View>
            <Switch value={colorScheme == 'dark'} onValueChange={toggleColorScheme} />
          </View>
        </View>

        <View className='flex-1 bg-neutral-50 dark:bg-black pt-4 px-4'>

          <CallCards />

        </View>
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})