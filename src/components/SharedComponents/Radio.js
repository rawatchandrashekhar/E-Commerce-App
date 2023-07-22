import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../assets/colors/Color'

const Radio = ({ isSelected }) => {

    return (
        <View style={{ borderWidth: 2, borderRadius: 12, width: 18, height: 18, margin: 5, borderColor: Colors.lightskyblue }}>
            {isSelected && <View style={{
                width: 10,
                height: 10,
                backgroundColor: Colors.lightskyblue,
                borderRadius: 10,
                alignSelf: "center",
                top: 2
            }} />}
        </View>
    )
}

export default Radio

const styles = StyleSheet.create({})