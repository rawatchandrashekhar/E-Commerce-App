import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { useIsFocused, useRoute } from '@react-navigation/native'
import Header from '../components/SharedComponents/Header'
import { Colors } from '../assets/colors/Color'
import Space from '../components/SharedComponents/Space'
import { FontFamily } from '../assets/fonts/FontFamily'
import AddToCartButton from '../components/SharedComponents/AddToCartButton'
import { addCartData, removeCartData } from '../storage/redux/slices/AddToCartSlice'
import { useDispatch, useSelector } from 'react-redux'

const { width, height } = Dimensions.get('screen')

const ProductDescription = ({ navigation }) => {

    let { route, params } = useRoute()
    let focus = useIsFocused()
    let dispatch = useDispatch()
    let fetchProducts = useSelector(state => state?.cart?.addToCartData)

    const [getValue, setValue] = React.useState(0)

    // console.log("ROUTE OF PRODUCT DESCRIPTION SCREEN", params);

    const handleAddToCart = (value) => {
        if (value > 0)
            dispatch(addCartData({ ...params, qtyValue: value }))
        else
            dispatch(removeCartData(params))
    }

    React.useEffect(() => {
        fetchProducts.filter((item, index) => {
            if (params.id === item.id)
                setValue(item.qtyValue)
        })
    }, [focus])

    return (
        <View style={{ flex: 1 }} >
            <Header handlePressLeftIcon={() => navigation.goBack()} title={'Description'} leftImgWidth={20} leftImgHeight={13} rightImgWidth={25} rightImgHeight={25} leftIcon={require('../assets/images/back.png')} rightIcon={require('../assets/images/cartTwo.png')} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15, padding: 10 }}>
                <Image source={params?.image} style={{ width: 300, height: 300, alignSelf: "center" }} resizeMode='contain' />
                <Space mV={10} />
                <View style={{ borderBottomWidth: 2, borderRadius: 10, borderColor: Colors.lightskyblue, width: width * 0.95, alignSelf: "center" }} />
                <Space mV={5} />
                <Text style={{ fontFamily: FontFamily.PoppinsMedium, fontSize: 15, color: Colors.black }} >{params?.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 13, color: Colors.black, marginRight: 2 }}>&#8377;{' '}{params?.price}</Text>
                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 10 }}>{params?.oldPrice}</Text>
                </View>
                <Space mV={5} />
                <View style={{ flexDirection: "column" }} >
                    <Text style={{ fontFamily: FontFamily.PoppinsMedium, color: Colors.black }} >Description{" "}:</Text>
                    <Text>{params?.description}</Text>
                </View>
                <Space mV={5} />
                <AddToCartButton setValue={setValue} getValue={getValue} handleValue={(value) => handleAddToCart(value)} />
                <Space mV={10} />
            </ScrollView>
            {/* <View style={{ position: "absolute", bottom: 5, width: width * 0.9, alignSelf: "center" }}>
                <AddToCartButton />
            </View> */}
        </View>
    )
}

export default ProductDescription

const styles = StyleSheet.create({})