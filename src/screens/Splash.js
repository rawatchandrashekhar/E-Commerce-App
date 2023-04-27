import React, { useRef, useEffect } from 'react'
import { View, Text, Animated, StatusBar, StyleSheet, Image } from 'react-native'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'

const Splash = ({ navigation }) => {

    let fadeAnimation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 5000);
        Animated.timing(fadeAnimation, {
            toValue: 0.9,
            duration: 5000,
            useNativeDriver: true,
        }).start()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.lightskyblue} barStyle={'dark-content'} />
            <Animated.View style={[styles.logoViewContainer, { opacity: fadeAnimation }]}>
                <Image source={require('../assets/images/splash_logo.png')} style={styles.logoImg} />
                <Text style={styles.logoTxt}>Shoppy</Text>
            </Animated.View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.lightskyblue
    },
    logoViewContainer: {
        paddingVertical: 5,
        paddingHorizontal: 25,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: 235,
        alignSelf: "center"
    },
    logoImg: {
        width: 50,
        height: 50
    },
    logoTxt: {
        fontSize: 30,
        color: Colors.lightskyblue,
        fontFamily: FontFamily.PoppinsBold,
        marginLeft: 15
    }
})