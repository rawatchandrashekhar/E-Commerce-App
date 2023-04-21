import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { Colors } from '../../assets/colors/Color'

const { height, width } = Dimensions.get('screen')

const Item = ({ item }) => {
    return (
        <View style={{ backgroundColor: Colors.white, margin: 5, borderRadius: 10 }}>
            <SkeletonPlaceholder>
                <View style={{ flexDirection: "column" }} >
                    <View style={{ width: 150, height: 150, margin: 10, borderRadius: 5 }} />
                    <View style={{ width: '100%' }}>
                        <View style={{ marginTop: 10, width: '90%', height: 15, alignSelf: "center" }} />
                        <View style={{ marginLeft: 8, marginTop: 5, width: '30%', height: 10, alignSelf: "flex-start" }} />
                        <View style={{ marginTop: 5, marginBottom: 10, width: '90%', height: 20, alignSelf: "center" }} />
                    </View>
                </View>
            </SkeletonPlaceholder>
        </View>
    )
}

const TopProductsShimmer = () => {
    return (
        <FlatList
            data={[1, 1, 1, 1]}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <Item item={item} />}
            style={{ alignSelf: "center" }}
            // contentContainerStyle={{ margin: 10 }}
            ListFooterComponent={<View style={{ marginBottom: 30 }} />}
        />
    )
}

export default TopProductsShimmer