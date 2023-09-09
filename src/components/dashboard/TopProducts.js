import React, { useState, memo, useCallback, useMemo } from 'react'
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
import useTopProductsHook from '../../helper/customHooks/forTopProducts/useTopProductsHook'

const RenderItem = ({ item, showCartButton, showHorizontal }) => {

    // console.log("item", item);

    // console.log("FOCUS HOOK>>>>>>>>>>>>", focus);

    const [getValue, setValue, selected, setSelected, handleAddToCart, handleChange] = useTopProductsHook(item);

    let discountVal = (item.oldPrice - item.price) / item.oldPrice;
    let discountPer = discountVal * 100;
    // console.log("discount per>>>>>11", discountPer.toFixed());

    const addToCartComponent = useMemo(() => <AddToCartButton getValue={getValue} setValue={setValue} handleValue={(value) => handleAddToCart(value)} />, [getValue]);
    const favComponent = useMemo(() => <FavouriteButton handlePress={(value) => handleChange(value)} selected={selected} setSelected={setSelected} />, [selected])

    return (
        <View style={{ width: showHorizontal ? 250 : null, flex: 1, borderWidth: 1, borderColor: Colors.lightskyblue, marginHorizontal: showHorizontal ? 8 : 5, borderRadius: 5, padding: 5, marginVertical: 5 }}>
            {favComponent}
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
            {showCartButton ? addToCartComponent : null}
        </View>
    )
}

const TopProducts = ({ productsData, onRefresh, isRefreshing, showCartButton, horizontalCol, showHorizontal }) => {

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
                    numColumns={horizontalCol}
                    horizontal={showHorizontal ?? false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <RenderItem showCartButton={showCartButton} item={item} showHorizontal={showHorizontal} />}
                    keyExtractor={item => item.id}
                    // onRefresh={onRefresh}
                    // refreshing={isRefreshing}
                    contentContainerStyle={{ margin: 5 }}
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
    showCartButton: true,
    horizontalCol: 2
}

export default memo(TopProducts)