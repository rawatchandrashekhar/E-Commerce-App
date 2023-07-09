import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'

const Logo = ({ coloredLogo, coloredBorderLine, coloredLogoText, imageWidth, imageHeight, logoFontSize }) => {
    return (
        <View style={styles.logoViewContainer}>
            <Image source={coloredLogo ? require('../assets/images/splash_logo.png') : require('../assets/images/logoImage.png')} style={{
                width: imageWidth,
                height: imageHeight,
                alignSelf: "flex-start"
            }} />
            <View style={{ borderWidth: 1, borderColor: coloredBorderLine ? Colors.lightskyblue : "#fff", borderRadius: 10 }} />
            <Text style={{
                fontSize: logoFontSize,
                color: coloredLogoText ? Colors.lightskyblue : Colors.white,
                fontFamily: FontFamily.PoppinsBold,
                marginLeft: 15
            }}>Shoppy</Text>
        </View>
    )
}

export default Logo

Logo.defaultProps = {
    coloredLogo: false,
    coloredBorderLine: false,
    coloredLogoText: false,
    imageWidth: 50,
    imageHeight: 50,
    logoFontSize: 30
}

const styles = StyleSheet.create({
    logoViewContainer: {
        // paddingVertical: 5,
        // paddingHorizontal: 25,
        flexDirection: "column",
        // alignItems: "center",
        // backgroundColor: Colors.lightskyblue,
        // borderRadius: 10,
        // width: 235,
        alignSelf: "center"
    },
    logoImg: {
        width: 50,
        height: 50,
        alignSelf: "flex-start"
    },
    logoTxt: {
        fontSize: 30,
        color: Colors.white,
        fontFamily: FontFamily.PoppinsBold,
        marginLeft: 15
    },
})