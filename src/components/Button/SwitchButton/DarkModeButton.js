import { StatusBar, StyleSheet, Text, View, Switch, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useCallback, useEffect, useRef } from 'react'



// icons
import Icon from 'react-native-vector-icons/Feather';

// packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useColorScheme } from 'nativewind';



const DarkModeButton = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const handleThemeToggle = () => {
        toggleColorScheme();
    };

    return (
        <TouchableOpacity
            onPress={handleThemeToggle}
            style={[
                colorScheme === 'dark'
                    ? styles.darkButton
                    : styles.lightButton
            ]}
        >
            <Icon
                name={colorScheme === 'dark' ? "sun" : "moon"}
                size={25}
                color={colorScheme === 'dark' ? '#fcca46' : '#fff'}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    darkButton: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: hp(100),
        paddingHorizontal: hp(3),
    },
    lightButton: {
        backgroundColor: "#000",
        padding: 5,
        borderRadius: hp(100),
        paddingHorizontal: hp(3),
    },
});

export default DarkModeButton;