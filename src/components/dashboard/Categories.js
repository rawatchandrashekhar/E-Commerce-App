import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { Styles } from '../../assets/globalCSS/GlobalCSS'
import CategoryShimmer from '../shimmerEffects/CategoryShimmer'

const Item = ({ item }) => {
    return (
        <TouchableOpacity style={Styles.dashboardScrollviewContainer}>
            <View style={Styles.dashboardMapContainer}>
                <View style={Styles.dashboardMapImageContainer}>
                    <Image source={item.image} resizeMode='center' style={{ width: 50, height: 50 }} />
                </View>
                <View style={Styles.dashboardMapTextView}>
                    <Text style={Styles.dashboardMapText} >{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Categories = ({ data }) => {

    const [loader, setLoader] = useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 4000);
    }, [])

    return (
        <>
            {loader ? <CategoryShimmer /> :
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Item item={item} />}
                />}
        </>
    )
}

Categories.defaultProps = {
    data: []
}

export default Categories