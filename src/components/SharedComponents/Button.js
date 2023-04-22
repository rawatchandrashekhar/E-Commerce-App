import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../assets/colors/Color'
import { FontFamily } from '../../assets/fonts/FontFamily'

const Button = ({ btnText, btnWidth, handlePress }) => {
    return (
        <TouchableOpacity onPress={() => handlePress()} style={{ borderRadius: 5, marginTop: 5, marginBottom: 5, width: btnWidth, backgroundColor: Colors.lightskyblue, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#fff", padding: 6, fontFamily: FontFamily.PoppinsMedium }} >{btnText}</Text>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    btnText: 'BUTTON',
    btnWidth: '100%',
    handlePress: () => { }
}

export default Button