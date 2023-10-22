import React, { memo } from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors } from '../../assets/colors/Color';

const { width, height } = Dimensions.get('screen')

const SLIDER_WIDTH = width + 30
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)


const CarouselComponent = ({ data, customWidth }) => {

    const RenderItem = ({ item }) => {
        return <View style={{ padding: 20, borderRadius: 20, alignItems: "center" }}>
            <Image source={item} resizeMode='contain' style={{ width: customWidth, height: width / 2, borderRadius: 10 }} />
        </View>
    }

    // console.log("carousel component data>>>>>>>>>>>>>19",data);

    const [getIndex, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    React.useEffect(() => {
        if (getIndex === data.length - 1) {
            setTimeout(() => {
                isCarousel?.current?.snapToItem(0);
            }, 2000)
        }
    }, [getIndex]);

    return (
        <View style={{ justifyContent: "center", alignItems: "center" }} >
            <Carousel
                layout="default"
                ref={isCarousel}
                data={data}
                renderItem={RenderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={index => setIndex(index)}
                removeClippedSubviews={false}
                // loop={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3500}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                enableSnap={true}
                useScrollView={true}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={getIndex}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginHorizontal: 8,
                    backgroundColor: Colors.lightskyblue,
                    top: -20,
                }}
                tappableDots={true}
            />
            {/* <Carousel
                            loop
                            width={width * 0.9}
                            height={width / 2}
                            autoPlay={true}
                            data={imagesData}
                            scrollAnimationDuration={1000}
                            // mode='parallax'
                            pagingEnabled
                            // onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={({ item, index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        // borderWidth: 1,
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        source={item}
                                        style={{ width: width * 0.9, height: width / 2, borderRadius: 10 }}
                                        resizeMode='contain'
                                    />
                                </View>
                            )}
                        /> */}
        </View>
    )
}

CarouselComponent.defaultProps = {
    data: [],
    customWidth: "100%"
}

export default memo(CarouselComponent)