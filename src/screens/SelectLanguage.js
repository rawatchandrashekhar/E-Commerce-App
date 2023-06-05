import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import { storeStringData } from '../storage/asyncStorage/AsyncDataStorage'
import strings from '../localization/localizedStrings/LocalizedStrings'

const { width, height } = Dimensions.get("screen")

const data = [
    { label: "English", value: "English" },
    { label: "हिन्दी", value: "Hindi" }
]

const SelectLanguage = (props) => {

    const handleSelectLanguage = (label) => {
        storeStringData('Language', label)
        strings.setLanguage(label)
        props.navigation.replace('Login')
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.lightskyblue }} >
            <Text style={{ textAlign: "center", color: Colors.white, fontFamily: FontFamily.PoppinsMedium, fontSize: 25, marginTop: 50 }} >Select Language</Text>
            <View style={{ borderBottomWidth: 3, borderRadius: 15, borderColor: Colors.white, width: width * 0.7, alignSelf: "center" }} />
            <View style={{ marginTop: 40 }} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    {data.map((item, index) => {
                        return <TouchableOpacity onPress={() => handleSelectLanguage(item.value)} key={index} style={{ alignItems: "center", backgroundColor: Colors.white, marginVertical: 10, marginHorizontal: 30, padding: 15, borderRadius: 30 }} >
                            <Text style={{ fontWeight: "700", color: Colors.black, fontSize: 20 }}>{item.label}</Text>
                        </TouchableOpacity>
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default SelectLanguage

const styles = StyleSheet.create({})