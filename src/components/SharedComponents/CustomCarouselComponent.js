import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import { Colors } from '../../assets/colors/Color';
import Logo from '../../helper/Logo';

const { width, height } = Dimensions.get('screen');

const RenderItem = ({ item }) => {
    return <View style={{ width: width, alignItems: "center", justifyContent: "center" }} >
        <Image resizeMode='contain' source={item} style={{ width: "90%", height: 200, borderRadius: 10 }} />
    </View>
}

const CustomCarouselComponent = ({ data }) => {

    console.log("DATA OF CUSTOM CAROUSEL COMPONENT>>>>>>>>>>>", data);

    const [getCurrentIndex, setCurrentIndex] = useState(0);
    const [getLoading, setLoading] = useState(false);
    const [getData, setData] = useState(data);

    useEffect(() => {
        setLoading(true);
        const timeOut = setTimeout(() => {
            setData(data);
            setCurrentIndex(0);
            setLoading(false);
        }, 1000);
        // return () => {
        //     clearInterval(timeOut);
        // }
    }, [data])


    return (<View style={{ width: width, alignSelf: "center" }}>
        {getLoading ? <View style={{ height: 235, justifyContent: "center" }} >
            <Logo coloredLogo={true} coloredBorderLine={true} coloredLogoText={true} />
        </View> :
            <>
                <FlatList
                    data={getData}
                    renderItem={({ item }) => <RenderItem item={item} />}
                    keyExtractor={(item, index) => index}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={(event) => {
                        const x = event.nativeEvent.contentOffset.x;
                        // console.log("x value of custom carousel component>>>>>>>",x);
                        // console.log("x divide by width value in custom carousel component>>>>>>>>",x/width);
                        setCurrentIndex((x / width).toFixed(0));
                    }}
                />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    {getData?.map((item, index) => {
                        return <View style={{ width: index == getCurrentIndex ? 10 : 8, height: index == getCurrentIndex ? 10 : 8, borderRadius: index == getCurrentIndex ? 5 : 4, backgroundColor: index == getCurrentIndex ? Colors.lightskyblue : "#dfe6e9", marginHorizontal: 5, marginTop: 10, marginBottom: 15 }} />
                    })}
                </View>
            </>}
    </View>
    )
}

CustomCarouselComponent.defaultProps = {
    data: []
}

export default CustomCarouselComponent

const styles = StyleSheet.create({

})