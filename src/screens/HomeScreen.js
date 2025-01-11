import { StatusBar, StyleSheet, Text, View , Switch} from 'react-native'
import React, {useState, useCallback, useEffect} from 'react'
import { useColorScheme } from 'nativewind';

// packages



const HomeScreen = () => {

 const {colorScheme, toggleColorScheme} = useColorScheme()

  return (
    <>
      <StatusBar className='bg-green-400' />
      <View className='flex-1'>
        {/* header */}
        <View className='bg-gray-200 py-4 items-center flex-row justify-between pl-5'>
          <Text className='font-bold'>Home</Text>

          <View>
            <Switch value={colorScheme=='dark'} onValueChange={toggleColorScheme} />
          </View>
        </View>

        <View className='flex-1 bg-red-100 dark:bg-black'>
          
        </View>
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})