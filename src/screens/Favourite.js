import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Animated, Image } from 'react-native'
import Header from '../components/SharedComponents/Header'
import { useSelector } from 'react-redux'
import FavFlatlist from '../components/Flatlists/favFlatlist/FavFlatlist'
import Button from '../components/SharedComponents/Button'
import Space from '../components/SharedComponents/Space'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'

const { width, height } = Dimensions.get("screen")

const Favourite = ({ navigation }) => {

    let fetchFavData = useSelector(state => state?.favourite?.addToFavouriteData)

    const sliderAnimation = new Animated.Value(0)

    const [change, setChange] = React.useState(0)

    const sliderAnimationFunc = () => {
        Animated.spring(sliderAnimation, {
            toValue: width * 0.45,
            useNativeDriver: true,
        }).start();
    }

    const backSliderAnimationFunc = () => {
        Animated.spring(sliderAnimation, {
            toValue: -width * 0.45,
            useNativeDriver: true,
        }).start();
    }

    return (
        <View style={{ flex: 1 }}>
            <Header handlePressLeftIcon={() => navigation.goBack()} title={'Favourite'} leftImgWidth={20} leftImgHeight={13} rightImgWidth={25} rightImgHeight={25} leftIcon={require('../assets/images/back.png')} rightIcon={require('../assets/images/cartTwo.png')} showFavIcon={false} />
            {fetchFavData.length == 0 ? <View style={{ flex: 1, backgroundColor: "#fff" }} >
                <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <Image source={require('../assets/gif/emptyBag.gif')} style={{ width: width * 0.9 }} resizeMode='contain' />
                    <Text style={{ fontWeight: "700", color: Colors.black, fontFamily: FontFamily.PoppinsMedium, fontSize: 16 }} >Your Fav. List is Empty!</Text>
                    <Space mV={10} />
                    <Button handlePress={() => navigation.navigate('Home')} btnWidth={180} btnText={'CONTINUE SHOPPING'} />
                </View>
            </View> :
                <FavFlatlist data={fetchFavData} />}

            {/* <View style={{ width: width * 0.9, alignSelf: "center", flexDirection: "row", height: 50, backgroundColor: "#fff", position: "relative" }} > */}
            {/* <TouchableOpacity onPress={() => sliderAnimationFunc()}>
                    <Animated.View style={{ transform: [{ translateX: sliderAnimation }], width: 50, height: 20, backgroundColor: "red" }} />
                </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={() => { setChange(0); backSliderAnimationFunc() }} style={{ position: "absolute" }} >
                    <Animated.View>

                    </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setChange(0); backSliderAnimationFunc() }}  >
                    <Animated.View style={{ transform: [{ translateX: sliderAnimation }], width: width * 0.45, alignItems: "center", justifyContent: "center", backgroundColor: change == 0 ? 'green' : '#fff' }}>
                        <Text style={{ color: change == 0 ? "#fff" : '#000' }}>First</Text>
                    </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { sliderAnimationFunc() }} >
                    <Animated.View style={{ transform: [{ translateX: sliderAnimation }], width: width * 0.45, alignItems: "center", justifyContent: "center", backgroundColor: change == 1 ? 'green' : '#fff' }}>
                        <Text style={{ color: change == 1 ? "#fff" : '#000' }}>Second</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View> */}
        </View >
    )
}

export default Favourite