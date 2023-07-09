import React, { useState, memo } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from 'react-native'
import { Colors } from '../../assets/colors/Color'
import { FontFamily } from '../../assets/fonts/FontFamily'
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import TopProductsShimmer from '../shimmerEffects/TopProductsShimmer'
import AddToCartButton from '../SharedComponents/AddToCartButton'
import { useDispatch, useSelector } from 'react-redux'
import { addCartData, removeCartData } from '../../storage/redux/slices/AddToCartSlice'
import { navigate } from '../../navigation/navigationService/NavigationService'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import FavouriteButton from '../SharedComponents/FavouriteButton'
import { addFavData, removeFavData } from '../../storage/redux/slices/AddToFavouriteSlice'
import { AlertSuccess } from '../SharedComponents/Alert'

const RenderItem = ({ item, showCartButton }) => {

    // console.log("item", item);

    let tempImg = item?.image
    // console.log("tempImg", tempImg);

    let dispatch = useDispatch()
    let focus = useIsFocused()

    const [getValue, setValue] = React.useState(0)
    const [selected, setSelected] = React.useState(false)
    let fetchProducts = useSelector(state => state?.cart?.addToCartData)
    let fetchFavProducts = useSelector(state => state?.favourite?.addToFavouriteData)

    // console.log("FOCUS HOOK>>>>>>>>>>>>", focus);

    let discountVal = (item.oldPrice - item.price) / item.oldPrice
    let discountPer = discountVal * 100
    // console.log("discount per>>>>>11", discountPer.toFixed());

    const handleAddToCart = (value) => {
        if (value > 0)
            dispatch(addCartData({ ...item, qtyValue: value }))
        else
            dispatch(removeCartData(item))
    }

    const handleChange = (value) => {
        if (value) {
            dispatch(addFavData(item))
            AlertSuccess('Added Item to FAVOURITE!')
        } else {
            dispatch(removeFavData(item))
            AlertSuccess('Removed Item from FAVOURITE!')
        }
    }

    React.useEffect(() => {
        let fp = fetchProducts?.filter((i, ind) => {
            if (item.id === i.id) {
                console.log("i?.qtyValue", i?.qtyValue);
                setValue(i?.qtyValue)
                return i
            }
        })
        if (fp == "") {
            setValue(0)
        }
    }, [focus])

    // useFocusEffect(
    //     React.useCallback(() => {
    //         if (getValue === 0) {
    //             setValue(0)
    //         }
    //     }, [focus, getValue])
    // )
    // React.useEffect(() => {
    //     if (getValue === 0) {
    //         setValue(0)
    //     }
    // }, [focus, getValue])

    React.useEffect(() => {
        fetchFavProducts?.filter((i, ind) => {
            if (item.id === i.id)
                setSelected(!selected)
        })
    }, [focus])

    return (
        <View style={{ flex: 1, borderWidth: 1, borderColor: Colors.lightskyblue, margin: 5, borderRadius: 5, padding: 5 }}>
            <FavouriteButton handlePress={(value) => handleChange(value)} selected={selected} setSelected={setSelected} />
            <View style={{ position: "absolute", right: 5, zIndex: 1 }} >
                <Image source={require('../../assets/images/discount_new.png')} style={{ width: 32, height: 32 }} />
            </View>
            <View style={{ position: "absolute", right: 11.5, top: 2, zIndex: 2 }}>
                <Text style={{ fontSize: 7, color: "#fff", fontFamily: FontFamily.PoppinsBold }} >{`${discountPer.toFixed()}%`}</Text>
                <Text style={{ fontSize: 7, color: "#fff", fontFamily: FontFamily.PoppinsBold, bottom: 3 }}>off</Text>
            </View>
            <TouchableOpacity onPress={() => navigate('ProductDescription', item)} style={{ alignItems: "center" }}>
                <Image source={item.image[0]} style={{ width: 150, height: 150, marginTop: 10 }} resizeMode='center' />
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

export default memo(TopProducts)