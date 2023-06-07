import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, Image, Keyboard } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FA from "react-native-vector-icons/FontAwesome"
import Dashboard from '../../screens/Dashboard'
import ProductSearching from '../../screens/ProductSearching'
import { Colors } from '../../assets/colors/Color'
import { FontFamily } from '../../assets/fonts/FontFamily'
import Profile from '../../screens/Profile'
import strings from '../../localization/localizedStrings/LocalizedStrings'

const Tab = createBottomTabNavigator()

const { width, height } = Dimensions.get('screen')

const BottomTabNavigator = () => {

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { display: isKeyboardVisible ? 'none' : 'flex', height: 50, backgroundColor: Colors.lightskyblue, borderColor: Colors.lightskyblue },
                headerShown: false,
                keyboardHidesTabBar: true,
                labelStyle: {
                    fontSize: 11,
                    fontFamily: FontFamily.PoppinsMedium,
                    // bottom: 8
                },
                style: {
                    // backgroundColor: '#4343ef',
                    // borderRadius: 30,
                    // width: width * 0.9,
                    // alignSelf: 'center',
                    // height: 'auto',
                    // overflow: 'hidden',
                    // bottom: 44,
                    // fontFamily: FontFamily.PoppinsMedium
                },
                animationEnabled: true,
                inactiveTintColor: Colors.gray,
                activeTintColor: Colors.white,
                // showLabel: false,
                fontFamily: FontFamily.PoppinsMedium,
                // activeBackgroundColor: '#09096c',
                // activeTintColor: Colors.bluetheme,
            }}
            tabBarStyle={{ padding: 15 }}
        >
            <Tab.Screen name="Home" component={Dashboard} options={{
                tabBarLabelStyle: { paddingBottom: 6, fontSize: 12, fontFamily: FontFamily.PoppinsMedium },
                tabBarLabel: '',
                tabBarIcon: ({ focused, color }) => (
                    focused ? (
                        <View style={{ alignItems: "center" }} >
                            <Image
                                source={require('../../assets/images/bottom_tab/selected.png')}
                                style={{
                                    width: 22,
                                    // height: 22,
                                    backgroundColor: 'transparent',
                                    top: 13
                                }}
                                resizeMode='contain'
                            />
                            <Text style={{ color: Colors.white, fontFamily: FontFamily.PoppinsMedium }} >{strings.Home}</Text>
                        </View>
                    ) : (
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={require('../../assets/images/bottom_tab/unselected.png')}
                                style={{
                                    width: 22,
                                    // height: 22,
                                    backgroundColor: 'transparent',
                                    top: 13
                                }}
                                resizeMode='contain'
                            />
                            <Text style={{ color: '#00000038', fontFamily: FontFamily.PoppinsMedium }} >{strings.Home}</Text>
                        </View>
                    )
                )
            }} />
            <Tab.Screen name="Searching" component={ProductSearching} options={{
                tabBarLabelStyle: { paddingBottom: 6, fontSize: 12, fontFamily: FontFamily.PoppinsMedium },
                tabBarLabel: '',
                tabBarIcon: ({ focused, color }) => (
                    focused ? (
                        <View style={{ alignItems: "center", top: 13 }}>
                            <View>
                                <FA name='search' color={'#fff'} size={20} />
                            </View>
                            <Text style={{ color: Colors.white, fontFamily: FontFamily.PoppinsMedium }} >{strings.Search}</Text>
                        </View>
                    ) : (
                        <View style={{ alignItems: "center", top: 13 }} >
                            <FA name='search' color={'#00000038'} size={20} />
                            <Text style={{ color: '#00000038', fontFamily: FontFamily.PoppinsMedium }} >{strings.Search}</Text>
                        </View>
                    )
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabelStyle: { paddingBottom: 6, fontSize: 12, fontFamily: FontFamily.PoppinsMedium },
                tabBarLabel: '',
                tabBarIcon: ({ focused, color }) => (
                    focused ? (
                        <View style={{ alignItems: "center", top: 13 }}>
                            <FA name='user-circle' color={'#fff'} size={20} />
                            <Text style={{ color: Colors.white, fontFamily: FontFamily.PoppinsMedium }} >{strings.Profile}</Text>
                        </View>
                    ) : (
                        <View style={{ alignItems: "center", top: 13 }}>
                            <FA name='user-circle' color={'#00000038'} size={20} />
                            <Text style={{ color: '#00000038', fontFamily: FontFamily.PoppinsMedium }} >{strings.Profile}</Text>
                        </View>
                    )
                )
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator