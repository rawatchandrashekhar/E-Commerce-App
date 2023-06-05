import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, } from 'react-native'
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import { Colors } from '../../assets/colors/Color'

const ShareBtn = ({ selected, setSelected, handlePress }) => {

    return (
        <View style={{ position: "absolute", left: 5, top: 50, zIndex: 4 }} >
            <TouchableOpacity onPress={() => handlePress()} style={{
                width: 30, height: 30, borderRadius: 15, backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", elevation: 20, shadowColor: '#52006A'
            }} >
                <MCI name='share-variant-outline' size={21} style={{ color: "#000", right: 1 }} />
            </TouchableOpacity>
        </View>
    )
}

ShareBtn.defaultProps = {
    handlePress: () => { }
}

export default ShareBtn

const styles = StyleSheet.create({})