import React from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import HideKeyboard from '../components/SharedComponents/HideKeyboard'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import Button from '../components/SharedComponents/Button'
import Input from '../components/SharedComponents/Input'
import Space from '../components/SharedComponents/Space'
import { KeyboardListener } from '../components/SharedComponents/KeyboardListener'

const { width, height } = Dimensions.get('screen')

const Login = () => {

    // const [getImpMark, setImpMark] = React.useState(<Text>Email or Mobile Number{" "}<Text style={{ color: Colors.red }} >*</Text></Text>)

    // function getImpMark() {
    //     return (<Text>Email or Mobile Number{" "}<Text style={{ color: Colors.red }} >*</Text></Text>)
    // }

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
                                <Button btnText={'Login'} />
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                                    <Text style={{ fontSize: 14 }} >Forget your password?</Text>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 14, color: Colors.lightskyblue, marginLeft: 5 }} >Reset Here</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                    <Text style={{ fontSize: 14 }} >New to Shoppy?</Text>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 14, color: Colors.lightskyblue, marginLeft: 5 }} >Create Account</Text>
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
    }
})