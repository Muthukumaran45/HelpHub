import { StatusBar, StyleSheet, Text, View, Switch, FlatList, ScrollView } from 'react-native'
import React, { useState, useCallback, useEffect, useRef } from 'react'
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

      {/* header */}
      <View className='py-4 items-center flex-row justify-between pl-5 bg-green-400'>
        <Text className='font-bold'>Help Hub</Text>

        <View>
          <Switch value={colorScheme == 'dark'} onValueChange={toggleColorScheme} />
        </View>
      </View>

      <ScrollView
        className='flex-1 dark:bg-black'
        showsVerticalScrollIndicator={false}
      >

        <View className='bg-green-300 mt-3 mx-2 rounded-lg justify-center items-center dark:bg-neutral-600' style={{ height: hp(25) }}>
          <Text className='font-bold text-xl text-neutral-700 dark:text-white'>Hey Hi</Text>
          <Text className='font-bold text-2xl text-neutral-700 dark:text-white'>Welcom to our Help Hub</Text>
          <Text className='font-bold text-lg text-neutral-700 dark:text-white'>Find Help, Fast and Easy</Text>
        </View>

        <View className='bg-neutral-00 dark:bg-black pt-4'>
          <CallCards />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='pb-5'
        >
          <View className='bg-red-300 mt-3 mx-2 rounded-lg justify-center items-center dark:bg-neutral-600' style={{ width: wp(96), height: hp(23) }}>
            <Text className='font-bold text-xl text-neutral-700 dark:text-white'>Hey Hi</Text>
            <Text className='font-bold text-2xl text-neutral-700 dark:text-white'>Welcom to our Help Hub</Text>
            <Text className='font-bold text-lg text-neutral-700 dark:text-white'>Find Help, Fast and Easy</Text>
          </View>

          <View className='bg-blue-300 mt-3 mx-2 rounded-lg justify-center items-center dark:bg-neutral-600' style={{ width: wp(96), height: hp(23) }}>
            <Text className='font-bold text-xl text-neutral-700 dark:text-white'>Hey Hi</Text>
            <Text className='font-bold text-2xl text-neutral-700 dark:text-white'>Welcom to our Help Hub</Text>
            <Text className='font-bold text-lg text-neutral-700 dark:text-white'>Find Help, Fast and Easy</Text>
          </View>

          <View className='bg-orange-300 mt-3 mx-2 rounded-lg justify-center items-center dark:bg-neutral-600' style={{ width: wp(96), height: hp(23) }}>
            <Text className='font-bold text-xl text-neutral-700 dark:text-white'>Hey Hi</Text>
            <Text className='font-bold text-2xl text-neutral-700 dark:text-white'>Welcom to our Help Hub</Text>
            <Text className='font-bold text-lg text-neutral-700 dark:text-white'>Find Help, Fast and Easy</Text>
          </View>
        </ScrollView>


        <View className='px-2 flex-col gap-5 pb-10'>
          <View className='flex-row justify-between'>
            <View className='bg-red-300 rounded-lg dark:bg-neutral-600' style={{ width: wp(45), height: hp(20) }}></View>
            <View className='bg-green-300 rounded-lg dark:bg-neutral-600' style={{ width: wp(45), height: hp(20) }}></View>
          </View>
          <View className='flex-row justify-between'>
            <View className='bg-neutral-300 rounded-lg dark:bg-neutral-600' style={{ width: wp(45), height: hp(20) }}></View>
            <View className='bg-orange-300 rounded-lg dark:bg-neutral-600' style={{ width: wp(45), height: hp(20) }}></View>
          </View>
        </View>

      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})