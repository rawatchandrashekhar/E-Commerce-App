import React, { useRef, useEffect } from 'react'
import { View, Text, Animated, StatusBar, StyleSheet, Image } from 'react-native'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import { getStringData } from '../storage/asyncStorage/AsyncDataStorage'
import strings from '../localization/localizedStrings/LocalizedStrings'

const Splash = ({ navigation }) => {

    let animation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        function splash() {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    startAnimation()
                    resolve();
                }, 3000);
            });
        }

        function login() {
            return new Promise(function (resolve, reject) {
                setTimeout(async () => {
                    let getAsynLan = await getStringData('Language')
                    if (getAsynLan) {
                        strings.setLanguage(getAsynLan)
                        navigation.navigate('Login')
                    } else {
                        navigation.navigate('SelectLanguage')
                    }
                    resolve();
                }, 1000);
            });
        }

        async function main() {
            await splash()
            await login()
        }
        main();
    }, [])

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.lightskyblue} barStyle={'dark-content'} />
            <Animated.View style={[styles.logoViewContainer, {
                transform: [{
                    scale: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 150]
                    })
                }]
            }]}>
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