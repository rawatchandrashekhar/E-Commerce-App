import React, { useMemo } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, virtu, ScrollView, BackHandler } from 'react-native'
import Header from '../components/SharedComponents/Header'
import { Styles } from '../assets/globalCSS/GlobalCSS'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import Categories from '../components/dashboard/Categories'
import TopProducts from '../components/dashboard/TopProducts'
import { useDispatch } from 'react-redux'
import { productData } from '../storage/redux/slices/AllProductsSlice'
import CarouselComponent from '../components/SharedComponents/CarouselComponent'
import strings from '../localization/localizedStrings/LocalizedStrings'
import { getObjectData } from '../storage/asyncStorage/AsyncDataStorage'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { data, imagesData, productsData } from '../data/Data'
// import CustomDrawer from '../navigation/customDrawer/CustomDrawer'

const { width, height } = Dimensions.get('screen')

const Dashboard = ({ navigation }) => {

    const dispatch = useDispatch()
    const isFocus = useIsFocused()

    function addProducts() {
        dispatch(productData(productsData))
    }

    const fetchUserData = async () => {
        let result = await getObjectData('USER_DETAIL')
        // alert(JSON.stringify(result))
    }

    React.useEffect(() => {
        addProducts()
        // fetchUserData()
        // console.log('addProducts()', addProducts());
    }, [isFocus])

    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                BackHandler.exitApp()
                return true;
            };
            const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                backAction,
            );
            return () => backHandler.remove();
        }, [])
    )

    const categoriesComponent = useMemo(() => <Categories data={data} />, [data]);
    const topProductsComponent = useMemo(() => <TopProducts productsData={productsData} horizontalCol={1} showHorizontal={true} />, [productsData]);
    const carouselComponent = useMemo(() => <CarouselComponent data={imagesData} />, [imagesData])

    return (
        <View style={{ flex: 1 }}>
            <Header handlePressLeftIcon={() => navigation.openDrawer()} leftIcon={require('../assets/images/hamburgermenu.png')} rightIcon={require('../assets/images/cartTwo.png')} leftImgWidth={28} leftImgHeight={18} rightImgWidth={25} rightImgHeight={25} />
            {/* <CustomDrawer /> */}
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ marginTop: 10 }}>
                        {categoriesComponent}
                    </View>
                    {carouselComponent}
                    <View style={{ top: -15 }} >
                        <View style={{ alignItems: "flex-start",marginLeft:20 }} >
                            <Text style={{ color: Colors.black, borderBottomWidth: 1, fontFamily: FontFamily.PoppinsBold, fontSize: 20 }} >{strings.TopProducts}</Text>
                        </View>
                        {topProductsComponent}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard