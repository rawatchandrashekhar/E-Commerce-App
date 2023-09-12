import React, { useState, useEffect, memo } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import { Colors } from '../../assets/colors/Color';
import Logo from '../../helper/Logo';
import TouchableOpacityComponent from './TouchableOpacityComponent';
import ModalComponent from './ModalComponent';
import ImageZoom from 'react-native-image-pan-zoom';

const { width, height } = Dimensions.get('screen');

const RenderItem = ({ item, disableTouch, setImageIndex, index, setModalVisible }) => {
    return <TouchableOpacityComponent onPress={() => { setImageIndex(index); setModalVisible(true) }} disable={disableTouch} style={{ width: width, alignItems: "center", justifyContent: "center" }} >
        <Image resizeMode='contain' source={item} style={{ width: "90%", height: 200, borderRadius: 10 }} />
    </TouchableOpacityComponent>
}

const HandleImagesInModal = ({ getData, getImageIndex }) => {
    return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
        <ImageZoom cropWidth={width}
            cropHeight={height}
            imageWidth={width * 0.9}
            imageHeight={height}>
            <Image resizeMode="contain" source={getData[getImageIndex]} style={{ height: height, width: width * 0.9, alignItems: "center", justifyContent: "center" }} />
        </ImageZoom>
    </View>
}

const CustomCarouselComponent = ({ data, disableTouch }) => {

    console.log("DATA OF CUSTOM CAROUSEL COMPONENT>>>>>>>>>>>", data);

    const [getCurrentIndex, setCurrentIndex] = useState(0);
    const [getLoading, setLoading] = useState(false);
    const [getData, setData] = useState(data);
    const [modalVisible, setModalVisible] = useState(false);
    const [getImageIndex, setImageIndex] = useState(null);

    console.log("get image index>>>>>>>>>>>>", getImageIndex);

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

    return (<><View style={{ width: width, alignSelf: "center" }}>
        {getLoading ? <View style={{ height: 235, justifyContent: "center" }} >
            <Logo coloredLogo={true} coloredBorderLine={true} coloredLogoText={true} />
        </View> :
            <>
                <FlatList
                    data={getData}
                    renderItem={({ item, index }) => <RenderItem item={item} disableTouch={disableTouch} setImageIndex={setImageIndex} index={index} setModalVisible={setModalVisible} />}
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
        <ModalComponent children={<HandleImagesInModal getData={getData} getImageIndex={getImageIndex} />} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
    )
}

CustomCarouselComponent.defaultProps = {
    data: [],
    disableTouch: false
}

export default memo(CustomCarouselComponent)

const styles = StyleSheet.create({

})