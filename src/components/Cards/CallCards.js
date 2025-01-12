import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCallCards } from '../../redux/slice/callCardSlice/callCardSlice';

const CallCards = () => {
    const callCardData = useSelector(selectCallCards);

    return (
        <View>
            {callCardData.map((item, index) => (
                <View 
                    key={index} 
                    className='bg-neutral-600 rounded-lg mb-4 p-4'
                    style={{ width: 100, height: 80 }}
                >
                    <Text className='text-white font-bold'>{item.name}</Text>
                    <Text className='text-white'>{item.number}</Text>
                </View>
            ))}
        </View>
    );
};

export default CallCards;

const styles = StyleSheet.create({});
