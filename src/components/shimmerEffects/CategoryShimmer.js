import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { Colors } from '../../assets/colors/Color'

const { width, height } = Dimensions.get('screen')

const Item = ({ item }) => {
    return (
        <View style={{ backgroundColor: Colors.white, margin: 5, paddingVertical: 5, borderRadius: 5 }}>
            <SkeletonPlaceholder>
                <View style={{ flexDirection: "column", alignItems: "center" }} >
                    <View style={{ width: 60, height: 60, borderRadius: 30, marginHorizontal: 10 }} />
                    <View style={{ width: 50, height: 10, marginTop: 5 }} />
                </View>
            </SkeletonPlaceholder>
        </View>
    )
}

const CategoryShimmer = () => {
    return (
        <FlatList
            data={[1, 1, 1, 1]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <Item item={item} />}
            style={{ alignSelf: "center" }}
        />
    )
}

export default CategoryShimmer