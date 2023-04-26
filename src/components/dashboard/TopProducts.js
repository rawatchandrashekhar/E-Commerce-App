import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from 'react-native'
import { Colors } from '../../assets/colors/Color'
import { FontFamily } from '../../assets/fonts/FontFamily'
import Button from '../SharedComponents/Button'
import TopProductsShimmer from '../shimmerEffects/TopProductsShimmer'
import AddToCartButton from '../SharedComponents/AddToCartButton'
import { useDispatch, useSelector } from 'react-redux'
import { addCartData, removeCartData } from '../../storage/redux/slices/AddToCartSlice'
import { navigate } from '../../navigation/navigationService/NavigationService'
import { useIsFocused } from '@react-navigation/native'

const RenderItem = ({ item, showCartButton }) => {

    let dispatch = useDispatch()
    let focus = useIsFocused()

    const [getValue, setValue] = React.useState(0)
    let fetchProducts = useSelector(state => state?.cart?.addToCartData)

    console.log("FOCUS HOOK>>>>>>>>>>>>", focus);

    let discountVal = (item.oldPrice - item.price) / item.oldPrice
    let discountPer = discountVal * 100
    // console.log("discount per>>>>>11", discountPer.toFixed());

    const handleAddToCart = (value) => {
        if (value > 0)
            dispatch(addCartData({ ...item, qtyValue: value }))
        else
            dispatch(removeCartData(item))
    }

    React.useEffect(() => {
        fetchProducts?.filter((i, ind) => {
            if (item.id === i.id)
                setValue(i?.qtyValue)
        })
    }, [focus])

    return (
        <View style={{ flex: 1, borderWidth: 1, borderColor: Colors.lightskyblue, margin: 5, borderRadius: 5, padding: 5 }}>
            <View style={{ position: "absolute", right: 5, zIndex: 1 }} >
                <Image source={require('../../assets/images/discount_new.png')} style={{ width: 32, height: 32 }} />
            </View>
            <View style={{ position: "absolute", right: 11.5, top: 2, zIndex: 2 }}>
                <Text style={{ fontSize: 7, color: "#fff", fontFamily: FontFamily.PoppinsBold }} >{`${discountPer.toFixed()}%`}</Text>
                <Text style={{ fontSize: 7, color: "#fff", fontFamily: FontFamily.PoppinsBold, bottom: 3 }}>off</Text>
            </View>
            <TouchableOpacity onPress={() => navigate('ProductDescription', item)} style={{ alignItems: "center" }}>
                <Image source={item.image} style={{ width: 150, height: 150, marginTop: 10 }} resizeMode='center' />
            </TouchableOpacity>
            <Text numberOfLines={1} style={{ fontSize: 14, marginTop: 10, color: Colors.black, fontFamily: FontFamily.PoppinsMedium }} >{item.title}</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text style={{ fontSize: 13, color: Colors.black, marginRight: 2 }}>&#8377;{' '}{item.price}</Text>
                <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 10 }}>{item.oldPrice}</Text>
            </View>
            {showCartButton ? <AddToCartButton getValue={getValue} setValue={setValue} handleValue={(value) => handleAddToCart(value)} /> : null}
        </View>
    )
}

const TopProducts = ({ productsData, onRefresh, isRefreshing, showCartButton }) => {

    const [loader, setLoader] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 4000);
    }, [])

    return (
        <>
            {loader ? <TopProductsShimmer /> :
                <FlatList
                    data={productsData}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <RenderItem showCartButton={showCartButton} item={item} />}
                    keyExtractor={item => item.id}
                    // onRefresh={onRefresh}
                    // refreshing={isRefreshing}
                    contentContainerStyle={{ margin: 10 }}
                    ListFooterComponent={<View style={{ marginBottom: 30 }} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={onRefresh}
                            // title="Pull to refresh"
                            tintColor="#fff"
                            colors={[Colors.lightskyblue]}
                        // titleColor="#fff"
                        />
                    }
                />}
        </>
    )
}

TopProducts.defaultProps = {
    productsData: [],
    isRefreshing: false,
    onRefresh: () => { },
    showCartButton: true
}

export default TopProducts