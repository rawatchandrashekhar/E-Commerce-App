import React, { useState } from 'react'
import { View, Dimensions, TouchableOpacity, Keyboard, TextInput } from 'react-native'
import FA from "react-native-vector-icons/FontAwesome"
import II from "react-native-vector-icons/Ionicons"
import { Colors } from '../../assets/colors/Color'

const { width, height } = Dimensions.get('screen')

const Search = ({ searchTxt, setSearchTxt, handleChangeTxt }) => {

    const handleCancel = () => {
        setSearchTxt("")
        handleChangeTxt("")
        Keyboard.dismiss()
    }

    const handleChange = (txt) => {
        setSearchTxt(txt)
        handleChangeTxt(txt)
    }

    return (
        <View style={{ backgroundColor: Colors.white, width: width * 0.9, height: 45, alignSelf: "center", marginTop: 10, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
            <FA name='search' size={16} style={{ paddingLeft: 10, paddingRight: 5 }} />
            <TextInput
                value={searchTxt}
                placeholder='Search Products Here...'
                style={{ width: width * 0.74, paddingRight: 10 }}
                onChangeText={(txt) => handleChange(txt)}
            />
            {searchTxt.length > 0 && <TouchableOpacity onPress={() => handleCancel()} >
                <II name='md-close-circle-outline' size={19} style={{}} />
            </TouchableOpacity>}
        </View>
    )
}

export default Search