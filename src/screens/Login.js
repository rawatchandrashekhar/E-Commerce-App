import React from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity, BackHandler, Alert } from 'react-native'
import HideKeyboard from '../components/SharedComponents/HideKeyboard'
import { useFocusEffect } from '@react-navigation/native'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import Button from '../components/SharedComponents/Button'
import Input from '../components/SharedComponents/Input'
import Space from '../components/SharedComponents/Space'
import { navigate, navigateToClearStack } from '../navigation/navigationService/NavigationService'

const { width, height } = Dimensions.get('screen')

const Login = () => {

    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                BackHandler.exitApp()
                return true;
            };
            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                backAction,
            );
            return () => backHandler.remove();
        }, [])
    )

    return (
        <HideKeyboard>
            <KeyboardAvoidingView style={styles.keyboardAvoidViewContainer}>
                <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
                <View style={styles.viewContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={styles.logoViewContainer}>
                            <Image source={require('../assets/images/logoImage.png')} style={styles.logoImg} />
                            <Text style={styles.logoTxt}>Shoppy</Text>
                        </View>
                        <View style={{ marginTop: 70 }}>
                            <Text style={styles.loginTxtStyle} >Login to your account</Text>
                            <Input placeholderText={'Email or Mobile Number*'} keyType={'email-address'} />
                            <Space mV={5} />
                            <Input placeholderText={'Password*'} keyType={'visible-password'} />
                            <View style={{ marginTop: 30 }}>
                                <Button handlePress={() => navigate('Main')} btnText={'Login'} />
                            </View>
                            <View style={styles.forgetAndNewContainer}>
                                <View style={styles.forgetAndNewSubContainerOne}>
                                    <Text style={styles.forgetAndNewTextOne} >Forget your password?</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.forgetAndNewTextTwo} >Reset Here</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.forgetAndNewSubContainerTwo}>
                                    <Text style={styles.forgetAndNewTextOne} >New to Shoppy?</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.forgetAndNewTextTwo} >Create Account</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Space mV={60} />
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </HideKeyboard >
    )
}

export default Login

const styles = StyleSheet.create({
    keyboardAvoidViewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white
    },
    viewContainer: {
        width: width * 0.9,
        alignSelf: "center",
        paddingHorizontal: 10
    },
    logoViewContainer: {
        paddingVertical: 5,
        paddingHorizontal: 25,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.lightskyblue,
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
        color: Colors.white,
        fontFamily: FontFamily.PoppinsBold,
        marginLeft: 15
    },
    loginTxtStyle: {
        fontFamily: FontFamily.PoppinsMedium,
        color: Colors.black,
        fontSize: 17,
        marginBottom: 10
    },
    forgetAndNewContainer: {
        alignItems: "center"
    },
    forgetAndNewSubContainerOne: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    forgetAndNewSubContainerTwo: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    forgetAndNewTextOne: {
        fontSize: 14
    },
    forgetAndNewTextTwo: {
        fontSize: 14,
        color: Colors.lightskyblue,
        marginLeft: 5
    }
})