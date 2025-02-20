import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, virtu } from 'react-native'
import Header from '../components/SharedComponents/Header'
import { Styles } from '../assets/globalCSS/GlobalCSS'
import { Colors } from '../assets/colors/Color'
import { FontFamily } from '../assets/fonts/FontFamily'
import Categories from '../components/dashboard/Categories'
import TopProducts from '../components/dashboard/TopProducts'
import { useDispatch } from 'react-redux'
import { productData } from '../storage/redux/slices/AllProductsSlice'

const { width, height } = Dimensions.get('screen')

const data = [
    { id: 1, title: 'MEN', image: require('../assets/images/Dashboard/man.png') },
    { id: 2, title: 'WOMEN', image: require('../assets/images/Dashboard/woman.png') },
    { id: 3, title: 'KIDS', image: require('../assets/images/Dashboard/kids.png') },
    { id: 4, title: 'BEAUTY', image: require('../assets/images/Dashboard/beauty.png') }
]

const productsData = [
    { id: 1, price: 699, oldPrice: 999, title: 'Men Full Sleeve Printed Sweatshirt', image: require('../assets/images/top_products/sweator.png'), description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus' },
    { id: 2, price: 999, oldPrice: 1499, title: 'Men Full Sleeve Graphic Print Sweatshirt', image: require('../assets/images/top_products/graphic_sweator.png'), description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus' },
    { id: 3, price: 33999, oldPrice: 40999, title: 'Apple iPad (9th Gen) 64 GB ROM 10.2 inch with Wi-Fi only (Space Grey)', image: require('../assets/images/top_products/apple_tab.png'), description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus' },
    { id: 4, price: 869, oldPrice: 1567, title: 'VEGA Crux OF Motorbike Helmet (Black)', image: require('../assets/images/top_products/helmet.png'), description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus' }
]

const Dashboard = ({ navigation }) => {

    const dispatch = useDispatch()

    function addProducts() {
        dispatch(productData(productsData))
    }

    React.useEffect(() => {
        addProducts()
    }, [])

    return (
        <View style={{ height: height, flex: 1 }}>
            <Header handlePressLeftIcon={() => navigation.openDrawer()} handlePressRightIcon={() => alert('CART')} leftIcon={require('../assets/images/hamburgermenu.png')} rightIcon={require('../assets/images/cartTwo.png')} leftImgWidth={28} leftImgHeight={18} rightImgWidth={25} rightImgHeight={25} />
            <View style={{ marginTop: 10 }}>
                <Categories data={data} />
            </View>
            <View style={{ alignItems: "center" }} >
                <Text style={{ color: Colors.black, borderBottomWidth: 1, fontFamily: FontFamily.PoppinsBold, fontSize: 20 }} >Top Products</Text>
            </View>
            <TopProducts productsData={productsData} />
        </View>
    )
}

export default Dashboard