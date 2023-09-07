import React, { memo } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FE from "react-native-vector-icons/Feather"
import { AlertDanger } from './Alert'
import Button from './Button'
import { Colors } from '../../assets/colors/Color'

const AddToCartButton = ({ handleValue, getValue, setValue }) => {

    console.log("GET VALUEEEEEEEEEE", getValue);

    const handleDecrement = () => {
        if (getValue > 0) {
            setValue(getValue - 1)
            handleValue(getValue - 1)
        }
    }

    const handleIncrement = () => {
        if (getValue < 10) {
            setValue(getValue + 1)
            handleValue(getValue + 1)
        } else {
            AlertDanger('Oops! Your Limit Exceed...')
        }
    }

    return (
        <>
            {getValue === 0 ? <Button marginBottom={0} handlePress={() => handleIncrement()} btnText={'ADD TO CART'} /> :
                <View style={styles.container} >
                    <TouchableOpacity onPress={() => handleDecrement()} style={styles.btnStyle}>
                        <FE name='minus' size={16} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.txtStyle}>
                        {getValue}
                    </Text>
                    <TouchableOpacity onPress={() => handleIncrement()} style={styles.btnStyle}>
                        <FE name='plus' size={16} style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>}
        </>
    )
}

export default memo(AddToCartButton)

AddToCartButton.defaultProps = {
    handleValue: () => { }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
        top: 2
    },
    btnStyle: {
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: Colors.lightskyblue,
        justifyContent: "center",
        alignItems: "center"
    },
    txtStyle: {
        fontSize: 15,
        color: Colors.lightskyblue,
        fontWeight: "bold",
        marginHorizontal: 10
    },
    iconStyle: {
        color: "#fff"
    }
})