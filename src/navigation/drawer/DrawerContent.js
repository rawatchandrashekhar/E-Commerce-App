import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, Animated, LayoutAnimation } from 'react-native'
import MI from "react-native-vector-icons/MaterialCommunityIcons"
import II from "react-native-vector-icons/Ionicons"
import MII from "react-native-vector-icons/MaterialIcons"
import FA from "react-native-vector-icons/FontAwesome"
import { DrawerActions } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { Colors } from '../../assets/colors/Color'
import { FontFamily } from '../../assets/fonts/FontFamily'
import { navigate } from '../navigationService/NavigationService'
import { Styles } from '../../assets/globalCSS/GlobalCSS'
import { ToggleAnimation } from '../../components/animations/ToggleAnimation'

const { width, height } = Dimensions.get('screen')

const data = [
    { title: "Dummy Title One", options: ['Dummy Option One', 'Dummy Option Two', 'Dummy Option Three'] }
]

const AccordianItem = ({ item }) => {

    const [show, setShow] = React.useState(false)
    const animationController = React.useRef(new Animated.Value(0)).current

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: show ? 0 : 1,
            useNativeDriver: true
        }
        Animated.timing(animationController, config).start()
        LayoutAnimation.configureNext(ToggleAnimation)
        setShow(!show)
    }

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    })

    return <View>
        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => toggleListItem()} >
            <Text>{item.title}</Text>
            <Animated.View style={{ transform: [{ rotateZ: arrowTransform }], marginLeft: "auto", }}>
                <Image source={require('../../assets/images/profile/moreThan.png')} style={{ width: 20, height: 20 }} />
            </Animated.View>
        </TouchableOpacity>
        {show && <View style={{ overflow: "hidden", backgroundColor: "#f2f2f2f2" }}>
            {item.options.map((itm, ind) => {
                return <View key={ind} ><Text>{itm}</Text></View>
            })}
        </View>}
        {/* <Text>{item.options}</Text> */}
    </View>
}

const DrawerContent = (props) => {

    return (
        <DrawerContentScrollView
            showsVerticalScrollIndicator={false}
            style={Styles.drawerContentView}
            {...props}>
            <View style={{ position: "relative", height: height - 80 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                    <View>
                        <View style={{ borderWidth: 2, borderRadius: 50, borderColor: Colors.lightskyblue }}>
                            <Image source={require('../../assets/images/dummyuser.png')} style={{ width: 50, height: 50 }} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: Colors.black, fontSize: 14, fontFamily: FontFamily.PoppinsMedium }} >Chandra Shekhar Rawat</Text>
                        <Text style={{ color: Colors.black, fontSize: 12, fontFamily: FontFamily.PoppinsMedium, bottom: 2 }} >+919009574613</Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 2, borderColor: Colors.lightskyblue, marginVertical: 15, marginHorizontal: 10 }} />
                <ScrollView>
                    <View style={{ margin: 10 }}>
                        <TouchableOpacity onPress={() => { navigate('Dashboard'); props.navigation.dispatch(DrawerActions.closeDrawer()) }} style={{ backgroundColor: Colors.borderColor, padding: 10, marginBottom: 10, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                            <MI name='home' size={22} color={Colors.lightskyblue} />
                            <Text style={{ marginLeft: 20, fontSize: 14, color: "#000" }}>Home</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => { navigate('ProductSearching'); props.navigation.dispatch(DrawerActions.closeDrawer()) }} style={{ backgroundColor: Colors.borderColor, padding: 10, marginBottom: 10, flexDirection: "row", alignItems: "center" }} >
                            <II name='search' size={22} color={Colors.lightskyblue} />
                            <Text style={{ marginLeft: 20, fontSize: 14, color: "#000" }}>Search</Text>
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity style={{ backgroundColor: Colors.borderColor, padding: 10, marginBottom: 10, flexDirection: "row", alignItems: "center" }} >
                            <MII name='favorite' size={22} color={Colors.lightskyblue} />
                            <Text style={{ marginLeft: 20, fontSize: 14, color: "#000" }}>Favourite</Text>
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity style={{ backgroundColor: Colors.borderColor, padding: 10, marginBottom: 10, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                            <FA name='user-circle' size={22} color={Colors.lightskyblue} />
                            <Text style={{ marginLeft: 20, fontSize: 14, color: "#000" }}>Profile</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={{ backgroundColor: Colors.borderColor, padding: 10, marginBottom: 10, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                            <MI name='logout' size={22} color={Colors.lightskyblue} />
                            <Text style={{ marginLeft: 20, fontSize: 14, color: "#000" }}>Logout</Text>
                        </TouchableOpacity>
                        {/* {data.map((item, index) => {
                            return <AccordianItem item={item} key={index} />
                        })} */}
                    </View>
                </ScrollView>
                {/* <FlatList
                    data={data}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item, index) => index}
                /> */}
                <View style={{ position: "absolute", bottom: 0, backgroundColor: Colors.borderColor, width: '100%' }}>
                    <Text style={{ textAlign: "center", fontSize: 12, padding: 10 }}>APP V. 1.0</Text>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

export default DrawerContent