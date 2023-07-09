import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { Colors } from '../../assets/colors/Color'

const Loader = () => {

    const Dot = ({ style }) => {
        return <Animated.View
            style={style}
        />
    }

    const animations = {
        one: new Animated.Value(0),
        two: new Animated.Value(0),
        three: new Animated.Value(0)
    }

    const onAnimate = (animation, nextAnimation) => {
        Animated.sequence([
            Animated.timing(animation, {
                toValue: -10,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(animation, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true
            })
        ]).start()
        setTimeout(nextAnimation, 300);
    }

    const startAnimation = () => {
        function thirdAnimation() {
            onAnimate(animations.three, () => {
                setTimeout(() => {
                    startAnimation()
                }, 500);
            })
        }
        function secondAnimation() {
            onAnimate(animations.two, thirdAnimation)
        }
        onAnimate(animations.one, secondAnimation)
    }

    React.useEffect(() => {
        startAnimation()
    }, [])

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", width: 60, flexDirection: "row" }} >
            <Dot style={{
                ...styles.dotContainer,
                transform: [{ translateY: animations.one }]
            }} />
            <Dot style={{
                ...styles.dotContainer,
                transform: [{ translateY: animations.two }]
            }} />
            <Dot style={{
                ...styles.dotContainer,
                transform: [{ translateY: animations.three }]
            }} />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    dotContainer: {
        width: 10,
        height: 10,
        backgroundColor: Colors.white,
        borderRadius: 5,
    }
})