import { StatusBar, StyleSheet, Text, View, Switch, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useEffect, useRef } from 'react'

// packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


// components
import CallCards from '../components/Cards/CallCards';
import DarkModeButton from '../components/Button/SwitchButton/DarkModeButton';

// colors
import { HEADER_COLORS, STATUSBAR_COLORS } from '../theme/colors';




const HomeScreen = () => {

  return (
    <>
      <StatusBar backgroundColor={STATUSBAR_COLORS.home_screen} />

      {/* header */}
      <View className='py-4 items-center flex-row justify-between px-5' style={{ backgroundColor: HEADER_COLORS.home_screen }}>
        <Text className='font-bold text-white text-xl'>Help Hub</Text>

        <DarkModeButton />
      </View>

      <ScrollView
        className='flex-1 dark:bg-black'
        showsVerticalScrollIndicator={false}
      >

        {/* Top card */}
        <View className='mt-3 mx-2 justify-end items-center relative'>
          <Image
            className='rounded-lg'
            style={{ height: hp(25), width: "100%" }}
            source={require("../../assets/logo/helpline_header.jpg")}
            resizeMode='cover'
          />
          <View className='absolute justify-center items-center bottom-5'>
            <Text className='font-bold text-2xl text-white'>Welcom to our Help Hub</Text>
            <Text className='font-bold text-lg text-white'>Find Help, Fast and Easy</Text>
          </View>
        </View>

        {/* call cards */}
        <View className='bg-neutral-00 dark:bg-black pt-4'>
          <CallCards />
        </View>

      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})