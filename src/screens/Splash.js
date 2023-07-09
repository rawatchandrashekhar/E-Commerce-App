import React, { useRef, useEffect } from 'react'
import { View, Text, Animated, StatusBar, StyleSheet, Image } from 'react-native'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import { getObjectData, getStringData } from '../storage/asyncStorage/AsyncDataStorage'
import strings from '../localization/localizedStrings/LocalizedStrings'
import Logo from '../helper/Logo'
import { useDispatch } from 'react-redux'
import { addUserData } from '../storage/redux/slices/AddUserDetailData'

const Splash = ({ navigation }) => {

    let dispatch = useDispatch()

    let animation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        // function splash() {
        //     return new Promise(function (resolve, reject) {
        //         setTimeout(() => {
        //             startAnimation()
        //             resolve();
        //         }, 3000);
        //     });
        // }

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                startAnimation()
                resolve();
            }, 3000);
        })
        promise.then(() => {
            async function temp() {
                let getAsynLan = await getStringData('Language')
                let getUserData = await getObjectData('USER_DETAIL')
                dispatch(addUserData(getUserData))
                if (getAsynLan) {
                    strings.setLanguage(getAsynLan)
                    navigation.navigate('Main')
                }
                //  else if (getAsynLan) {
                //     navigation.navigate('Login')
                // } else if (getUserData) {
                //     navigation.navigate('Main')
                // }
                else {
                    navigation.navigate('SelectLanguage')
                }
            }
            temp()
        }).catch((e) => {
            console.log("EXCEPTION IN SPLASH SCREEN", e);
        })
        // function login() {
        //     return new Promise(function (resolve, reject) {
        //         async function temp() {
        //             let getAsynLan = await getStringData('Language')
        //             let getUserData = await getObjectData('USER_DETAIL')
        //             if (getAsynLan && getUserData) {
        //                 strings.setLanguage(getAsynLan)
        //                 navigation.navigate('Main')
        //             } else if (getAsynLan) {
        //                 navigation.navigate('Login')
        //             } else if (getUserData) {
        //                 navigation.navigate('Main')
        //             } else {
        //                 navigation.navigate('SelectLanguage')
        //             }
        //         }
        //         resolve(temp);
        //     });
        // }

        // async function main() {
        //     await splash()
        //     await login()
        // }
        // main();
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
            <StatusBar translucent backgroundColor={Colors.lightskyblue} />
            <Animated.View style={{
                transform: [{
                    scale: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 2]
                    })
                }]
            }}>
                <Logo />
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
    }
})