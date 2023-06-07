import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../assets/colors/Color'
import { FontFamily } from '../../assets/fonts/FontFamily'

const Button = ({ btnText, btnWidth, handlePress, txtColor, btnBack, txtSize }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => handlePress()} style={{ borderRadius: 5, marginTop: 5, marginBottom: 5, width: btnWidth, backgroundColor: btnBack, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: txtColor, padding: 6, fontFamily: FontFamily.PoppinsMedium, fontSize: txtSize }} >{btnText}</Text>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    btnText: 'BUTTON',
    btnWidth: '100%',
    handlePress: () => { },
    txtColor: '#fff',
    btnBack: Colors.lightskyblue,
    txtSize: 14
}

export default Button