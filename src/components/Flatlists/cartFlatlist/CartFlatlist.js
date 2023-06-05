import React from 'react'
import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import { Colors } from '../../../assets/colors/Color'
import { FontFamily } from '../../../assets/fonts/FontFamily'
import AddToCartButton from '../../SharedComponents/AddToCartButton'
import { useDispatch } from 'react-redux'
import { addCartData, removeCartData } from '../../../storage/redux/slices/AddToCartSlice'

const { width, height } = Dimensions.get("screen")

const Item = ({ item }) => {

    let dispatch = useDispatch()

    const [getValue, setValue] = React.useState(item.qtyValue)

    const handleAddToCart = (value) => {
        if (value > 0)
            dispatch(addCartData({ ...item, qtyValue: value }))
        else
            dispatch(removeCartData(item))
    }

    return (
        <View style={{ width: width * 0.9, backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.lightskyblue, padding: 10, marginTop: 10, borderRadius: 5 }} >
            <View style={{ flexDirection: "row" }} >
                <Image source={item?.image[0]} style={{ width: 60, height: 80, marginRight: 10 }} resizeMode='contain' />
                <View style={{ alignItems: "flex-start" }}>
                    <Text numberOfLines={1} style={{ fontSize: 16, width: 230, fontFamily: FontFamily.PoppinsMedium, color: Colors.black }} >{item?.title}</Text>
                    <Text style={{ fontFamily: FontFamily.PoppinsMedium, fontSize: 14 }} >Quantity{' '}:{' '}{item?.qtyValue}</Text>
                    <AddToCartButton getValue={getValue} setValue={setValue} handleValue={(value) => handleAddToCart(value)} />
                </View>
            </View>
        </View>
    )
}

const CartFlatlist = ({ data }) => {
    console.log("redux cart data", data);
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item, index) => item?.id}
            contentContainerStyle={{ alignSelf: "center" }}
        />
    )
}

CartFlatlist.defaultProps = {
    data: []
}

export default CartFlatlist