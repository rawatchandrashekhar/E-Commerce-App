import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, Animated, LayoutAnimation } from 'react-native'
import MI from "react-native-vector-icons/MaterialCommunityIcons"
import II from "react-native-vector-icons/Ionicons"
import EI from "react-native-vector-icons/EvilIcons"
import AD from "react-native-vector-icons/AntDesign"
import { DrawerActions, useIsFocused } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { Colors } from '../../assets/colors/Color'
import { FontFamily } from '../../assets/fonts/FontFamily'
import { navigate, navigateToClearStack } from '../navigationService/NavigationService'
import { Styles } from '../../assets/globalCSS/GlobalCSS'
import { ToggleAnimation } from '../../components/animations/ToggleAnimation'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AlertSuccess } from '../../components/SharedComponents/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../../storage/redux/slices/AddUserDetailData';
import Logo from '../../helper/Logo';

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

    let fetchUserDataRedux = useSelector(state => state?.user?.addUserDetailData)
    // alert(JSON.stringify(fetchUserDataRedux))

    let dispatch = useDispatch()

    const [getUserData, setUserData] = React.useState('')

    const isFocus = useIsFocused()

    const handleLogout = async () => {
        AlertSuccess('Successfully Logout!')
        // navigateToClearStack('Main')
        dispatch(addUserData())
        // navigateToClearStack('Login')
        await AsyncStorage.removeItem('USER_DETAIL').then(() => {
            navigate('Main')
            // navigate('Login')
        })
        // AsyncStorage.clear()
    }

    const handleLogin = () => {
        navigate('Login')
    }

    const fetchUserData = async () => {
        let getUserDataAsync = await getObjectData('USER_DETAIL')
        setUserData(getUserDataAsync)
    }

    React.useEffect(() => {
        fetchUserData()
    }, [])

    // React.useEffect(() => {
    //     const unsubscribe = props.navigation.addListener('focus', () => {
    //         fetchUserData()
    //     });

    //     return unsubscribe;
    // }, [props.navigation]);

    const drawerNavigationFun = (screen) => {
        props.navigation.dispatch(DrawerActions.closeDrawer());
        props.navigation.navigate(screen)
    }

    return (
        <DrawerContentScrollView
            showsVerticalScrollIndicator={false}
            style={Styles.drawerContentView}
            {...props}>
            <View style={{ position: "relative", height: height - 80 }}>
                <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "space-between", width: width * 0.9 }}>
                    {/* <View style={{ paddingLeft: 20, paddingRight: 10 }}>
                        <View style={{ borderWidth: 2, borderRadius: 50, borderColor: Colors.lightskyblue }}>
                            <Image source={require('../../assets/images/dummyuser.png')} style={{ width: 50, height: 50 }} />
                        </View>
                    </View> */}
                    <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} style={{ width: width * 0.3 }} >
                        <II name='close' size={30} style={{}} />
                    </TouchableOpacity>
                    <View style={{
                        width: width * 0.3
                    }} >
                        < Logo imageWidth={20} imageHeight={20} logoFontSize={15} coloredLogo={true} coloredBorderLine={true} coloredLogoText={true} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", width: width * 0.3, justifyContent: "flex-end" }} >
                        <TouchableOpacity onPress={() => drawerNavigationFun('ProductSearching')}>
                            <EI name='search' size={30} style={{ color: Colors.black, paddingRight: 5 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => drawerNavigationFun('Main')}>
                            <AD name="home" size={25} style={{ color: Colors.black }} />
                        </TouchableOpacity>
                    </View>
                    {/* <Text style={{ color: Colors.black, fontSize: 12, fontFamily: FontFamily.PoppinsMedium, bottom: 2 }} >+919009574613</Text> */}
                </View>
                {/* <View style={{ borderBottomWidth: 2, borderColor: Colors.lightskyblue, marginVertical: 15, marginHorizontal: 10 }} /> */}
                <ScrollView>
                    <View style={{ marginHorizontal: 10, marginTop: 30 }}>
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
                        <TouchableOpacity onPress={() => {
                            if (fetchUserDataRedux == undefined || fetchUserDataRedux == "" || fetchUserDataRedux == {} || fetchUserDataRedux == null) {
                                props.navigation.dispatch(DrawerActions.closeDrawer())
                                handleLogin();
                            }
                            else {
                                props.navigation.dispatch(DrawerActions.closeDrawer())
                                handleLogout();
                            }
                        }} style={{ backgroundColor: Colors.borderColor, padding: 10, marginBottom: 10, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                            <MI name='logout' size={22} color={Colors.lightskyblue} />
                            <Text style={{ marginLeft: 20, fontSize: 14, color: "#000" }}>{fetchUserDataRedux == undefined || fetchUserDataRedux == "" || fetchUserDataRedux == {} || fetchUserDataRedux == null ? 'Login' : 'Logout'}</Text>
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
        </DrawerContentScrollView >
    )
}

export default DrawerContent