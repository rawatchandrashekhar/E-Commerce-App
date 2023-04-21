import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
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

const { width, height } = Dimensions.get('screen')

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
                    </View>
                </ScrollView>
                <View style={{ position: "absolute", bottom: 0, backgroundColor: Colors.borderColor, width: '100%' }}>
                    <Text style={{ textAlign: "center", fontSize: 12, padding: 10 }}>APP V. 1.0</Text>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

export default DrawerContent