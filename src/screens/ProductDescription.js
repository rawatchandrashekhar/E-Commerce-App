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
import CustomCarouselComponent from '../components/SharedComponents/CustomCarouselComponent'

const { width, height } = Dimensions.get('screen')

const ProductDescription = ({ navigation }) => {

    let { route, params } = useRoute();
    let dispatch = useDispatch();

    const [getValue, setValue, selected, setSelected, handleAddToCart, handleChange] = useTopProductsHook(params);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedImage, setSelectedImage] = useState(params?.image);
    const [showRestDesc, setShowRestDesc] = useState(false);
    const [getPrice, setPrice] = useState({
        newPrice: params?.price,
        oldPrice: params?.oldPrice
    })

    const handleSelectedColor = (index, item) => {
        setSelectedColor(index);
        setSelectedImage(item.images);
        setPrice({ newPrice: item?.price, oldPrice: item?.oldPrice });
        console.log("selected color images>>>>>>>>>>>>>>>34", item.images);
    }

    const handleSelectedSize = (item, index) => {
        setSelectedSize(index);
    }

    const showColorData = () => {
        return params?.colors?.map((item, index) => {
            return <TouchableOpacity activeOpacity={0.7} onPress={() => handleSelectedColor(index, item)} key={index} style={{ marginRight: 10, borderWidth: 2, borderColor: index === selectedColor ? Colors.lightskyblue : "#ecf0f1", borderRadius: 15 }} >
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: item.color, margin: 2 }} />
            </TouchableOpacity>
        })
    }

    const showSizeData = () => {
        return params?.sizes?.map((item, index) => {
            return <TouchableOpacity activeOpacity={0.7} onPress={() => handleSelectedSize(item, index)} key={index} style={{ marginRight: 10 }} >
                <View style={{ width: 25, height: 25, borderRadius: 5, borderWidth: 2, borderColor: selectedSize === index ? Colors.lightskyblue : "#dfe6e9" }} >
                    <Text style={{ fontFamily: FontFamily.PoppinsMedium, color: selectedSize === index ? "#000" : "grey", fontSize: 14, textAlign: "center" }} >{item}</Text>
                </View>
            </TouchableOpacity>
        })
    }

    const showDescription = () => {
        return <Text>{params?.description.slice(0, 160)}
            {params?.description?.length > 160 && showRestDesc !== true ?
                <Text onPress={() => setShowRestDesc(true)} style={{ color: Colors.lightskyblue }}>see more...</Text> : null}
            {showRestDesc ?
                <Text>{params?.description}<Text onPress={() => setShowRestDesc(false)} style={{ color: Colors.lightskyblue }} >{`${' '}see less...`}</Text></Text>
                : null}
        </Text>
    }

    // console.log("ROUTE OF PRODUCT DESCRIPTION SCREEN", params);

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
                {/* <CarouselComponent data={selectedImage} customWidth={'50%'} /> */}
                <CustomCarouselComponent data={selectedImage} />
                <Space mV={10} />
                <View style={{ borderBottomWidth: 2, borderRadius: 10, borderColor: Colors.lightskyblue, width: "95%", alignSelf: "center" }} />
                <Space mV={5} />
                <Text style={{ fontFamily: FontFamily.PoppinsMedium, fontSize: 20, color: Colors.black }} >{params?.title}</Text>
                {params?.colors?.length !== 0 ?
                    <View style={{ marginVertical: 8, width: "45%", padding: 0, borderRadius: 10 }} >
                        <Text style={{ fontSize: 15, color: "#000", fontFamily: FontFamily.PoppinsMedium, marginBottom: 3 }}>
                            Select Color
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            {showColorData()}
                        </View>
                    </View> : null}
                {params?.sizes?.length !== 0 ?
                    <View style={{ marginVertical: 8, width: "45%", padding: 0, borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, color: "#000", fontFamily: FontFamily.PoppinsMedium, marginBottom: 3 }}>
                            Select Size
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            {showSizeData()}
                        </View>
                    </View>
                    : null}
                <Space mV={5} />
                <View style={{ flexDirection: "column" }} >
                    <Text style={{ fontFamily: FontFamily.PoppinsMedium, color: Colors.black }} >Description{" "}:</Text>
                    {showDescription()}
                </View>
                <Space mV={30} />
            </ScrollView>
            <View style={{ position: "absolute", bottom: 0, width: "100%", flexDirection: "row", alignItems: "center", backgroundColor: "#fff" }}>
                <View style={{ flexDirection: "row", alignItems: "flex-end", width: "40%" }}>
                    <Text style={{ fontSize: 20, color: Colors.black, marginRight: 2, marginLeft: 15, fontFamily: FontFamily.PoppinsMedium, top: 4 }}>&#8377;{' '}{getPrice?.newPrice}</Text>
                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 13, fontFamily: FontFamily.PoppinsMedium }}>{getPrice?.oldPrice}</Text>
                </View>
                <View style={{ width: "60%", bottom: 2 }} >
                    {addToCartButtonComponent}
                </View>
            </View>
        </View>
    )
}

export default ProductDescription

const styles = StyleSheet.create({

})