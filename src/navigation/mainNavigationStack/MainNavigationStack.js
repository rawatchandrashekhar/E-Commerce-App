import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../../screens/Dashboard'
import Main from '../../screens/Main'
import dynamicLinks from "@react-native-firebase/dynamic-links"
import ProductSearching from '../../screens/ProductSearching'
import DrawerNavigation from '../drawer/DrawerNavigation'
import { navigationRef } from '../navigationService/NavigationService'
import Favourite from '../../screens/Favourite'
import Splash from '../../screens/Splash'
import ProductDescription from '../../screens/ProductDescription'
import Login from '../../screens/Login'
import Cart from '../../screens/Cart'
import SelectLanguage from '../../screens/SelectLanguage'

const Stack = createNativeStackNavigator()

const MainNavigationStack = () => {

    const HandleDeepLinking = () => {

        const [getData, setData] = React.useState({})
        // const navigation = useNavigation()
        const handleLink = async (link) => {
            const myPromise = new Promise((resolve, rejected) => {
                let objOne = {}
                let objTwo = {}
                let objThree = {}
                let objFour = {}
                let objFive = {}
                const regex = /\+/g;
                let productId = link.split('?')[1].split('&')[0].split('=')[1]
                objOne['id'] = productId
                let productTitle = link.split('?')[1].split('&')[1].split('=')[1].replace(regex, ' ')
                objTwo['title'] = productTitle
                let productPrice = link.split('?')[1].split('&')[2].split('=')[1]
                objFour['price'] = productPrice
                let productOldPrice = link.split('?')[1].split('&')[3].split('=')[1]
                objFour['oldPrice'] = productOldPrice
                let productDesc = link.split('?')[1].split('&')[4].split('=')[1].replace(regex, ' ')
                objThree['description'] = productDesc
                finalObj = { ...objOne, ...objTwo, ...objFour, ...objFive, ...objThree }
                resolve(finalObj);
            });
            myPromise
                .then((finalObj) => {
                    console.log('DYNAMIC LINK OBJ....', finalObj)
                    console.log("DYNAMIC LINK IN NAVIGATION STACK", link)
                }).catch((err) => {
                    console.log("EXCEPTION IN MAIN NAVIGATION STACK>>>>>>>", err);
                })

            // // console.log(productDesc)
            // let productId = link.url.split('=').pop()

            // navigation.navigate('ProductDescription')
        }

        React.useEffect(() => {
            const unsubscribe = dynamicLinks().onLink(handleLink)
            return () => unsubscribe
        }, [])

        return null
    }

    return (
        <NavigationContainer ref={navigationRef}>
            <HandleDeepLinking />
            <Stack.Navigator initialRouteName='Splash' >
                <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Main' component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name='ProductSearching' component={ProductSearching} options={{ headerShown: false }} />
                <Stack.Screen name='Favourite' component={Favourite} options={{ headerShown: false }} />
                <Stack.Screen name='ProductDescription' component={ProductDescription} options={{ headerShown: false }} />
                <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
                <Stack.Screen name='SelectLanguage' component={SelectLanguage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigationStack