import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

// packages
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { HEADER_COLORS, WELCOME_SCREEN_COLORS } from '../theme/colors';

// colors

const WelcomeScreen = () => {

  const navigation = useNavigation();

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(() => ring1padding.value = withSpring( ring1padding.value+hp(5), 100))
    setTimeout(() => ring2padding.value = withSpring( ring1padding.value+hp(5.5), 300))
    setTimeout(() => navigation.navigate("HomeScreen"), 2500)
  },[])

  return (
    <>
      <StatusBar backgroundColor={HEADER_COLORS.welcome_screen} />
      <View className='flex-1 justify-center items-center' style={{backgroundColor: WELCOME_SCREEN_COLORS.bg_color}}>

        {/* logo image with rings */}
        <Animated.View className='rounded-full' style={{ padding: ring2padding, backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
          <Animated.View className='rounded-full' style={{ padding: ring1padding, backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            <Image
              source={require("../../assets/logo/logo.png")}
              style={{ width: wp(40), height: hp(20) }}
              className='rounded-full'
            />
          </Animated.View>
        </Animated.View>

        {/* title and punchline */}
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Text className='text-white' style={{ fontWeight: "bold", fontSize: hp(7) }}>Help Hub</Text>
          <Text className='text-white' style={{ fontWeight: "500", fontSize: hp(2) }}>Find Help, Fast and Easy</Text>
        </View>

      </View>
    </>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({

})