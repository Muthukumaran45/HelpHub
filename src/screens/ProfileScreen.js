import { StatusBar, StyleSheet, Text, View, Switch, FlatList, ScrollView, Image } from 'react-native'
import React, { useState, useCallback, useEffect, useRef } from 'react'

// packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// components
import { HEADER_COLORS, STATUSBAR_COLORS } from '../theme/colors';
import DarkModeButton from '../components/Button/SwitchButton/DarkModeButton';


const ProfileScreen = () => {



  return (
    <>
      <StatusBar backgroundColor={STATUSBAR_COLORS.home_screen} />

      {/* header */}
      <View className='py-4 items-center flex-row justify-between px-5' style={{ backgroundColor: HEADER_COLORS.home_screen }}>
        <Text className='font-bold text-white text-xl'>Profile</Text>

        <DarkModeButton />
      </View>

      <ScrollView
        className='flex-1 dark:bg-black'
        showsVerticalScrollIndicator={false}
      >

      </ScrollView>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})