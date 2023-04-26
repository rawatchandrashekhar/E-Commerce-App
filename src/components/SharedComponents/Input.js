import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors/Color'

const Input = ({ placeholderText, keyType }) => {

    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <TextInput
            placeholder={placeholderText}
            placeholderTextColor={isFocused ? Colors.lightskyblue : Colors.grey}
            onFocus={() => {
                setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
            keyboardType={keyType}
            style={{ borderBottomWidth: 1, borderColor: isFocused ? Colors.lightskyblue : Colors.grey }}
        />
    )
}

export default Input

Input.defaultProps = {
    placeholderText: 'Add Placeholder Text',
    keyType: 'default'
}

const styles = StyleSheet.create({})