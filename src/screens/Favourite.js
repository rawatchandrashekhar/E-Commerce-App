import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/SharedComponents/Header'

const Favourite = ({ navigation }) => {
    return (
        <>
            <Header handlePressRightIcon={() => alert('CART')} handlePressLeftIcon={() => navigation.goBack()} title={'Favourite'} leftImgWidth={20} leftImgHeight={13} rightImgWidth={25} rightImgHeight={25} leftIcon={require('../assets/images/back.png')} rightIcon={require('../assets/images/cartTwo.png')} showFavIcon={false} />
            <Text>Favourite</Text>
        </>
    )
}

export default Favourite