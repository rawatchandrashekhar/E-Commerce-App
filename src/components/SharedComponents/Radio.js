import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../assets/colors/Color'

const Radio = () => {

    const [getRadioTrue, setRadioTrue] = React.useState(false)

    return (
        <TouchableOpacity onPress={() => setRadioTrue(!getRadioTrue)} style={{ borderWidth: 2, borderRadius: 12, width: 18, height: 18, margin: 5, borderColor: Colors.lightskyblue }}>
            {getRadioTrue && <View style={{
                width: 10,
                height: 10,
                backgroundColor: Colors.lightskyblue,
                borderRadius: 10,
                alignSelf: "center",
                top: 2
            }} />}
        </TouchableOpacity>
    )
}

export default Radio

const styles = StyleSheet.create({})