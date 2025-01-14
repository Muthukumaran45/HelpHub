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
import { useSelector } from 'react-redux';
import { selectCallCards } from '../../redux/slice/callCardSlice/callCardSlice';

// packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';


const CallCards = () => {
    const callCardData = useSelector(selectCallCards);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const groupedData = [];
    for (let i = 0; i < callCardData.length; i += 2) {
        groupedData.push(callCardData.slice(i, i + 2));
    }

    // Helper function to format name
    const formatName = (str) => {
        const capitalized = str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return capitalized.length > 15 ? capitalized.slice(0, 15) + '...' : capitalized;
    };

    const modalFormatName = (str) => {
        const capitalized = str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return capitalized;
    };



    // Function to handle card press
    const handleCardPress = (card) => {
        setSelectedCard(card);
        setIsModalVisible((prev) => !prev);
    };

    // Function to handle call button press
    const handleCallPress = (number) => {
        const url = `tel:${number}`;
        Linking.openURL(url).catch((err) =>
            console.error('Failed to open dialer:', err)
        );
        setIsModalVisible((prev) => !prev);
    };

    const renderItem = ({ item }) => (
        <View className="gap-3 mr-3">
            {item.map((card, index) => {

                return (

                    <TouchableOpacity
                        key={index}
                        className="bg-white rounded-lg justify-end dark:bg-neutral-600 relative"
                        style={{ width: wp(40), height: hp(25) }}
                        onPress={() => handleCardPress(card)} // Handle card press
                    >
                        {card ? (

                            <Image
                                style={{ width: wp(40), height: hp(25), borderRadius: hp(1) }}
                                source={card?.imageUri}
                                resizeMode={"stretch"}
                            />
                        ) : (
                            <Text className="text-neutral-600 font-bold dark:text-white">No card</Text>
                        )}

                        <View className='absolute  w-full pl-2 rounded-t-lg' style={{ backgroundColor: 'rgba(0,0,0,0.3)'}}>
                            <Text className=" font-bold text-lg text-white mt-2">
                                {formatName(card.name)}
                            </Text>
                            <Text className="font-bold text-white pb-2">{card.number}</Text>
                        </View>

                    </TouchableOpacity>
                );
            })}
        </View>
    );

    return (
        <View>
            <FlatList
                data={groupedData}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                className="px-2"
            />

            {/* Modal for card details */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View className='bg-white rounded-xl items-center' style={{ width: wp(90) }}>

                        <FastImage
                            style={{ width: wp(60), height: hp(20), marginVertical: hp(2), borderRadius: hp(1) }}
                            source={selectedCard?.imageUri}
                            resizeMode={FastImage.resizeMode.cover}
                        />

                        <View className='mb-4 items-center justify-center'>
                            <Text className='text-neutral-600 font-bold text-2xl'>{selectedCard?.name ? modalFormatName(selectedCard.name) : ''}</Text>
                            <Text className='text-neutral-600 font-bold text-2xl'>{selectedCard?.number}</Text>
                        </View>

                        <View className='flex-row gap-2 mb-3'>
                            <TouchableOpacity
                                className='bg-green-600 justify-center items-center rounded-lg'
                                style={{ width: wp(40), height: hp(6.5) }}
                                onPress={() => handleCallPress(selectedCard?.number)}
                            >
                                <Text className='text-white font-bold text-xl'>Call</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className='bg-red-400 justify-center items-center rounded-lg'
                                style={{ width: wp(40), height: hp(6.5) }}
                                onPress={() => setIsModalVisible(false)}
                            >
                                <Text className='text-white font-bold text-xl'>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CallCards;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: wp(80),
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },



});
