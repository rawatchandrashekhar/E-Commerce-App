import React from 'react'
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../components/SharedComponents/Header'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import RBSheet from 'react-native-raw-bottom-sheet'
import Radio from '../components/SharedComponents/Radio'
import BottomSheet from '../components/SharedComponents/BottomSheet'

const { width, height } = Dimensions.get('screen')

const profileData = [
    { image: require('../assets/images/profile/user.png'), title: 'Edit Profile' },
    { image: require('../assets/images/profile/location.png'), title: 'Shopping Address' },
    { image: require('../assets/images/profile/orderHistory.png'), title: 'Order History' },
    { image: require('../assets/images/profile/notification.png'), title: 'Notification' },
    { image: require('../assets/images/profile/cards.png'), title: 'Cards' },
    { image: require('../assets/images/profile/globe.png'), title: 'App language' }
]

const languageData = [
    { label: "English", value: "English", tempLabel: "(device's language)" },
    { label: "हिन्दी", value: "Hindi", tempLabel: "Hindi" }
]

const LanguageSelector = ({ item }) => {
    return <View style={{ flexDirection: "row", alignItems: "center", marginTop: 14 }}>
        <Radio />
        <View style={{ marginLeft: 15 }} >
            <Text style={{ fontWeight: "bold", color: Colors.black, fontSize: 18, fontFamily: FontFamily.PoppinsMedium }} >{item.label}</Text>
            <Text style={{ color: Colors.black, fontSize: 12, fontFamily: FontFamily.PoppinsMedium }} >{item.tempLabel}</Text>
        </View>
    </View>
}

const Profile = ({ navigation }) => {

    const refRBSheet = React.useRef();

    const handleSelect = (title) => {
        if (title === 'App language') {
            refRBSheet.current.open()
        }
    }

    return (
        <>
            <Header handlePressLeftIcon={() => navigation.goBack()} title={'Profile'} leftImgWidth={20} leftImgHeight={13} rightImgWidth={25} rightImgHeight={25} leftIcon={require('../assets/images/back.png')} rightIcon={require('../assets/images/cartTwo.png')} />
            <ScrollView>
                <View style={{ position: "relative", width: width, height: 120, backgroundColor: Colors.lightskyblue }} >
                    <View style={{ position: "absolute", top: -10, zIndex: 1, alignSelf: "center" }}>
                        <Image source={require('../assets/images/dummyuser.png')} style={{ width: 140, height: 140 }} />
                    </View>
                    <View style={{ position: "absolute", top: 60, alignSelf: "center", width: width * 0.75, backgroundColor: Colors.white, height: 140, borderRadius: 10 }} >
                        <View style={{ top: 70, alignItems: "center" }}>
                            <Text style={{ fontFamily: FontFamily.PoppinsMedium, color: Colors.black, fontSize: 15 }} >Chandra Shekhar Rawat</Text>
                            <Text style={{ fontSize: 13, top: -3 }} >+919009574613</Text>
                        </View>
                    </View>
                </View>
                <View style={{ top: 100, marginBottom: 120 }}>
                    <View style={{ borderRadius: 10, alignSelf: "center", backgroundColor: Colors.white, width: width * 0.9, padding: 10 }} >
                        {profileData.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => handleSelect(item.title)} key={index} style={{ flexDirection: "row", alignItems: "center", margin: 10, padding: 10 }} >
                                    <Image source={item.image} resizeMode='contain' style={{ width: 20, height: 20 }} />
                                    <Text style={{ marginLeft: 10, fontSize: 13, fontFamily: FontFamily.PoppinsMedium, color: Colors.black }} >{item.title}</Text>
                                    <Image source={require('../assets/images/profile/moreThan.png')} resizeMode='contain' style={{ width: 15, height: 15, marginLeft: "auto" }} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
                {/* <Image source={require('../assets/gif/testing.gif')} /> */}
            </ScrollView>
            <BottomSheet
                content={languageData?.map((item, index) => {
                    return <LanguageSelector key={index} item={item} />
                })}
                refRBSheet={refRBSheet} />
        </>
    )
}

export default Profile