import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Modal,
    Linking,
    Image
} from 'react-native';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { selectCallCards, setSelectedCard } from '../../redux/slice/callCardSlice/callCardSlice';


// packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const HelpLineCard = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const callCardData = useSelector(selectCallCards);

    const handleCardPress = (item) => {
        dispatch(setSelectedCard(item));
        navigation.navigate('CardsDetailsScreen')
    };

    // Helper function to format name
    const formatName = (str) => {
        const capitalized = str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return capitalized.length > 15 ? capitalized.slice(0, 15) + '...' : capitalized;
    };




    const renderItem = ({ item }) => (
        <TouchableOpacity
            className="bg-white rounded-lg justify-end dark:bg-neutral-600 relative m-2"
            style={{ width: wp(45), height: hp(25) }}
            onPress={() => handleCardPress(item)}
        >
            <Image
                style={{ width: wp(45), height: hp(25), borderRadius: hp(1) }}
                source={item?.imageUri}
                resizeMode={"stretch"}
            />

            <View className='absolute  w-full pl-2 rounded-lg' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                <Text className=" font-bold text-lg text-white mt-2">
                    {formatName(item.name)}
                </Text>
                <Text className="font-bold text-white pb-2">{item.number}</Text>
            </View>

        </TouchableOpacity>
    );


    return (
        <View  style={{ flex: 1 }}>
            <FlatList
                data={callCardData}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                className='pl-1'
            />
        </View>
    )
}

export default HelpLineCard

const styles = StyleSheet.create({})