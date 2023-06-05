import React from 'react'
import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import { Colors } from '../../../assets/colors/Color'
import { FontFamily } from '../../../assets/fonts/FontFamily'
import Button from '../../SharedComponents/Button'

const { width, height } = Dimensions.get('screen')

const Item = ({ item }) => {
    return (<View style={{ width: width * 0.9, backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.lightskyblue, padding: 10, marginTop: 10, borderRadius: 5 }} >
        <View style={{ flexDirection: "row" }}>
            <Image source={item?.image[0]} style={{ width: 60, height: 80, marginRight: 10 }} resizeMode='contain' />
            <View>
                <Text numberOfLines={1} style={{ fontSize: 16, width: 230, fontFamily: FontFamily.PoppinsMedium, color: Colors.black }}>{item?.title}</Text>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10 }} >
                    <Button btnWidth={'40%'} btnText={'Delete'} btnBack={Colors.white} txtColor={Colors.indianred} txtSize={12} />
                    <Button btnWidth={'40%'} btnText={'Move to Cart'} txtSize={12} />
                </View>
            </View>
        </View>
    </View>)
}

const FavFlatlist = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item, index) => item?.id}
            contentContainerStyle={{ alignSelf: "center" }}
        />
    )
}

export default FavFlatlist