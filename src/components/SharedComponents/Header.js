import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import MII from "react-native-vector-icons/MaterialIcons"
import II from "react-native-vector-icons/Ionicons"
import { Styles } from '../../assets/globalCSS/GlobalCSS'
import { Colors } from '../../assets/colors/Color'
import { navigate } from '../../navigation/navigationService/NavigationService'
import { useSelector } from 'react-redux'
import Logo from '../../helper/Logo'

const Header = ({ showFavIcon, leftIcon, rightIcon, title, handlePressLeftIcon, leftImgWidth, leftImgHeight, rightImgWidth, rightImgHeight, showCartIcon, showSearchIcon, showNotiIcon, showLogo }) => {

    let fetchCartLength = useSelector(state => state?.cart?.addToCartData)

    return (
        <View style={Styles.headerContainer} >
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
            <View style={{
                top: 50,
                justifyContent: "space-between",
                // alignItems: "center",
                flexDirection: "row",
                // backgroundColor: "red",
                // alignSelf: "center"
            }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={handlePressLeftIcon}>
                        <Image style={{ ...Styles.hamBurgerImage, width: leftImgWidth, height: leftImgHeight, top: 5 }} source={leftIcon} />
                    </TouchableOpacity>
                    {showLogo ?
                        <View style={{ marginLeft: 20, bottom: 2 }}>
                            <Logo imageWidth={15} imageHeight={15} logoFontSize={10} />
                        </View> : null}
                    <View style={{ bottom: 1 }} >
                        <Text style={{ ...Styles.headerTxt, marginLeft: 10 }}>{title}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    {showSearchIcon ?
                        <TouchableOpacity onPress={() => alert('Clicked on search icon!!!')} style={{ marginRight: 10 }}>
                            <MII name={'search'} size={25} color={Colors.whitesmoke} />
                        </TouchableOpacity> : null}
                    {showFavIcon ?
                        <TouchableOpacity onPress={() => navigate('Favourite')} style={{ marginRight: 10 }}>
                            <MII name={'favorite-outline'} size={22} color={Colors.whitesmoke} />
                        </TouchableOpacity> : null}
                    {showCartIcon ?
                        <TouchableOpacity onPress={() => navigate('Cart')}>
                            <Image source={rightIcon} style={{ ...Styles.cartStyle, width: rightImgWidth, height: rightImgHeight }} />
                            <View style={{ alignItems: "center", justifyContent: "center", position: "absolute", top: 0, left: 16, borderRadius: 50, height: 12, width: 12, backgroundColor: '#fff' }}>
                                <Text style={{ fontSize: 8, color: "#000", fontWeight: "bold" }}>{fetchCartLength?.length}</Text>
                            </View>
                        </TouchableOpacity> : null}
                    {showNotiIcon ?
                        <TouchableOpacity onPress={() => alert('clicked on notification well!!!')} style={{ marginRight: 10 }}>
                            <II name={'notifications-outline'} size={22} color={Colors.whitesmoke} />
                        </TouchableOpacity> : null}
                </View>
            </View>
        </View>
    )
}

Header.defaultProps = {
    title: '',
    leftIcon: require('../../assets/images/default.png'),
    rightIcon: require('../../assets/images/default.png'),
    handlePressLeftIcon: () => { },
    // handlePressRightIcon: () => { },
    leftImgWidth: 25,
    leftImgHeight: 25,
    rightImgHeight: 25,
    rightImgWidth: 25,
    showFavIcon: true,
    showCartIcon: true,
    showSearchIcon: true,
    showNotiIcon: true,
    showLogo: true
}

export default Header