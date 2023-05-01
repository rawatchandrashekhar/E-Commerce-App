import React from 'react'
import { StyleSheet, Text, View, Flatlist } from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../components/SharedComponents/Header'
import CartFlatlist from '../components/Flatlists/cartFlatlist/CartFlatlist'

const Cart = ({ navigation }) => {

    let fetchCartProducts = useSelector(state => state?.cart?.addToCartData)

    return (
        <View style={{ flex: 1 }}>
            <Header handlePressLeftIcon={() => navigation.goBack()} title={'Cart'} leftImgWidth={20} leftImgHeight={13} rightImgWidth={25} rightImgHeight={25} leftIcon={require('../assets/images/back.png')} rightIcon={require('../assets/images/cartTwo.png')} showCartIcon={false} />
            <CartFlatlist data={fetchCartProducts} />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})