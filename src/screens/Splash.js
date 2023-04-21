import React, { useRef, useEffect } from 'react'
import { View, Text, Animated, StatusBar } from 'react-native'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import { Easing } from 'react-native-reanimated'

const Splash = ({ navigation }) => {

    let fadeAnimation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main')
        }, 5000);
        Animated.timing(fadeAnimation, {
            toValue: 0.9,
            duration: 5000,
            useNativeDriver: true,
        }).start()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.lightskyblue }}>
            <StatusBar animated={true} backgroundColor={Colors.lightskyblue} />
            <Animated.View style={{ opacity: fadeAnimation }} >
                <Text style={{ fontFamily: FontFamily.PoppinsBold, color: Colors.white, fontSize: 40, fontWeight: "bold" }} >Splash</Text>
            </Animated.View>
        </View>
    )
}

export default Splash