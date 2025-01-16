import { StatusBar, StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState, useCallback, useEffect, useRef } from 'react'

// redux
import { useSelector } from 'react-redux';
import { selectSelectedCard } from '../redux/slice/callCardSlice/callCardSlice';

// packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

// colors
import { GOBACK_ICON_COLORS, HEADER_COLORS } from '../theme/colors'

// icons
import { ArrowLeftIcon } from "lucide-react-native"
import DarkModeButton from '../components/Button/SwitchButton/DarkModeButton';

const CardsDetailsScreen = () => {

  const selectedCard = useSelector(selectSelectedCard);
  const navigation = useNavigation()



  if (!selectedCard) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='text-red' style={{ fontSize: hp(1.8) }}>No card selected.</Text>
      </View>
    );
  }

  // helper function to make first letter capital
  const formatName = (str) => {
    const capitalized = str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return capitalized;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
      className='dark:bg-black'
    >

      {/* header */}
      <View className='py-4 items-center flex-row justify-between px-5' style={{ backgroundColor: HEADER_COLORS.home_screen }}>

        <View className='flex-row'>
          <TouchableOpacity
            className='pr-3'
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon color={GOBACK_ICON_COLORS.help_line_screen} />
          </TouchableOpacity>

          <Text className='font-bold text-white text-xl'>Help Line</Text>
        </View>


        <DarkModeButton />
      </View>

      {/* Body content */}
      <View className='p-2' style={{ flex: 1 }}>
        <Image
          className='w-full'
          source={selectedCard.imageUri}
          style={styles.image}
          resizeMode="stretch"
        />

        <View className='pt-5 pb-2 justify-between' style={{ flex: 1 }}>
          <View>
            <Text className='font-bold text-neutral-600 dark:text-white' style={{ fontSize: hp(3) }}>{formatName(selectedCard.name)}</Text>
            <Text className='bg-violet-100 text-center py-3 rounded-lg my-2 font-bold border-t border-violet-400' style={{ fontSize: hp(2.5), borderWidth: 2 }} >{selectedCard.number}</Text>

            <View className='mt-3'>
              <Text className='font-bold text-neutral-500 dark:text-white' style={{ fontSize: hp(2) }}>{selectedCard.description}</Text>
            </View>
          </View>

          <View >
            <TouchableOpacity
              className='bg-green-500 rounded-lg justify-center items-center'
              style={{ height: hp(7) }}
              onPress={() => Linking.openURL(`tel:${selectedCard.number}`)}
            >
              <Text className='font-bold text-white' style={{ fontSize: hp(3) }}>CALL</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default CardsDetailsScreen

const styles = StyleSheet.create({
  image: {
    height: hp(35),
    borderRadius: hp(1.5),
  },

})