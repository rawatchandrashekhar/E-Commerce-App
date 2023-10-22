import React, { useCallback, useMemo, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, Share, TouchableOpacity } from 'react-native'
import { useIsFocused, useRoute } from '@react-navigation/native'
import dynamicLinks from "@react-native-firebase/dynamic-links"
import Header from '../components/SharedComponents/Header'
import { Colors } from '../assets/colors/Color'
import Space from '../components/SharedComponents/Space'
import { FontFamily } from '../assets/fonts/FontFamily'
import AddToCartButton from '../components/SharedComponents/AddToCartButton'
import { addCartData, removeCartData } from '../storage/redux/slices/AddToCartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addFavData, removeFavData } from '../storage/redux/slices/AddToFavouriteSlice'
import { AlertSuccess } from '../components/SharedComponents/Alert'
import FavouriteButton from '../components/SharedComponents/FavouriteButton'
import ShareBtn from '../components/SharedComponents/ShareBtn'
import CarouselComponent from '../components/SharedComponents/CarouselComponent'
import useTopProductsHook from '../helper/customHooks/forTopProducts/useTopProductsHook'

const { width, height } = Dimensions.get('screen')

const ProductDescription = ({ navigation }) => {

    let { route, params } = useRoute();
    let dispatch = useDispatch();

    const [getValue, setValue, selected, setSelected] = useTopProductsHook(params.id);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedImage,setSelectedImage]=useState(params?.image);

    const handleSelectedColor = (index, item) => {
        setSelectedColor(index);
        setSelectedImage(item.images);
    }

    const showColorData = () => {
        return params?.colors?.map((item, index) => {
            return <TouchableOpacity onPress={() => handleSelectedColor(index, item)} key={index} style={{ marginRight: 10, borderWidth: 2, borderColor: index === selectedColor ? Colors.lightskyblue : "#fff", borderRadius: 15 }} >
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: item.color }} />
            </TouchableOpacity>
        })
    }

    const showSizeData = () => {
        return params?.sizes?.map((item, index) => {
            return <View key={index} style={{ marginRight: 10 }} >
                <View style={{ width: 25, height: 25, borderRadius: 5, borderWidth: 1, borderColor: "grey" }} >
                    <Text style={{ fontFamily: FontFamily.PoppinsMedium, color: "grey", fontSize: 14, textAlign: "center" }} >{item}</Text>
                </View>
            </View>
        })
    }

    // console.log("ROUTE OF PRODUCT DESCRIPTION SCREEN", params);

    const handleAddToCart = useCallback(
        (value) => {
            if (value > 0)
                dispatch(addCartData({ ...params, qtyValue: value }))
            else
                dispatch(removeCartData(params))
        },
        [getValue],
    )

    const handleChange = useCallback(
        (value) => {
            if (value) {
                dispatch(addFavData(params))
                AlertSuccess('Added Item to FAVOURITE!')
            } else {
                dispatch(removeFavData(params))
                AlertSuccess('Removed Item from FAVOURITE!')
            }
        },
        [selected],
    )


    const generateLink = async () => {
        try {
            const link = await dynamicLinks().buildShortLink({
                link: `https://ecommercefirstapp.page.link/u9DC?productId=${params?.id}&productTitle=${params?.title}&productPrice=${params?.price}&productOldPrice=${params?.oldPrice}&productDescription=${params?.description}`,
                domainUriPrefix: 'https://ecommercefirstapp.page.link',
                android: {
                    packageName: 'com.ecomm_practice'
                }
            }, dynamicLinks.ShortLinkType.DEFAULT)
            console.log("dynamic link>>>>74", link);
            return link
        } catch (e) {
            console.error("EXCEPTION IN PRODUCT DESCRIPTION>>>>>>>>>>>>>>>>>>>", e);
        }
    }

    const shareProduct = async () => {
        let getLink = await generateLink()
        try {
            Share.share({
                message: getLink
            })
        } catch (e) {
            console.error("SHARE EXCEPTION IN PRODUCT DESCRIPTION>>>>>>>>>>>>>>>>>>>", e);
        }
    }

    const favButtonComponent = useMemo(() => <FavouriteButton handlePress={(value) => handleChange(value)} selected={selected} setSelected={setSelected} />, [selected]);
    const addToCartButtonComponent = useMemo(() => <AddToCartButton setValue={setValue} getValue={getValue} handleValue={(value) => handleAddToCart(value)} />, [getValue]);

    return (
        <View style={{ flex: 1 }} >
            <Header handlePressLeftIcon={() => navigation.goBack()} title={'Description'} leftImgWidth={20} leftImgHeight={13} rightImgWidth={25} rightImgHeight={25} leftIcon={require('../assets/images/back.png')} rightIcon={require('../assets/images/cartTwo.png')} showLogo={false} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15, padding: 10 }}>
                {favButtonComponent}
                <ShareBtn handlePress={() => shareProduct()} />
                <CarouselComponent data={selectedImage} />
                <Space mV={10} />
                <View style={{ borderBottomWidth: 2, borderRadius: 10, borderColor: Colors.lightskyblue, width: width * 0.95, alignSelf: "center" }} />
                <Space mV={5} />
                <Text style={{ fontFamily: FontFamily.PoppinsMedium, fontSize: 20, color: Colors.black }} >{params?.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 16, color: Colors.black, marginRight: 2 }}>&#8377;{' '}{params?.price}</Text>
                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 12 }}>{params?.oldPrice}</Text>
                </View>
                {/* <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-between" }} > */}
                {params?.colors?.length !== 0 ?
                    <View style={{ marginVertical: 8, backgroundColor: "#fff", width: "45%", padding: 10, borderRadius: 10 }} >
                        <Text style={{ fontSize: 15, color: "#000", fontFamily: FontFamily.PoppinsMedium, marginBottom: 3 }}>
                            Select Color
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            {showColorData()}
                        </View>
                    </View> : null}
                {params?.sizes?.length !== 0 ?
                    <View style={{ marginVertical: 8, backgroundColor: "#fff", width: "45%", padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, color: "#000", fontFamily: FontFamily.PoppinsMedium, marginBottom: 3 }}>
                            Select Size
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            {showSizeData()}
                        </View>
                    </View>
                    : null}
                {/* </View> */}
                <Space mV={5} />
                <View style={{ flexDirection: "column" }} >
                    <Text style={{ fontFamily: FontFamily.PoppinsMedium, color: Colors.black }} >Description{" "}:</Text>
                    <Text>{params?.description}</Text>
                </View>
                <Space mV={5} />
                {addToCartButtonComponent}
                <Space mV={10} />
            </ScrollView>
            {/* <View style={{ position: "absolute", bottom: 5, width: width * 0.9, alignSelf: "center" }}>
                <AddToCartButton />
            </View> */}
        </View>
    )
}

export default ProductDescription

const styles = StyleSheet.create({

})