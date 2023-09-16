import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Flatlist, Dimensions, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import FO from "react-native-vector-icons/Fontisto"
import Header from '../components/SharedComponents/Header'
import CartFlatlist from '../components/Flatlists/cartFlatlist/CartFlatlist'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import Button from '../components/SharedComponents/Button'
import Space from '../components/SharedComponents/Space'
import { RAZORPAY_KEY_ID } from "@env"
import Logo from '../helper/Logo'
import RazorpayCheckout from 'react-native-razorpay';

const { width, height } = Dimensions.get("screen")

const Cart = ({ navigation }) => {

    console.log("RAZORPAY_KEY_ID", RAZORPAY_KEY_ID);

    let fetchCartProducts = useSelector(state => state?.cart?.addToCartData);

    const [getTotal, setTotal] = useState('');

    useEffect(() => {
        let grandTotal = fetchCartProducts.reduce((initial, next) => {
            return initial + (next.price * next.qtyValue)
        }, 0)
        setTotal(grandTotal);
    }, [fetchCartProducts])

    const handlePayment = () => {
        // alert("PAY NOW")
        var options = {
            description: 'We are provide best services for online platform after doing order products.',
            image: 'https://cdn-icons-png.flaticon.com/128/7336/7336428.png',
            currency: 'INR',
            key: RAZORPAY_KEY_ID,
            amount: getTotal * 100,
            name: 'Shoppy',
            order_id: '',
            prefill: {
                email: 'chandrashekharrawat@gmail.com',
                contact: '9009574613',
                name: 'Chandra Shekhar Rawat'
            },
            theme: { color: Colors.lightskyblue }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <Header handlePressLeftIcon={() => navigation.goBack()} title={'Cart'} leftImgWidth={20} leftImgHeight={13} rightImgWidth={25} rightImgHeight={25} leftIcon={require('../assets/images/back.png')} rightIcon={require('../assets/images/cartTwo.png')} showCartIcon={false} showLogo={false} />
            {fetchCartProducts.length == 0 ? <View style={{ flex: 1, backgroundColor: "#fff" }} >
                <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <Image source={require('../assets/gif/emptyBag.gif')} style={{ width: width * 0.9 }} resizeMode='contain' />
                    <Text style={{ fontWeight: "700", color: Colors.black, fontFamily: FontFamily.PoppinsMedium, fontSize: 16 }} >Your Cart is Not Looking Good!</Text>
                    <Space mV={10} />
                    <Button handlePress={() => navigation.navigate('Home')} btnWidth={180} btnText={'CONTINUE SHOPPING'} />
                </View>
            </View> : <>
                <CartFlatlist data={fetchCartProducts} />
                <View style={{ width: width, backgroundColor: Colors.lightskyblue, padding: 10, flexDirection: "row", alignItems: "center" }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Text style={{ textAlign: "center", color: Colors.white, fontWeight: "bold", fontSize: 18, fontFamily: FontFamily.PoppinsMedium }}>Total{" "}{" "}|{" "}{" "}</Text>
                        <Text style={{ textAlign: "center", color: Colors.white, fontWeight: "bold", fontSize: 18, fontFamily: FontFamily.PoppinsMedium }} >&#8377;{" "}{getTotal}</Text>
                    </View>
                    <TouchableOpacity onPress={() => handlePayment()} activeOpacity={0.9} style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: Colors.white, marginLeft: "auto", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: width * 0.38, borderRadius: 20 }} >
                        <FO name='credit-card' size={20} style={{ color: Colors.black }} />
                        <Text style={{ textAlign: "center", color: Colors.black, fontWeight: '700', fontSize: 14, fontFamily: FontFamily.PoppinsMedium }}>PAY NOW</Text>
                    </TouchableOpacity>
                </View>
            </>}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})